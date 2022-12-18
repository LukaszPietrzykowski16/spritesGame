import {newCharacter, newFoe} from "./main";

let keysPressed: any = {};
export function events(){
    document.addEventListener('keydown', (event) => {
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
