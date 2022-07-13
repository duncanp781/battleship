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

  default_ships(p1.board, p2.board);

  const container = document.querySelector('.gamecontainer');
  container.appendChild(display_manager.create_board(p1));
  container.appendChild(display_manager.create_board(p2));

  display_manager.display_board(p1);
  display_manager.display_board(p2);



  function receiveAttack(coords, player) {
    let valid_move;
    switch (player.name) {
      case "A":
        valid_move = !onesTurn;
        break;
      case "B":
        valid_move = onesTurn;
        break;
    }

    if (!valid_move) {
      console.log("Not your turn");
      return;
    }

    
    player.board.receiveAttack(coords);
    onesTurn = !onesTurn;
    display_manager.display_turn(onesTurn);

    if (player.board.allSunk()) {
      console.log("game over!");
    }
    
  }

  return {
    p1,
    p2,
    onesTurn,
    display_manager,
    receiveAttack,
  };
})();

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
