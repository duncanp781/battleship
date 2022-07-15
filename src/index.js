import { player } from "./player";
import { gameboard } from "./gameboard";
import { dom } from "./dom";
import { ship } from "./ship";
import "./style.css";

export const game = (() => {
  const p1 = player("A", 8);
  const p2 = player("B", 8);
  const display_manager = dom();
  const placement_order = [3, 4, 2, 2];
  let gameBegun = false;
  let toPlace = 0;
  let onesTurn = true;
  let gameDone = false;

  function placement_manager() {
    console.log('toPlace: ' + this.toPlace);
    if ((this.toPlace >= placement_order.length)) {
      console.log('beginning game!');
      const form = document.querySelector('form');
      form.className = 'over';
      this.gameBegun = true;
      return;
    }
    display_manager.placement_form();
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
      //The player attacked, display it    }
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
        turn.textContent = player == p1 ? "You lose!" : "You win!";
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
    place_ship_random,
    do_player_turn,
    gameBegun,
    toPlace,
    placement_manager,
    placement_order,
  };
})();

function initialize_game() {
  const container = document.querySelector(".gamecontainer");
  container.appendChild(game.display_manager.create_board(game.p1));
  container.appendChild(game.display_manager.create_board(game.p2));

  game.display_manager.display_board(game.p1);
  game.display_manager.display_board(game.p2);

  game.placement_manager();

  place_ships(game.place_ship_random);

  function place_ships(place_method) {
    for (let len of game.placement_order){
      place_method(len);
    }
  }

  game.display_manager.display_board(game.p1);
  game.display_manager.display_board(game.p2);
}

initialize_game();
