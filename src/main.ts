import './style.css'
import { Character } from './characterClass'
import walk from './sprites/walk.png'
import { events } from './events';
import  Foe from './foeClass';
import { redCircle } from './damageClass';
import { gameState } from "./gameState";
import { displayModal } from './modal'

const imgRight = new Image();        
imgRight.src = walk;    



function update() {
  newCharacter.draw()
  newFoe.draw()
  
}


function loop() {
  update()
  if (newGameState.getCharacterPoints === 0 || newGameState.getFoePoints === 0){
    console.log(`game state: ${newGameState.getCharacterPoints}, ${newGameState.getFoePoints}`)
    // remove add event listner here
  } else {
      window.requestAnimationFrame(loop)
      
  }
 


}

window.requestAnimationFrame(loop)


const newCharacter = new Character(imgRight, 0, 40, 960, 80, 90, 8)
const newFoe = new Foe(imgRight, 50, 40, 960, 80, 90, 8)
const newCricle = new redCircle()
const newGameState = new gameState()

events()
displayModal()

export {newCharacter, newFoe, newCricle, newGameState};
