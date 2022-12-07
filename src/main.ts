import './style.css'
import walk from './sprites/walk.png'
import walkBackwards from './sprites/walk_backwards.png'

const canvas = document.getElementById('responsive-canvas') as HTMLCanvasElement;
const myContext = canvas.getContext('2d');


const imgRight = new Image();        
imgRight.src = walk;    

const imgLeft = new Image();        
imgLeft.src = walkBackwards;   



function update() {
  newCharacter.draw()
  
}

function draw() {
 
  // Draw the state of the world
}
// make game loop better or something??
function loop() {
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

  
  frameIndex:number = 0;

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
          this.cleaningUpCanvas()
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
  changePosition(value: boolean){
    this.cleaningUpCanvas()
    if(value === true){
      this.x++
      this.spritesheet = imgRight
    } else {
      this.x--
      this.spritesheet = imgLeft
    }
   
  }

  jumpValue = 0

  jump(){
    // i don't know if this is a good aproach with setinterval 
    this.cleaningUpCanvas()
    const jumpInterval = setInterval(() => {
      this.jumpValue++
      this.y--
      this.jump()
      if(this.jumpValue > 4){
        clearInterval(jumpInterval);
      }
    }, 50)
    if(this.jumpValue < 4){
      jumpInterval
    } else {
      clearInterval(jumpInterval);
    }
    
    
  }

  cleaningUpCanvas(){
    myContext?.clearRect(0,0,canvas.width, canvas.height);
  }

}


const newCharacter = new Character(imgRight, 0, 0, 960, 80, 90, 8)



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
    newCharacter.jump()
  }
  // Alert the key name and key code on keydown
  
}, false);