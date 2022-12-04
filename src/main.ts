import './style.css'
import walk from './walk.png'

const canvas = document.getElementById('responsive-canvas') as HTMLCanvasElement;
const myContext = canvas.getContext('2d');

const img = new Image();        
img.src = walk;    

img.onload = () => myContext?.drawImage(img, 0, 0);

/*
function update(progress:number) {
 

  // Update the state of the world for the elapsed time since last render
}

function draw() {
  // Draw the state of the world
}

function loop(timestamp: number) {
  var progress = timestamp - lastRender
 
  update(progress)
  draw()

  lastRender = timestamp
  window.requestAnimationFrame(loop)
}
let lastRender = 0
window.requestAnimationFrame(loop)
*/
interface CharacterInterface {
  spritesheet: string;
  x: number;
  y: number;
  width: number;
  height: number;
  numberOfFrames: number;
}

class Character implements CharacterInterface {

  spritesheet: string;
  x: number;
  y: number;
  width: number;
  height: number;
  timePerFrame: number;
  numberOfFrames: number;
  

  constructor(spritesheet: string, x: number, y: number, width: number, height: number, timePerFrame: number, numberOfFrames: number) {
    this.spritesheet = spritesheet;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.timePerFrame = timePerFrame
    this.numberOfFrames = numberOfFrames
  }


}


const newDeveloper = new Character('tet', 0, 0, 250, 250, 3, 5)
console.log(newDeveloper)