import {newCharacter, newFoe} from "./main";

export function events(){
  const controller: any = {
    ArrowRight: {pressed: false, func: newCharacterFunction},
    d: {pressed: false, func: newFoeFunction}
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
    executeMoves()
  })
  
  const executeMoves = () => {
    Object.keys(controller).forEach(key=> {
      controller[key].pressed && controller[key].func()
    })
  }

 
  
  function newCharacterFunction(){
    // ArrowRight
    newCharacter.setValue = true
    newCharacter.update()
    newCharacter.changePosition()
  }
  
  function newFoeFunction(){
    // ArrowRight
    newFoe.setValue = true
    newFoe.update()
    newFoe.test()
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