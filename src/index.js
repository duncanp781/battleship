import { player } from "./player";
import { gameboard } from "./gameboard";
import { dom } from "./dom";
import { ship } from "./ship";
import "./style.css";

export const game = (() => {
  const p1 = player("A", 8, true);
  const p2 = player("B", 8, true);
  const display_manager = dom();
  let onesTurn = true;
  let gameDone = false;

  default_ships(p1.board, p2.board);

  function receiveAttack(coords, player) {
    if (gameDone) {
      return false;
    }
    let valid_move;
    switch (player) {
      case p1:
        valid_move = !onesTurn;
        break;
      case p2:
        valid_move = onesTurn;
        break;
    }

    if (!valid_move) {
      console.log("Not your turn");
      return false;
    }

    if (player.board.receiveAttack(coords)) {
      onesTurn = !onesTurn;
      display_manager.display_turn(onesTurn);

      if (player.board.allSunk()) {
        const turn = document.querySelector(".turn");
        switch (player) {
          case p1:
            turn.textContent = "You lose!";
            break;
          case p2:
            turn.textContent = "You win!";
            break;
        }
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
        if (board.receiveAttack([i, j])) {
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
  };
})();

const container = document.querySelector(".gamecontainer");
container.appendChild(game.display_manager.create_board(game.p1));
container.appendChild(game.display_manager.create_board(game.p2));

game.display_manager.display_board(game.p1);
game.display_manager.display_board(game.p2);

//Just a random ship layout to have by default
function default_ships(b1, b2) {
  const b1s1 = ship(2);
  const b1s2 = ship(3);

  const b2s1 = ship(2);
  const b2s2 = ship(3);

  b1.place_horiz([0, 0], b1s1);
  b1.place_vert([0, 4], b1s2);

  b2.place_horiz([0, 0], b2s1);
  b2.place_vert([1, 4], b2s2);
}
