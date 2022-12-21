
// i should have exported this

export class redCircle {
    canvas = document.getElementById('responsive-canvas') as HTMLCanvasElement;
    myContext = this.canvas.getContext('2d');
   
    private size: number = 10;
    private color: string = 'red'

    constructor () {}

    public drawCircle(x:number, y:number, index:number){
        
       // i don't know if it is good aproach 
        if(this.myContext != null) { 
          this.myContext.beginPath();
          // adding 60 value??
          this.myContext.arc(x + 60, y + 60, this.size,0 ,3*Math.PI);
          this.myContext.fillStyle = this.color;
          this.myContext.fill();
        }
    
      }

  
}