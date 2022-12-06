import './style.css'
import walk from './walk.png'

const canvas = document.getElementById('responsive-canvas') as HTMLCanvasElement;
const myContext = canvas.getContext('2d');

const img = new Image();        
img.src = walk;    




function update() {
  newCharacter.draw()
  // only if we want to play animation of moving
  // newCharacter.update()
  
}

function draw() {
 
  // Draw the state of the world
}
// make game loop better or something??
function loop(timestamp: number) {
  update()
  draw()

  
  window.requestAnimationFrame(loop)
  

}

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

  // we can do this in better way? 
  lastUpdate = Date.now();

    //to update
  update() {
        if(Date.now() - this.lastUpdate >= this.timePerFrame) {
          myContext?.clearRect(0,0,canvas.width, canvas.height);
            this.frameIndex++;
            if(this.frameIndex >= this.numberOfFrames) {
                this.frameIndex = 0;
            }
            this.lastUpdate = Date.now();
        }
        
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
  changePosition(value: number){
    myContext?.clearRect(0,0,canvas.width, canvas.height);
    if(value === 1){
      this.x++
    } else {
      this.x--
    }
   
  }

  

}


const newCharacter = new Character(img, 0, 0, 960, 80, 90, 8)



document.addEventListener('keydown', (event) => {
  if(event.code === 'ArrowRight'){
    newCharacter.update()
    newCharacter.changePosition(1)
  }
  if(event.code === 'ArrowLeft'){
    newCharacter.update()
    newCharacter.changePosition(-1)
  }

  // Alert the key name and key code on keydown
  
}, false);