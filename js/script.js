const yourShip = document.querySelector('.player-shooter');
const playArea = document.querySelector('#main-play-area');

//movimento e tiro da nave
function flyShip(event) {
  if (event.key === 'ArrowUp') {
    //condição para quando clicar a tecla de cima, ele vai mover para cima
    event.preventDefault();
    moveUp();
  } else if (event.key === 'ArrowDown') {
    //condição para quando clicar a tecla de baixo, ele vai mover para baixo
    event.preventDefault();
    moveDown();
  } else if (event.key === " ") {
    //condição para quando clicar a tecla space, ele vai atirar
    event.preventDefault();
    fireLaser();
  }
}

//função de subir
function moveUp() {
  let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
  if (topPosition === "0px") {
    return
  } else {
    let position = parseInt(topPosition);
    position -= 50;
    yourShip.style.top = `${position}px`;
  }
}

//função de descer
function moveDown() {
  let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
  if (topPosition === "510px") {
    return
  } else {
    let position = parseInt(topPosition);
    position += 50;
    yourShip.style.top = `${position}px`;
  }
}

//funcionalidade de tiro
function fireLaser() {
  let laser = createLaserElement();
  playArea.appendChild(laser);
  moveLaser(laser);
}



window.addEventListener('keydown', flyShip);