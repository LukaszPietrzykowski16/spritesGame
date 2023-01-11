import { Character } from "./characterClass";
import walk from './sprites/walk_foe.png'
import walkBackwards from './sprites/walk_backwards_foe.png'
import jump from './sprites/jump_foe.png'
import jumpBackwards from './sprites/jump_backwards_foe.png'
import fall from './sprites/fall_foe.png'
import fallBackwards  from './sprites/fall_backwards_foe.png'
import attack from './sprites/attack_foe.png'
import attackBackwards from './sprites/attack_backwards_foe.png'

/*
const canvas = document.getElementById('responsive-canvas') as HTMLCanvasElement;
const myContext = canvas.getContext('2d');
*/

const imgJump = new Image();        
imgJump.src = jump;   

const imgJumpBackwards = new Image();        
imgJumpBackwards.src = jumpBackwards;   

const imgFall = new Image();        
imgFall.src = fall;   

const imgFallBackwards = new Image();        
imgFallBackwards.src = fallBackwards;   

const imgAttack = new Image();        
imgAttack.src = attack;   

const imgAttackBackwards = new Image();        
imgAttackBackwards.src = attackBackwards;  

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