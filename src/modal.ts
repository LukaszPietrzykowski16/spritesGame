
export function displayModal(){
    const modal = document.querySelector('.game-start')
    modal?.addEventListener('click', () => {
        modal.classList.remove('game-start')
        modal.classList.add('game-start--hide')
    })
}


