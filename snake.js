import { getInputDirection } from "./input.js"
import { modifyX } from "./index.js"
export let SNAKE_SPEED = 10

const easyButton = document.getElementById('easy')
const mediumButton = document.getElementById('medium')
const hardButton = document.getElementById('hard')

export let gameDifficulty = 'medium'


easyButton.addEventListener('click', function() {
    SNAKE_SPEED = 5 
    gameDifficulty = 'easy'
})

mediumButton.addEventListener('click', function() {
    SNAKE_SPEED = 10
    gameDifficulty = 'medium' 
})

hardButton.addEventListener('click', function() {
    SNAKE_SPEED = 25
    gameDifficulty = 'hard'
})






export const snakeBody = [
    {x: 14, y: 5 },
    {x: 15, y: 5 },  
    {x: 16, y: 5 }    
]

export function drawSnake(gameBoard) {
    
    gameBoard.innerHTML = ''
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.style.gridRowStart = segment.y
        snakeElement.classList.add('snake')
        gameBoard.append(snakeElement)
        
    })

    
}

export function updateSnake(){
    
    const inputDirection = getInputDirection()
    
    if(snakeBody[0].x === 1 && inputDirection.x === -1) {
        modifyX(false)
        return
    }
    else if ((snakeBody.slice(2).some(segment => segment.x === snakeBody[0].x && segment.y === snakeBody[0].y)) && (snakeBody.length > 3)) {
        console.log('Hello')
        modifyX(false)
        return
    }
    else if (snakeBody[0].x === 21 && inputDirection.x === 1) {
        modifyX(false)
        return
    }
    else if (snakeBody[0].y === 1 && inputDirection.y === -1) {
        modifyX(false)
        return
    }
    else if (snakeBody[0].y === 21 && inputDirection.y === 1) {
        modifyX(false)
        return
    }

    for (let i=snakeBody.length - 2; i>=0; i--) {
        snakeBody[i+1] = {...snakeBody[i]}
    }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y


    
}


