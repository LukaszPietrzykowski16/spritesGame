
export default class Canvas{

    private canvas = document.getElementById('responsive-canvas') as HTMLCanvasElement;
    private dpi:number = window.devicePixelRatio;
    private context = this.canvas.getContext("2d");
  
    constructor(){
   // fixing dpi of the canvas
      const styleHeight = +getComputedStyle(this.canvas).getPropertyValue("height").slice(0, -2);
      //get CSS width
      const styleWidth = +getComputedStyle(this.canvas).getPropertyValue("width").slice(0, -2);
      //scale the canvas
      this.canvas.setAttribute('height', String(styleHeight * this.dpi));
    
      this.canvas.setAttribute('width', String(styleWidth * this.dpi));
    }
  }
  
    