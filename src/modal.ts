
const gameModalObject = {
    header: `<div>
    <h1> How to control </h1> 
  </div>`,
    gameDetails: `
    <div class="game-start-details">
          <div class="game-start-character">
            How to control left character: 
            <ul>
              <li> Left Arrow - move left </li>
              <li> Right Arrow - move right </li>
              <li> Up Arrow - jump </li>
              <li> M - attack </li>
            </ul>
          </div>
          <div class="game-start-foe">
            <p> How to control right character:  </p>
            <ul>
              <li> A - move left </li>
              <li> D - move right </li>
              <li> W - jump </li>
              <li> Z - attack </li>
            </ul>
          </div>
   
        </div> `,
    startButton: `<button> Start! </button>`,
    endButton: `<button onClick="window.location.reload()"> Play Again! </button>`,
    endHeader: `<div> Player x won </div>`
}


export function displayModal(){
    const modal: HTMLElement | null = document.querySelector('.game-start')
    if (modal !== null){
        modal.innerHTML = `
        ${gameModalObject.header}
        ${gameModalObject.gameDetails}
        ${gameModalObject.startButton}
      `
    }
    
    
    modal?.addEventListener('click', () => {
  
        modal.classList.remove('game-start')
        modal.classList.add('game-start--hide')
    })
}


export function gameEndModal(){

    const modal: HTMLElement | null = document.querySelector('.game-start--hide')
    
    if(modal !== null){
        modal.classList.add('game-start')
        modal.classList.remove('game-start--hide')  
        modal.innerHTML = `
        ${gameModalObject.endHeader}
        ${gameModalObject.endButton}
        `
    };
    
}