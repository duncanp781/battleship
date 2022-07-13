import { game} from ".";

function dom() {
  const create_board = function (player) {
    const board = player.board;
    const container = document.createElement("div");
    for (let i = 0; i < board.size; i++) {
      for (let j = 0; j < board.size; j++) {
        const square = document.createElement("div");
        square.className = `square r${i} c${j}`;
        square.addEventListener('click', (e) => _handle_clicks(e,player));
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
      square.textContent = "miss";
    } else {
      const ship = info[0];
      const isHurt = ship.hitMap[info[1]];
      if(isHurt){
        square.textContent = 'X';
      }else{
        square.textContent = 'S';
      }
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

  const display_turn = function(onesTurn){
    const turn = document.querySelector('.turn');

    let info = onesTurn ? 'Your turn': "Computer's turn";
    turn.textContent = info;
  }


  

  const _handle_clicks = function(e, player) {
    let info = e.target.className;
    //This turns the classname into an array of the numbers
    let coords = info
      .split('')
      .filter((entry) => /\d/.test(entry))
      .map((entry) => parseInt(entry.replace(/\D/g, '')));
    
    game.receiveAttack(coords,player);
    display_square(coords, player.board, player.name);

  }
  
  return {
    create_board,
    display_square,
    display_board,
    display_turn,
  };
}

export { dom };
