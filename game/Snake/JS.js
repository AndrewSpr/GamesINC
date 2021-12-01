let scoreBlock;
let score = 0;

const config = {
	step: 0,
	maxStep: 6,
	sizeCell: 16,
	sizeBerry: 16 / 4
}

const snake = {
	x: 160,
	y: 160,
	dx: config.sizeCell,
	dy: 0,
	tails: [],
	maxTails: 3
}

let berry = {
	x: 0,
	y: 0
} 

const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
let canvas = document.querySelector("#game-canvas");
let context = canvas.getContext("2d");
scoreBlock = document.querySelector(".game-score .score-count");
const up = document.querySelector('#up')
const down = document.querySelector('#down')
const left = document.querySelector('#left')
const right = document.querySelector('#right')
const newGameBtn = document.querySelector('#new-game-btn')

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

drawScore();

function gameLoop() {
	requestAnimationFrame( gameLoop );
	if ( ++config.step < config.maxStep) {
		return;
	}
	config.step = 0;

	context.clearRect(0, 0, canvas.width, canvas.height);

	drawBerry();
	drawSnake();
}
requestAnimationFrame( gameLoop );

function drawSnake() {
	snake.x += snake.dx;
	snake.y += snake.dy;

	collisionBorder();

	snake.tails.unshift( { x: snake.x, y: snake.y } );

	if ( snake.tails.length > snake.maxTails ) {
		snake.tails.pop();
	}

	snake.tails.forEach((el, index) => {
		if (index == 0) {
			context.fillStyle = "rgb(8, 51, 4)";
		} else {
			context.fillStyle = "rgb(13, 77, 6)";
		}
		context.fillRect( el.x, el.y, config.sizeCell, config.sizeCell );

		if ( el.x === berry.x && el.y === berry.y ) {
			snake.maxTails++;
			incScore();
			randomPositionBerry();
		}

		for( let i = index + 1; i < snake.tails.length; i++ ) {
			if ( el.x == snake.tails[i].x && el.y == snake.tails[i].y ) {
				finishGame();
			}
		}
	});
}

function collisionBorder() {
	if (snake.x < 0) {
		snake.x = canvas.width - config.sizeCell;
	} else if ( snake.x >= canvas.width ) {
		snake.x = 0;
	}

	if (snake.y < 0) {
		snake.y = canvas.height - config.sizeCell;
	} else if ( snake.y >= canvas.height ) {
		snake.y = 0;
	}
}

function finishGame() {
	let canvasWrapper = document.querySelector(".canvas-wrapper")
    canvasWrapper.innerHTML = `<h2>Count: <span class="primary">${score}</span></h2>`
    canvasWrapper.style.color = `white`
    canvasWrapper.style.width = `400px`
    canvasWrapper.style.height = `400px`
    canvasWrapper.style.background = `#161618`
}

function drawBerry() {
	context.beginPath();
	context.fillStyle = "red";
	context.arc( berry.x + (config.sizeCell / 2 ), berry.y + (config.sizeCell / 2 ), config.sizeBerry, 0, 2 * Math.PI );
	context.fill();
}

function randomPositionBerry() {
	berry.x = getRandomInt( 0, canvas.width / config.sizeCell ) * config.sizeCell;
	berry.y = getRandomInt( 0, canvas.height / config.sizeCell ) * config.sizeCell;
}

function incScore() {
	score++;
	drawScore();
}

function drawScore() {
	scoreBlock.innerHTML = score;
}

function getRandomInt(min, max) {
	return Math.floor( Math.random() * (max - min) + min );
}

up.addEventListener('click', (value) => {
    snake.dy = -config.sizeCell;
	snake.dx = 0;
})
down.addEventListener('click', (value) => {
    snake.dy = config.sizeCell;
	snake.dx = 0;
})
left.addEventListener('click', (value) => {
    snake.dx = -config.sizeCell;
	snake.dy = 0;
})
right.addEventListener('click', (value) => {
    snake.dx = config.sizeCell;
	snake.dy = 0;
})
newGameBtn.addEventListener('click', (event) => {
    location.reload()
})

document.addEventListener("keydown", (event) => {
    if (event.code == "KeyW") {
        snake.dy = -config.sizeCell;
	    snake.dx = 0;
    } else if (event.code == "KeyS") {
        snake.dy = config.sizeCell;
	    snake.dx = 0;
    } else if (event.code == "KeyA") {
        snake.dx = -config.sizeCell;
	    snake.dy = 0;
    } else if (event.code == "KeyD") {
        snake.dx = config.sizeCell;
	    snake.dy = 0;
    }
})