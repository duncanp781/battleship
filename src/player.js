function player(name, size, first) {
  let hasTurn = first;
  let won = false;
  let board = gameboard(size);

  function move(coords, board) {
    if (hasTurn) {
      let res = board.receiveAttack(coords);
      if (res) {
        hasTurn = false;
      }
      if (board.allSunk()) {
        won = true;
      }
      return res;
    }
    return false;
  }

  function random_move(board) {
    //Try guessing 10 times a random spot and moving there
    for (let i = 0; i < 10; i++) {
      let rand1 = Math.floor(Math.random() * board.size);
      let rand2 = Math.floor(Math.random() * board.size);
      if (board.receiveAttack([rand1, rand2])) {
        return true;
      }
    }
    //Go through linearly
    for (let i = 0; i < board.size; i++) {
      for (let j = 0; j < board.size; j++) {
        if (board.receiveAttack([i, j])) {
          return true;
        }
      }
    }
    //No place to attack, error somewhere
    return false;
  }
  return {
    hasTurn,
    won,
    board,
    move,
    random_move,
  };
}

export { player };