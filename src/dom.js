function dom() {
  const create_board = function (player) {
    const board = player.board;
    const container = document.createElement("div");
    for (let i = 0; i < board.size; i++) {
      for (let j = 0; j < board.size; j++) {
        const square = document.createElement("div");
        square.className = `square r${i} c${j}`;
        container.appendChild(square);
      }
    }
    container.className = `board ${player.name}`;
    return container;
  };
  const display_square = function (coords, board, name) {
    const toDisplay = board.gameboard;
    const square = document.querySelector(`.${name} .square.r${coords[0]}.c${coords[1]}`);
    let info = toDisplay[coords[0]][coords[1]];
    if (info == undefined) {
      square.textContent = "";
    } else if (info == "miss") {
      square.textContent = "O";
    } else {
      square.textContent = "S";
    }
  };

  const display_board = function (player) {
    let board = player.board;
    for (let i = 0; i < board.size; i++) {
      for (let j = 0; j < board.size; j++) {
        display_square([i, j], board, player.name);
      }
    }
  };
  
  return {
    create_board,
    display_square,
    display_board,
  };
}

export { dom };
