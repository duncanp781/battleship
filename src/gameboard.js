function gameboard(size) {
  //So that the internal arrays arent references of each other
  let gameboard = new Array(size).fill(0).map(() => new Array(size));
  //ships are [ship, # of times hit] arrays
  let ships = [];

  //coords are [y,x]
  //Places going to the right
  const place_horiz = function (coords, ship) {
    //No room horizontally
    let [y,x] = coords;
    if(y < 0 || x < 0 || y > size || x > size){
      return false;
    }

    if (size - coords[1] < ship.length) {
      return false;
    }
    //First check that there is nothing in the way
    for (let i = coords[1]; i < coords[1] + ship.length; i++) {
      if (gameboard[coords[0]][i] != undefined) {
        return false;
      }
    }
    //Place ship
    for (let i = coords[1]; i < coords[1] + ship.length; i++) {
      gameboard[coords[0]][i] = [ship, i - coords[1]];
    }
    ships.push(ship);
    return true;
  };

  //coords are [y,x]
  //places going down
  const place_vert = function (coords, ship) {
    //No room vertically
    if (size - coords[0] < ship.length) {
      return false;
    }
    //First check that there is nothing in the way
    for (let i = coords[0]; i < coords[0] + ship.length; i++) {
      if (gameboard[i][coords[1]] != undefined) {
        return false;
      }
    }
    //Place ship
    for (let i = coords[0]; i < coords[0] + ship.length; i++) {
      gameboard[i][coords[1]] = [ship, i - coords[0]];
    }
    ships.push(ship);
    return true;
  };

  const receiveAttack = function (coords) {
    let target = gameboard[coords[0]][coords[1]];
    if (target == undefined) {
      gameboard[coords[0]][coords[1]] = "miss";
      return true;
    } else if (target == "miss") {
      return false;
    } else {
      //The target is a ship
      let [ship, ind] = target;
      if (ship.hitMap[ind]) {
        return false;
      } else {
        ship.hit(ind);
        return true;
      }
    }
  };

  const canReceiveAttack = function (coords) {
    let target = gameboard[coords[0]][coords[1]];
    return (target != "miss"); 
  };

  //will return true if all the ships are sunk *OR* if there are no ships
  const allSunk = function () {
    for (let boat of ships) {
      if (!boat.isSunk()) {
        return false;
      }
    }
    return true;
  };

  return {
    gameboard,
    ships,
    size,
    place_horiz,
    place_vert,
    receiveAttack,
    allSunk,
    canReceiveAttack,
  };
}

export { gameboard };
