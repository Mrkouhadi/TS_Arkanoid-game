import { Vector } from "../types";

export class Ball{
    private speed:Vector;
    private ballImage:HTMLImageElement = new Image();
    constructor(
        public ballSize:number, private position:Vector,
        public ballSpeed:number, public image:string
    ){
        this.speed = {x:ballSpeed, y:-ballSpeed}
        this.ballImage.src = image; 
    }

    // getters
    get width():number{
        return this.ballSize;
    }
    get height():number{
        return this.ballSize;
    }
    get pos():Vector{
        return this.position;
    }
    get img():HTMLImageElement{
        return this.ballImage;
    }

    // methods
    changeYDirection():void{
        this.speed.y = -this.speed.y; // using minus (-) to change direction
    }
    changeXDirection():void{
        this.speed.x = -this.speed.x; // using minus (-) to change direction
    }
    moveBall():void{
        this.pos.x += this.speed.x;
        this.pos.y += this.speed.y;
    }
}




