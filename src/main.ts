import './style.css'
import walk from './walk.png'

const canvas = document.getElementById('responsive-canvas') as HTMLCanvasElement;
const myContext = canvas.getContext('2d');

const img = new Image();        
img.src = walk;    




function update(progress:number) {
  newCharacter.draw()
  newCharacter.update()
  
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
  
  console.log(newCharacter.frameIndex)
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

  lastUpdate = Date.now();

    //to update
  update() {
        if(Date.now() - this.lastUpdate >= this.timePerFrame) {
            this.frameIndex++;
            if(this.frameIndex >= this.numberOfFrames) {
                this.frameIndex = 0;
            }
            this.lastUpdate = Date.now();
        }
        // myContext?.clearRect(0,0,canvas.width, canvas.height);
    }


  draw() {
    myContext?.drawImage(this.spritesheet,
    this.frameIndex*this.width/this.numberOfFrames,
    0,
    this.width/this.numberOfFrames,
    this.height,
    this.x,
    this.y,
    this.width/this.numberOfFrames,
    this.height);
   
  }
  changePosition(){
    myContext?.clearRect(0,0,canvas.width, canvas.height);
    this.x +=1
  }

  

}


const newCharacter = new Character(img, 30, 0, 960, 80, 90, 8)

canvas.addEventListener('click', () => {
  newCharacter.changePosition()
})