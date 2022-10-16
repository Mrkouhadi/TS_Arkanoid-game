import { Vector } from "../types";

export class Paddle{
    private paddleImage:HTMLImageElement = new Image();
    private movetoLeft:boolean;
    private movetoRight:boolean;

    constructor(
                private speed:number, private paddleWidth:number,
                private paddleHeight:number, private position:Vector,
                private image:string
                ){
            this.paddleImage.src = image;
            this.movetoLeft = false;
            this.movetoRight = false;
            // eventlistners
            document.addEventListener('keydown', this.keydownHandler)
            document.addEventListener('keyup', this.keyupHandler)
        }

    // getters
    get width():number{
        return this.paddleWidth;
    }
    get height():number{
        return this.paddleHeight;
    }
    get pos():Vector{
        return this.position;
    }
    get img():HTMLImageElement{
        return this.paddleImage;
    }
    get isMovingLeft():boolean{
        return this.movetoLeft
    }
    get isMovingRight():boolean{
        return this.movetoRight
    }

    // methods
    movePadlle():void{
        if(this.movetoLeft) this.pos.x -= this.speed;
        if(this.movetoRight) this.pos.x += this.speed;
    }
    keyupHandler=(e:KeyboardEvent):void=>{ // using arrow function so that we don't go through binding and that shit
        if(e.code === "ArrowLeft" || e.key === "ArrowLeft") this.movetoLeft = false;
        if(e.code === "ArrowRight" || e.key === "ArrowRight") this.movetoRight = false;
    }
    keydownHandler=(e:KeyboardEvent):void=>{ // using arrow function so that we don't go through binding and that shit
        if(e.code === "ArrowLeft" || e.key === "ArrowLeft") this.movetoLeft = true;
        if(e.code === "ArrowRight" || e.key === "ArrowRight") this.movetoRight = true;
    }
}