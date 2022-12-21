import {newCharacter, newFoe} from "./main";
import { newCricle } from "./main";

export function events(){
  const controller: any = {
    ArrowRight: {pressed: false, func: newCharacterMoveRight},
    ArrowLeft: {pressed: false, func: newCharacterMoveLeft},
    ArrowUp: {pressed: false, func: newCharacterJump},
    z: {pressed: false, func: newCharacterAttack},
    d: {pressed: false, func: newFoeMoveRight},
    a: {pressed: false, func: newFoeMoveLeft},
    w: {pressed: false, func: newFoeJump},
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
      for(let i=0; i<10; i++){
        newCricle.drawCircle(newFoe.getXPosition, newFoe.getYPosition, i)
      }
      


    }
    /*
      console.log(Math.abs(newCharacter.getXPosition - newFoe.getXPosition))
      console.log(newCharacter.getXPosition, newFoe.getXPosition) 
      */
    }
     
 
  }
}


/*
let keysPressed: any = {};
export function events(){
    window.addEventListener('keydown', (event) => {
      keysPressed[event.key] = true;
        if(event.key === 'ArrowRight' && keysPressed['ArrowRight']){
          newCharacter.setValue = true
          newCharacter.update()
          newCharacter.changePosition()
        }
        if(event.key === 'ArrowLeft' && keysPressed['ArrowLeft']){
          newCharacter.setValue = false
          newCharacter.update()
          newCharacter.changePosition()
        }
        if(event.key === 'ArrowUp' && keysPressed['ArrowUp']){
          if(newCharacter.getJumpValue === 0){
            newCharacter.update()
            newCharacter.jump()
          }
         
        }
        if(event.key === 'z' && keysPressed['z']){
          if(newCharacter.getJumpValue === 0){
            newCharacter.setFrameIndex = 0
            newCharacter.attack()
            if(Math.abs(newCharacter.getXPosition - newFoe.getXPosition) <= 30){
              console.log('OUCH')
            }
            console.log(Math.abs(newCharacter.getXPosition - newFoe.getXPosition))
            console.log(newCharacter.getXPosition, newFoe.getXPosition)
          }
         
        }
        if(event.key === 'd' && keysPressed['d']){
          newFoe.setValue = true
          newFoe.update()
          newFoe.test()
        }
        if(event.key === 'a' && keysPressed['a']){
          newFoe.setValue = false
          newFoe.update()
          newFoe.test()
        }
        if(event.key === 'w' && keysPressed['w']){
          if(newFoe.getJumpValue === 0){
            newFoe.update()
            newFoe.jump()
          }
        }

     
        // Alert the key name and key key on keydown
        
      }, false);
}

document.addEventListener('keyup', (event) => {
  delete keysPressed[event.key];
});
*/