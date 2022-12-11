import newCharacter from "./main";


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
            newCharacter.update()
            newCharacter.attack()
          }
         
        }
        // Alert the key name and key code on keydown
        
      }, false);
}

