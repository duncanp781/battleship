import { player } from "./player";
import { gameboard } from "./gameboard";
import { dom } from "./dom";
import { ship } from "./ship";
import "./style.css";

export const game = (() => {
  const p1 = player("A", 8);
  const p2 = player("B", 8);
  const display_manager = dom();
  let onesTurn = true;
  let gameDone = false;

  function prompt_place_ship(length) {
    while (true) {
      let answer = prompt(
        `Where would you like to place your ship of length ${length}? Format is "row, column", eg. "3,2"`
      );

      let coords = answer.split(",").map((entry) => parseInt(entry));
      const toPlace = ship(length);
      if (p1.board.place_horiz(coords, toPlace)) {
        break;
      } else {
        alert("Those are not valid coordinates");
      }
    }
    display_manager.display_board(p1);
  }

  function place_ship_random(length) {
    const toPlace = ship(length);
    while (true) {
      let rand1 = Math.floor(Math.random() * p2.board.size);
      let rand2 = Math.floor(Math.random() * p2.board.size);
      if (p2.board.place_horiz([rand1, rand2], toPlace)) {
        display_manager.display_board(p2);
        break;
      }
    }
  }

  function do_player_turn(coords) {
    if (receiveAttack(coords, p2)) {
      //The player attacked, display it
      display_manager.display_square(coords, p2);
      //Now do the AI's turn
      let next = ai_attack(p1);
      display_manager.display_square(next, p1);
    }
  }

  function receiveAttack(coords, player) {
    if (gameDone) {
      return false;
    }
    let valid_move = player == p1 ? !onesTurn : onesTurn;

    if (!valid_move) {
      return false;
    }

    if (player.board.receiveAttack(coords)) {
      onesTurn = !onesTurn;
      if (player.board.allSunk()) {
        const turn = document.querySelector(".turn");
        turn.textContent = (player == p1) ? "You lose!" : "You win!";
        gameDone = true;
      }
      return true;
    }
  }

  function ai_attack(player) {
    //Try guessing 10 times a random spot and moving there
    let board = player.board;
    for (let i = 0; i < 10; i++) {
      let rand1 = Math.floor(Math.random() * board.size);
      let rand2 = Math.floor(Math.random() * board.size);
      let coords = [rand1, rand2];
      if (board.canReceiveAttack(coords)) {
        receiveAttack(coords, player);
        return coords;
      }
    }
    //Go through linearly
    for (let i = 0; i < board.size; i++) {
      for (let j = 0; j < board.size; j++) {
        let coords = [i, j];
        if (board.canReceiveAttack(coords)) {
          receiveAttack(coords, player);
          return coords;
        }
      }
    }
    //No place to attack, error somewhere
    console.log("Ai attack error");
    return false;
  }

  return {
    p1,
    p2,
    onesTurn,
    display_manager,
    receiveAttack,
    ai_attack,
    prompt_place_ship,
    place_ship_random,
    do_player_turn,
  };
})();

function initialize_game() {
  const container = document.querySelector(".gamecontainer");
  container.appendChild(game.display_manager.create_board(game.p1));
  container.appendChild(game.display_manager.create_board(game.p2));

  game.display_manager.display_board(game.p1);
  game.display_manager.display_board(game.p2);

  place_ships(game.prompt_place_ship);
  place_ships(game.place_ship_random);

  function place_ships(place_method) {
    place_method(3);
    // place_method(4);
    // place_method(2);
    // place_method(2);
  }

  game.display_manager.display_board(game.p1);
  game.display_manager.display_board(game.p2);
}

initialize_game();
