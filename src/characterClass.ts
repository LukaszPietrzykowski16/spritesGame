import walk from './sprites/walk.png'
import walkBackwards from './sprites/walk_backwards.png'
import jump from './sprites/jump.png'
import jumpBackwards from './sprites/jump_backwards.png'
import fall from './sprites/fall.png'
import fallBackwards  from './sprites/fall_backwards.png'

const canvas = document.getElementById('responsive-canvas') as HTMLCanvasElement;
const myContext = canvas.getContext('2d');

const imgRight = new Image();        
imgRight.src = walk;    

const imgLeft = new Image();        
imgLeft.src = walkBackwards;   

const imgJump = new Image();        
imgJump.src = jump;   

const imgJumpBackwards = new Image();        
imgJumpBackwards.src = jumpBackwards;   

const imgFall = new Image();        
imgFall.src = fall;   

const imgFallBackwards = new Image();        
imgFallBackwards.src = fallBackwards;   


interface CharacterInterface {
    spritesheet: HTMLImageElement;
    x: number;
    y: number;
    width: number;
    height: number;
    numberOfFrames: number;
  }
  
export class Character implements CharacterInterface {
  
    spritesheet: HTMLImageElement;
    x: number;
    y: number;
    width: number;
    height: number;
    timePerFrame: number;
    numberOfFrames: number;
  
    private JUMP_HEIGHT:number = 16
    private JUMP_SPEED:number = 50
  
    private frameIndex:number = 0;

    private _value: boolean = true;
  
    constructor(spritesheet: HTMLImageElement, x: number, y: number, width: number, height: number, timePerFrame: number, numberOfFrames: number) {
      this.spritesheet = spritesheet;
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.timePerFrame = timePerFrame
      this.numberOfFrames = numberOfFrames
    }
  
    set setValue(setter: boolean){
      this._value = setter
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
    changePosition(){
      console.log(this._value)
      this.cleaningUpCanvas()
      if(this._value === true){
        this.x++
        this.spritesheet = imgRight
      } else {
        this.x--
        this.spritesheet = imgLeft
      }
     
    }
  
    private jumpValue:number = 0
  
    jump(){
        this.spritesheet = imgJump
      // i don't know if this is a good aproach with setinterval 
      this.cleaningUpCanvas()
      const jumpInterval = setInterval(() => {
        this.jumpValue++
        this.y--
        this.jump()
        if(this.jumpValue > this.JUMP_HEIGHT){
          clearInterval(jumpInterval);
        }
        clearInterval(jumpInterval)
      }, this.JUMP_SPEED)
      if(this.jumpValue < this.JUMP_HEIGHT){
        jumpInterval
      } else {
        clearInterval(jumpInterval);
        this.jumpValue = 0
        this.jumpFalling()
      }
      
    }
  
    jumpFalling(){
      this.spritesheet = imgFall
      this.cleaningUpCanvas()
      const jumpInterval = setInterval(() => {
        this.jumpValue++
        this.y++
        this.jumpFalling()
        if(this.jumpValue > this.JUMP_HEIGHT){
          clearInterval(jumpInterval);
        }
        clearInterval(jumpInterval)
      }, this.JUMP_SPEED)
      if(this.jumpValue < this.JUMP_HEIGHT){
        jumpInterval
      } else {
        // reset to normal state
        clearInterval(jumpInterval);
        this.jumpValue = 0
        this.spritesheet = imgRight

      }
    }
  
    cleaningUpCanvas(){
      myContext?.clearRect(0,0,canvas.width, canvas.height);
    }
  
  }
  