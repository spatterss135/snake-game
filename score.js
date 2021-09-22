import {gameDifficulty} from "./snake.js";

const easyScore = document.getElementById('change-easy')
const mediumScore = document.getElementById('change-medium')
const hardScore = document.getElementById('change-hard')


export function updateScore(newScore) {

    if (newScore > Number(easyScore.textContent) && gameDifficulty === 'easy') {
        easyScore.textContent = newScore
        let serializedEasyScore = JSON.stringify(Number(easyScore.textContent))
        localStorage.setItem('saved-easy-score', serializedEasyScore)
    }
    
    else if (newScore > Number(mediumScore.textContent) && gameDifficulty === 'medium') {
        mediumScore.textContent = newScore
        let serializedMediumScore = JSON.stringify(Number(mediumScore.textContent))
        localStorage.setItem('saved-medium-score', serializedMediumScore)
    }

    else if (newScore > Number(hardScore.textContent) && gameDifficulty === 'hard') {
        hardScore.textContent = newScore
        let serializedHardScore = JSON.stringify(Number(hardScore.textContent))
        localStorage.setItem('saved-hard-score', serializedHardScore)
    }

    

} 


export function setupScore() {
    let savedEasyScore = localStorage.getItem('saved-easy-score')
    easyScore.textContent = savedEasyScore
    let savedMediumScore = localStorage.getItem('saved-medium-score')
    mediumScore.textContent = savedMediumScore
    let savedHardScore = localStorage.getItem('saved-hard-score')
    hardScore.textContent = savedHardScore
}
