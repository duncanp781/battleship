import { player } from "./player";
import { gameboard } from "./gameboard";
import { dom } from "./dom";
import { ship } from "./ship";
import "./style.css";

export const game = (() => {
  const p1 = player("A", 8, true);
  const p2 = player("B", 8, true);
  const display_manager = dom();
  let onesTurn = true;
  let gameDone = false;

  

  function prompt_place_ship(length){
    while(true){
      let answer = prompt(`Where would you like to place your ship of length ${length}? Format is "row, column", eg. "3,2"`);
  
      let coords = answer.split(',').map(entry => parseInt(entry));
      const toPlace = ship(length);
      if(p1.board.place_horiz(coords, toPlace)){
        break;
      }else{
        alert('Those are not valid coordinates');
      }
    }
    game.display_manager.display_board(game.p1);
    game.display_manager.display_board(game.p2);
  }

  function place_ship_random(length){
    const toPlace = ship(length);
    while(true){
      let rand1 = Math.floor(Math.random() * p2.board.size);
      let rand2 = Math.floor(Math.random() * p2.board.size);
      if(p2.board.place_horiz([rand1,rand2], toPlace)){
        break;
      }
    }
  }

  function receiveAttack(coords, player) {
    if (gameDone) {
      return false;
    }
    let valid_move;
    switch (player) {
      case p1:
        valid_move = !onesTurn;
        break;
      case p2:
        valid_move = onesTurn;
        break;
    }

    if (!valid_move) {
      console.log("Not your turn");
      return false;
    }

    if (player.board.receiveAttack(coords)) {
      onesTurn = !onesTurn;
      display_manager.display_turn(onesTurn);

      if (player.board.allSunk()) {
        const turn = document.querySelector(".turn");
        switch (player) {
          case p1:
            turn.textContent = "You lose!";
            break;
          case p2:
            turn.textContent = "You win!";
            break;
        }
        gameDone = true;
      }
      return true;
    }
  }

  function ai_attack(player) {
    //Try guessing 10 times a random spot and moving there
    let board = player.board;
    for (let i = 0; i < 10; i++) {
      let rand1 = Math.floor(Math.random() * board.size);
      let rand2 = Math.floor(Math.random() * board.size);
      let coords = [rand1, rand2];
      if (board.canReceiveAttack(coords)) {
        receiveAttack(coords, player);
        return coords;
      }
    }function place_ship_random(length){
      const toPlace = ship(length);
      while(true){
        let rand1 = Math.floor(Math.random() * board.size);
        let rand2 = Math.floor(Math.random() * board.size);
        if(game.p2.board.place_horiz([rand1,rand2], toPlace)){
          break;
        }
      }
    }
    //Go through linearly
    for (let i = 0; i < board.size; i++) {
      for (let j = 0; j < board.size; j++) {
        let coords = [i, j];
        if (board.receiveAttack([i, j])) {
          receiveAttack(coords, player);
          return coords;
        }
      }
    }
    //No place to attack, error somewhere
    console.log("Ai attack error");
    return false;
  }

  return {
    p1,
    p2,
    onesTurn,
    display_manager,
    receiveAttack,
    ai_attack,
    prompt_place_ship,
    place_ship_random,
  };
})();


function initialize_game(){
  const container = document.querySelector(".gamecontainer");
  container.appendChild(game.display_manager.create_board(game.p1));
  container.appendChild(game.display_manager.create_board(game.p2));

  game.display_manager.display_board(game.p1);
  game.display_manager.display_board(game.p2);
 

  place_ships_random();
  place_ships();

  game.display_manager.display_board(game.p1);
  game.display_manager.display_board(game.p2);
}

function place_ships(){
  game.prompt_place_ship(3);
  game.prompt_place_ship(4);
  game.prompt_place_ship(2);
  game.prompt_place_ship(2);
}

function place_ships_random(){
  game.place_ship_random(3);
  game.place_ship_random(4);
  game.place_ship_random(2);
  game.place_ship_random(2);

}

//Just a random ship layout to have by default
function default_ships(b) {


  const b1 = ship(2);
  const b2 = ship(3);

  b.place_horiz([0, 0], b1);
  b.place_vert([0, 4], b2);

  game.display_manager.display_board(game.p1);
  game.display_manager.display_board(game.p2);
}

initialize_game();


