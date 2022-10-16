import { Brick } from "./sprites/Brick";

import { BRICK_IMAGES, BRICK_HEIGHT, BRICK_WIDTH, BRICK_ENERGY, STAGE_PADDING, STAGE_COLS, LEVEL, BRICK_PADDING,  } from "./setup";

export const createBricks=():Brick[]=>{
     return LEVEL.reduce((acc, curr, indx) => {
        const row = Math.floor(indx+1) / STAGE_COLS;
        const col = indx % STAGE_COLS;

        const x = STAGE_PADDING + col * (BRICK_WIDTH + BRICK_PADDING) ;
        const y = STAGE_PADDING + row * (BRICK_HEIGHT + BRICK_PADDING) ;

        if(curr === 0 ) return acc;
        return [...acc, new Brick(BRICK_HEIGHT, BRICK_WIDTH, {x,y}, BRICK_ENERGY[curr],BRICK_IMAGES[curr])];
     }, [] as Brick[]);
};