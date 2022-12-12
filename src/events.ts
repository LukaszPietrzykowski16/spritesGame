import {newCharacter, newFoe} from "./main";


export function events(){
    document.addEventListener('keydown', (event) => {

        if(event.code === 'ArrowRight'){
          newCharacter.setValue = true
          newCharacter.update()
          newCharacter.changePosition()
        }
        if(event.code === 'ArrowLeft'){
          newCharacter.setValue = false
          newCharacter.update()
          newCharacter.changePosition()
        }
        if(event.code === 'ArrowUp'){
          if(newCharacter.getJumpValue === 0){
            newCharacter.update()
            newCharacter.jump()
          }
         
        }
        if(event.code === 'KeyZ'){
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

        if(event.code === 'KeyD'){
          newFoe.setValue = true
          newFoe.update()
          newFoe.test()
        }
        if(event.code === 'KeyA'){
          newFoe.setValue = false
          newFoe.update()
          newFoe.test()
        }

        // Alert the key name and key code on keydown
        
      }, false);
}

