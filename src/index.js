import { player } from "./player";
import { gameboard } from "./gameboard";
import { dom} from "./dom";
import { ship } from "./ship";
import './style.css'

function game(){
  const p1 = player('A', 8, true);
  const p2 = player('B', 8, true);

  default_ships(p1.board, p2.board);

  const display_manager = dom();
  document.body.append(display_manager.create_board(p1));
  document.body.append(display_manager.create_board(p2));

  console.log(p1);
  display_manager.display_board(p1);
  display_manager.display_board(p2);
}

//Just a random ship layout to have by default
function default_ships(b1, b2){
  const b1s1 = ship(2);
  const b1s2 = ship(3);

  const b2s1 = ship(2);
  const b2s2 = ship(3);

  b1.place_horiz([0,0], b1s1);
  b1.place_vert([0,4], b1s2);

  b2.place_horiz([0,0], b2s1);
  b2.place_vert([1,4], b2s2);
}


game();