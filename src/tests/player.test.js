import {player} from '../player.js';
import{ship} from '../ship.js';

test('Can fill board', () => {
  const p1 = player('Dunc', 4, true);
  const p2 = player('Daniel', 4, false);
  
  expect(p1.random_move(p2.board)).toBe(true);
  expect(p1.random_move(p2.board)).toBe(false);
})

test('Will win', () => {
  const p1 = player('Dunc', 1, true);
  const p2 = player('Daniel', 1, false);
  const boat = ship(1)
  p2.board.place_horiz([0,0], boat);

  expect(p2.board.allSunk()).toBe(false);
  p1.move([0,0],p2.board);
  expect(p2.board.allSunk()).toBe(true);
})