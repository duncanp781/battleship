import { gameboard } from "../gameboard";
import { ship } from "../ship.js";



test("can place and sink a ship", () => {
  const game = gameboard(4);
  const firstship = ship(1);
  game.place_horiz([0, 0], firstship);
  expect(game.allSunk()).toBe(false);

  game.receiveAttack([0, 0]);
  expect(game.allSunk()).toBe(true);
});

test("works with longer ship", () => {
  const game = gameboard(4);
  const firstship = ship(1);

  game.place_horiz([0, 0], firstship);
  expect(game.allSunk()).toBe(false);

  game.receiveAttack([0, 0]);
  expect(game.ships).toStrictEqual([[firstship, 1]]);

  game.receiveAttack([0, 1]);
  expect(game.allSunk()).toBe(true);
});

test("can miss", () => {
  const game = gameboard(4);
  const firstship = ship(1);

  game.receiveAttack([0,0]);
  expect(game.gameboard[0][0]).toBe('miss');

});

test('multiple ships', () => {
  const game = gameboard(4);

  const firstship = ship(1);
  const secondship = ship(2);

  game.place_vert([0,0], secondship);
  game.place_horiz([0,1], firstship);

  game.receiveAttack([0,0]);
  expect(game.allSunk()).toBe(false);

  game.receiveAttack([0,1]);
  expect(game.allSunk()).toBe(false);

  game.receiveAttack([1,0]);
  expect(game.allSunk()).toBe(true);

})

test('failure to place', () => {
  const game = gameboard(4);

  const secondship = ship(2);


  expect(game.place_horiz([0,2], secondship)).toBe(true);
  expect(game.place_horiz([0,2], secondship)).toBe(false);

  expect(game.place_horiz([1,3], secondship)).toBe(false);

  
})
