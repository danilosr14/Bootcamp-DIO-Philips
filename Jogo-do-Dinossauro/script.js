const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;

function handleKeyup(event) {
    if (event.keyCode === 32) {
        if (!isJumping) {
        jump ();
        }
    }
}
function jump() {
    
    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);

        // Descendo
    let downInterval = setInterval (() => {
        if (position <= 0) {
            clearInterval(downInterval);
            isJumping = false;
        } else {
        position -= 20;
        dino.style.bottom = position + 'px';}

        }, 20);
    } else {       
        // Subindo
            position += 20;
        dino.style.bottom = position + 'px';
        }
    }, 20);
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randonTime = Math.random() * 6000;


    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInverval = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftInverval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            // Gamer over

            clearInterval(leftInverval);
            document.body.innerHTML = '<h1 class="gamer-over">Fim de jogo</h1>';
        }    else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randonTime);
}

createCactus();
document.addEventListener('keyup', handleKeyup);