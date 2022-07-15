import { game } from ".";
import { ship } from "./ship";

function dom() {
  const create_board = function (player) {
    const board = player.board;
    const container = document.createElement("div");
    for (let i = 0; i < board.size; i++) {
      for (let j = 0; j < board.size; j++) {
        const square = document.createElement("div");
        square.className = `square r${i} c${j}`;
        if (player == game.p2) {
          square.addEventListener("click", (e) => _handle_clicks(e));
        }
        container.appendChild(square);
      }
    }
    container.className = `board ${player.name}`;
    return container;
  };

  const display_square = function (coords, player) {
    const toDisplay = player.board.gameboard;
    const square = document.querySelector(
      `.${player.name} .square.r${coords[0]}.c${coords[1]}`
    );
    let info = toDisplay[coords[0]][coords[1]];
    if (info == undefined) {
      square.setAttribute("display", "sea");
    } else if (info == "miss") {
      square.setAttribute("display", "miss");
    } else {
      const ship = info[0];
      const isHit = ship.hitMap[info[1]];
      if (isHit) {
        square.setAttribute("display", "hit");
      } else {
        // square.setAttribute("display", "ship");
        if (player == game.p1) {
          square.setAttribute("display", "ship");
        } else {
          square.setAttribute("display", "sea");
        }
      }
    }
  };

  const display_board = function (player) {
    for (let i = 0; i < player.board.size; i++) {
      for (let j = 0; j < player.board.size; j++) {
        display_square([i, j], player);
      }
    }
  };

  const _handle_clicks = function (e) {
    if (game.gameBegun) {
      console.log('click received');
      let info = e.target.className;
      //This turns the classname into an array of the numbers
      let coords = info
        .split("")
        .filter((entry) => /\d/.test(entry))
        .map((entry) => parseInt(entry.replace(/\D/g, "")));
      game.do_player_turn(coords);
    }else{
      console.log('game not begun');
    }
  };

  const placement_form = function () {
    console.log('running placement form');
    const form = document.querySelector("form");
    const label = document.getElementById("coords");
    const radio = document.getElementById("hor");
    const row = document.getElementById("row");
    const col = document.getElementById("col");
    label.textContent = `Enter the coordinates for your ship of length ${game.placement_order[game.toPlace]}: `;
    form.onsubmit =  (e) => {
      e.preventDefault();
      let dir = radio.checked;
      let coords = [parseInt(row.value), parseInt(col.value)];
      console.log(dir, coords);
      const toPlace = ship(game.placement_order[game.toPlace]);
      let fn = dir ?  game.p1.board.place_horiz : game.p1.board.place_vert;
      if (fn(coords, toPlace)) {
        display_board(game.p1);
        form.reset();
        game.toPlace += 1;
        game.placement_manager();
        return;
      } else {
        alert("Those are not valid coordinates");
        form.reset();
      }
    };
  };

  return {
    create_board,
    display_square,
    display_board,
    placement_form,
  };
}

export { dom };
