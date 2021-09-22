let inputDirection = {x: 0, y: 0}




document.addEventListener('keydown', e => {
    
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
