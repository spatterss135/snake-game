import { addFood, updateFood, score  } from "./food.js";
import { drawSnake, SNAKE_SPEED, updateSnake} from "./snake.js";
import {updateScore, setupScore} from "./score.js"

let previousTimeStamp = 0;
const gameBoard = document.getElementById('gameboard')
const loseMessage = document.getElementById('lose-message')
const playButton = document.getElementById('play-again')
export let gameGoing = true;
export function modifyX( value ) { gameGoing = value; }



function main(currentTime) {
    
    if (gameGoing) {
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - previousTimeStamp)/ 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) {return}
    previousTimeStamp = currentTime
    update()
    draw()
    }
    else {
        loseGame()
    }     


}




function draw(){
    drawSnake(gameBoard)
    addFood(gameBoard)
}


function update() {
    updateSnake(gameBoard)
    updateFood()
}


function loseGame()  {
    updateScore(score)
    gameBoard.innerHTML = ''
    loseMessage.style.animation = 'fadeIn 2s forwards 1'

}

playButton.addEventListener('click', function() {
    location.reload();
})

setupScore()
window.requestAnimationFrame(main)
