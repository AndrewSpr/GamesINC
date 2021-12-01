const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const game = document.querySelector('#game')
const character = document.querySelector('#character');
const block = document.querySelector('#block');
const newGameBtn = document.querySelector('#new-game-btn')


var counter=0;
document.querySelector('#pointsNum').innerHTML = counter
block.style.animation = `none`

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

game.addEventListener('click', event => {
    if (event.target.classList.contains('game')) {
        startGame()
    }
})

newGameBtn.addEventListener('click', (event) => {
    location.reload()
})

function startGame() {
    block.style.animation = `block 1s infinite linear`
    setInterval(checkDead, 10);
}

function jump() {
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}

function checkDead() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=140){
        block.style.animation = "none";
        finishGame()
        counter=0;
    }else{
        counter++;
        document.querySelector('#pointsNum').innerHTML = Math.floor(counter/100)
    }
}

function finishGame() {
    pointsNum.parentNode.remove()
	const gameBoard = document.querySelector(".game")
    gameBoard.innerHTML = `<h2>Count: <span class="primary">${Math.floor(counter/100)}</span></h2>`
    gameBoard.style.color = `white`
    gameBoard.style.width = `500px`
    gameBoard.style.height = `200px`
    gameBoard.style.background = `url(img/bg.png)`
}