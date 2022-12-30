import { Character } from "./characterClass";
import walk from './sprites/walk.png'
import walkBackwards from './sprites/walk_backwards.png'
const imgRight = new Image();        
imgRight.src = walk;    

const imgLeft = new Image();        
imgLeft.src = walkBackwards;   


export default class Foe extends Character{
    
    
    facingDetection(){
        this.cleaningUpCanvas()
        if(this.jumpValue === 0){
          if(this.orientation === true){
            this.x++
            this.spritesheet = imgRight
          } else {
            this.x--
            this.spritesheet = imgLeft
          }
        } else {
          if(this.orientation === true){
            this.x++
          } else {
            this.x--
          }
        }
       
       
      }
  }