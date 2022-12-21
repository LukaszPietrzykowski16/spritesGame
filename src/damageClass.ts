
// i should have exported this

export class redCircle {
    canvas = document.getElementById('responsive-canvas') as HTMLCanvasElement;
    myContext = this.canvas.getContext('2d');
   
    private size: number = 6;
    private color: string = 'red';
    private maxNumber = 0;
    private minNumber = 20;

    private maxNumberSize = 0;
    private minNumberSize = 3.5;

    constructor () {}

    private randomOffset(){
        return Math.floor(Math.random() * (this.maxNumber - this.minNumber + 1) + this.minNumber)
    }

    private randomInt(){
        return Math.floor(Math.random() * (this.maxNumberSize - this.minNumberSize + 1) + this.minNumberSize)
    }

    public drawCircle(x:number, y:number){
        
       // i don't know if it is good aproach 
        if(this.myContext != null) { 
          this.myContext.beginPath();
          // adding 60 value??
          this.myContext.arc(x + 50 + this.randomOffset(), y + 50 + this.randomOffset(), this.size * this.randomInt(),0 ,3*Math.PI);
          this.myContext.fillStyle = this.color;
          this.myContext.fill();
        }
    
      }

  
}