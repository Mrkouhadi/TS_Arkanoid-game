import { CanvasView } from "./views/CanvasView";
import { Ball } from "./sprites/Ball";
import { Brick } from "./sprites/Brick";
import { Paddle } from "./sprites/Paddle";
import PADDLE_IMAGE from './images/paddle.png'
import BALL_IMAGE from './images/ball.png'
import { PADDLE_HEIGHT, PADDLE_WIDTH, PADDLE_SPEED, PADDLE_STARTX } from "./setup";
import { BALL_SIZE, BALL_STARTY, BALL_SPEED, BALL_STARTX } from "./setup";


let gameover = false;
let score = 0;

const setGameOver=(view: CanvasView):void=>{
    view.drawInfo("The Game is Over !!!");
    gameover = false;
}
const setGameWin=(view: CanvasView):void=>{
    view.drawInfo("The Game Won !!!");
    gameover = false;
}

const gameLoop=(view: CanvasView, bricks:Brick[], paddle:Paddle, ball:Ball,)=>{

}

const startGame=(view: CanvasView)=>{

}

// generate a canvas view
const view = new CanvasView('playField');
view.initStartButton(startGame);
