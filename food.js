
import { snakeBody } from "./snake.js"
export const food = {x:5, y: 3}
const EXPANSION_RATE = 5
let scoreChange = document.getElementById('change-score')

export let score = 0

export function addFood(gameBoard) {
    const foodElement = document.createElement('div')
    foodElement.style.gridColumnStart = food.x
    foodElement.style.gridRowStart = food.y
    foodElement.classList.add('food')
    gameBoard.append(foodElement)

}


export function updateFood() {
if (snakeBody[0].x === food.x && snakeBody[0].y === food.y) {
    score += 100
    scoreChange.textContent = score
    for (let i=0; i< EXPANSION_RATE; i++){
            snakeBody.push(snakeBody[snakeBody.length -1])
        }
        

        randomizeFood()
       
    
    }
}

function randomizeFood() {
    food.x = Math.floor(Math.random() *20) + 1
    food.y = Math.floor(Math.random() *20) + 1
    if (snakeBody.some(segment => segment.x === food.x && segment.y === food.y)){
        randomizeFood()
}
    else {
        return
    }
}