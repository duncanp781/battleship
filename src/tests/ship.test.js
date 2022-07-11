import{ship} from '../ship.js';

it('is able to be sunk', () =>{
  const tank = ship(4);
  tank.hit(0).hit(1);
  expect(tank.isSunk()).toBe(false);
  tank.hit(2).hit(3);
  expect(tank.isSunk()).toBe(true);
});

it("won't always be sunk", () => {
  const tank = ship(2);
  tank.hit(0);
  expect(tank.isSunk()).toBe(false);
})