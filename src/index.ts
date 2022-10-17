import { CanvasView } from "./views/CanvasView";
import { Ball } from "./sprites/Ball";
import { Brick } from "./sprites/Brick";
import { Paddle } from "./sprites/Paddle";
import PADDLE_IMAGE from './images/paddle.png'
import BALL_IMAGE from './images/ball.png'
import { PADDLE_HEIGHT, PADDLE_WIDTH, PADDLE_SPEED, PADDLE_STARTX } from "./setup";
import { BALL_SIZE, BALL_STARTY, BALL_SPEED, BALL_STARTX } from "./setup";
// import helpers
import { createBricks } from "./helpers";
import { Collision } from "./collision";

let gameOver = false;

let score = 0;

const setGameOver=(view: CanvasView):void=>{
    view.drawInfo("The Game is Over !!!");
    gameOver = false;
}
const setGameWin=(view: CanvasView):void=>{
    view.drawInfo("The Game Won !!!");
    gameOver = false;
}

const gameLoop=(view: CanvasView, bricks:Brick[],paddle:Paddle,ball:Ball, collsion:Collision)=>{ //  , ball:Ball    
    view.clearCanvas();
    view.drawBricks(bricks);
    view.drawSprite(paddle);
    view.drawSprite(ball);

    // move the ball
    ball.moveBall()
    // move the paddle and make sure it doesn't exit the playground
    if( paddle.isMovingLeft && paddle.pos.x > 0 || 
        paddle.isMovingRight && paddle.pos.x < (view.canvas.width - paddle.width) 
        ){
            paddle.movePadlle()
        }

    collsion.checkBallCollision(ball, paddle,view)
    const collidingBrick = collsion.isCollidingBricks(ball, bricks);

    if (collidingBrick) {
      score += 1;
      view.drawScore(score);
    }
  
    // Game Over when ball leaves playField
    if (ball.pos.y > view.canvas.height) gameOver = true;
    // If game won, set gameOver and display win
    if (bricks.length === 0) return setGameWin(view);
    // Return if gameover and don't run the requestAnimationFrame
    if (gameOver) return setGameOver(view);

    requestAnimationFrame(()=>{
        gameLoop(view, bricks,paddle,ball,collsion)
    });
}

const startGame=(view: CanvasView)=>{
    // reset the displays
    score = 0;
    view.drawInfo("")
    view.drawScore(0);

    // create colision instance
    const collsion = new Collision()
    //  create bricks
    const bricks = createBricks()
    // create the Ball
    const ball = new Ball(BALL_SIZE, {x:BALL_STARTX, y: BALL_STARTY}, BALL_SPEED, BALL_IMAGE )
    // create the Paddle 
    const paddle = new Paddle( PADDLE_SPEED, PADDLE_WIDTH,PADDLE_HEIGHT,{x: PADDLE_STARTX, y:view.canvas.height - PADDLE_HEIGHT },PADDLE_IMAGE)
    gameLoop(view, bricks,paddle, ball, collsion)
}
// generate a canvas view
const view = new CanvasView('playField');
view.initStartButton(startGame);