function dom() {
  const create_board = function (board) {
    const container = document.createElement("div");
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        const square = document.createElement("div");
        square.className = `square ${i} ${j}`;
        container.appendChild(square);
      }
    }
    return container;
  };
  const display_square = function (coords, board) {
    const square = document.querySelector(`.board.${coords[0]}.${coords[1]}`);
    let info = board[coords[0]][coords[1]];
    if (!info) {
      square.textContent = "";
    } else if (info == "miss") {
      square.textContent = "O";
    } else {
      square.textContent = "S";
    }
  };

  const display_board = function (board) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        display_square([i, j], board);
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
