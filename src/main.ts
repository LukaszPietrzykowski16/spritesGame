import './style.css'
import { Character } from './characterClass'
import walk from './sprites/walk.png'

const imgRight = new Image();        
imgRight.src = walk;    



function update() {
  newCharacter.draw()
}


function loop() {
  update()

  window.requestAnimationFrame(loop)

}

window.requestAnimationFrame(loop)


const newCharacter = new Character(imgRight, 0, 0, 960, 80, 90, 8)

export default newCharacter