import {newCharacter, newFoe, newGameState} from "./main";
import { newCricle } from "./main";


export function events(){
  const controller: any = {
    ArrowRight: {pressed: false, func: newCharacterMoveRight},
    ArrowLeft: {pressed: false, func: newCharacterMoveLeft},
    ArrowUp: {pressed: false, func: newCharacterJump},
    m: {pressed: false, func: newCharacterAttack},
    d: {pressed: false, func: newFoeMoveRight},
    a: {pressed: false, func: newFoeMoveLeft},
    w: {pressed: false, func: newFoeJump},
    z: {pressed: false, func: newFoeAttack}
  }
  
  document.addEventListener("keydown", (e) => {
    if(controller[e.key]){
      controller[e.key].pressed = true
    }
    executeMoves()
  })
  document.addEventListener("keyup", (e) => {
    if(controller[e.key]){
      controller[e.key].pressed = false
    }
  
  })
  
  const executeMoves = () => {
    Object.keys(controller).forEach(key=> {
      controller[key].pressed && controller[key].func()
    })
  }

 
  
  function newCharacterMoveRight(){
    // ArrowRight
    newCharacter.setValue = true
    newCharacter.update()
    newCharacter.changePosition()
  }

  function newCharacterMoveLeft(){
    // ArrowLeft
    newCharacter.setValue = false
    newCharacter.update()
    newCharacter.changePosition()
  }

  function newCharacterJump(){
    if(newCharacter.getJumpValue === 0){
      newCharacter.update()
      newCharacter.jump()
    }
  }
  
  function newFoeMoveRight(){
    // ArrowRight
    newFoe.setValue = true
    newFoe.update()
    newFoe.test()
  }

  function newFoeMoveLeft(){
    newFoe.setValue = false
    newFoe.update()
    newFoe.test()
  }

  function newFoeJump(){
    if(newFoe.getJumpValue === 0){
      newFoe.update()
      newFoe.jump()
    }
  }

  function newCharacterAttack(){

    if(newCharacter.getJumpValue === 0){
      newCharacter.setFrameIndex = 0
      newCharacter.attack()
    if(Math.abs(newCharacter.getXPosition - newFoe.getXPosition) <= 30){
      newGameState.characterPoints()
      for(let i=0; i<10; i++){
        newCricle.drawCircle(newFoe.getXPosition, newFoe.getYPosition)
      }
    }
    }
  }

  function newFoeAttack(){

    if(newFoe.getJumpValue === 0){
      newFoe.setFrameIndex = 0
      newFoe.attack()
      // must do blocket of spaming attacks
    if(Math.abs(newFoe.getXPosition - newFoe.getXPosition) <= 30){
      newGameState.foePoints()
      for(let i=0; i<10; i++){
        newCricle.drawCircle(newCharacter.getXPosition, newCharacter.getYPosition)
      }
    }
    }
  }


  
}

