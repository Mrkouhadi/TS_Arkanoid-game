// imports
import { Ball } from "../sprites/Ball";
import { Brick } from "../sprites/Brick";
import { Paddle } from "../sprites/Paddle";

// types
type TstartFunc = (view:CanvasView)=>void;
type Tbrick = Brick | Paddle  ;// | Ball 
// the main class of the canavas view
export class CanvasView{
    public canvas:HTMLCanvasElement;
    private context: CanvasRenderingContext2D | null;;
    private scoreDisplay:HTMLObjectElement | null;
    private start: HTMLObjectElement | null;
    private info: HTMLObjectElement | null;

    constructor(canvasId:string){
        this.canvas = <HTMLCanvasElement>document.querySelector(`#${canvasId}`)!;
        this.context = this.canvas.getContext('2d');
        this.scoreDisplay = <HTMLObjectElement>document.querySelector('#score')!;
        this.start = <HTMLObjectElement>document.querySelector('#start')!;
        this.info = <HTMLObjectElement>document.querySelector('#info')!;
    }

    clearCanvas():void{
        this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    initStartButton(startFunc:TstartFunc):void{
        this.start?.addEventListener('click', ()=>startFunc(this));
    }

    drawScore(score:number):void{
        if(this.scoreDisplay) this.scoreDisplay.innerHTML = score.toString();
    }

    drawInfo(text:string):void{
        if(this.info) this.info.innerHTML = text;
    }

    drawSprite(brick:Tbrick ):void{
        if(!brick) return;
        this.context?.drawImage(brick.img, brick.pos.x, brick.pos.y, brick.width, brick.height);
    }

    drawBricks(bricks: Brick[]):void{
        bricks.forEach(BRICK => this.drawSprite(BRICK));
    }
}




