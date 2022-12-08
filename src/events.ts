import newCharacter from "./main";


export function events(){
    document.addEventListener('keydown', (event) => {

        if(event.code === 'ArrowRight'){
          newCharacter.update()
          newCharacter.changePosition(true)
        }
        if(event.code === 'ArrowLeft'){
          newCharacter.update()
          newCharacter.changePosition(false)
        }
        if(event.code === 'ArrowUp'){
          newCharacter.update()
          newCharacter.jump()
        }
        // Alert the key name and key code on keydown
        
      }, false);
}

