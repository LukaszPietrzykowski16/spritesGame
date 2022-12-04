import './style.css'
import walk from './walk.png'

const canvas = document.getElementById('responsive-canvas') as HTMLCanvasElement;
const myContext = canvas.getContext('2d');

const img = new Image();        
img.src = walk;    




function update(progress:number) {

  /*img.onload = () => */
  myContext?.drawImage(newCharacter.spritesheet, newCharacter.x, newCharacter.y, newCharacter.width, newCharacter.height
  );
  newCharacter.updateSomeValues(progress)

  // Update the state of the world for the elapsed time since last render
}

function draw() {
  // Draw the state of the world
}

function loop(timestamp: number) {
  let progress = timestamp - lastRender
 
  update(progress)
  draw()

  lastRender = timestamp
  window.requestAnimationFrame(loop)
}
let lastRender = 0
window.requestAnimationFrame(loop)

interface CharacterInterface {
  spritesheet: HTMLImageElement;
  x: number;
  y: number;
  width: number;
  height: number;
  numberOfFrames: number;
}

class Character implements CharacterInterface {

  spritesheet: HTMLImageElement;
  x: number;
  y: number;
  width: number;
  height: number;
  timePerFrame: number;
  numberOfFrames: number;
  
  frameIndex = 0;

  constructor(spritesheet: HTMLImageElement, x: number, y: number, width: number, height: number, timePerFrame: number, numberOfFrames: number) {
    this.spritesheet = spritesheet;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.timePerFrame = timePerFrame
    this.numberOfFrames = numberOfFrames
  }

  changePosition(){
    myContext?.clearRect(0,0,canvas.width, canvas.height);
    this.x +=1
  }

  updateSomeValues(update:number){
    if(update >= this.timePerFrame) {
      this.frameIndex++;
      if(this.frameIndex >= this.numberOfFrames) {
        this.frameIndex = 0;
      }
    }
  }

}


const newCharacter = new Character(img, -42, 0, 1000, 100, 90, 6)

canvas.addEventListener('click', () => {
  newCharacter.changePosition()
})