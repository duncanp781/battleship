import {gameboard} from './gameboard.js';

function player(name, size) {
  let board = gameboard(size);

  return {
    name,
    board
  };
}

export { player };
