import { Vector } from "../types";

export class Brick{
    private brickImage:HTMLImageElement = new Image();

    constructor(
            private brickHeight:number, private brickWidth:number, 
            private position:Vector, private brickEnergy:number, 
            image:string){
                this.brickImage.src = image; 
            }
    
    // getters
    get width():number{
        return this.brickWidth;
    }
    get height():number{
        return this.brickHeight;
    }
    get pos():Vector{
        return this.position;
    }
    get img():HTMLImageElement{
        return this.brickImage;
    }
    get energy():number{
        return this.brickEnergy;
    }
    // setters
    set energy(energy:number){
        this.brickEnergy = energy;
    }
}
 