const audio = document.querySelector('audio')
const instructions = document.querySelector('#instructions')
let inputDirection = {x: 0, y: 0}




document.addEventListener('keydown', e => {
    instructions.style.opacity = '0'
    audio.play()
    switch (e.key) {
        case 'ArrowUp':
            if (inputDirection.y === 0){
                inputDirection =  {x: 0, y: -1}
                break
            }
            else {
                break
            }

            
        
        case 'ArrowDown':
            if ( inputDirection.y === 0){
                inputDirection =  {x: 0, y: 1}
                break
            }
            else {
                break
            }
            
        
        case 'ArrowRight':
            if ( inputDirection.x === 0){
                inputDirection =  {x: 1, y: 0}
                break
            }
            else {
                break
            }
            
    
        case 'ArrowLeft':
            if ( inputDirection.x === 0){
                inputDirection =  {x: -1, y: 0}
                break
            }
            else {
                break
            }
        
    }
})

export function getInputDirection() {
    return inputDirection
}
