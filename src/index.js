import './index.scss';
import RootWalker from './assets/Male-3-Walk.png'

const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')
const width = 600
const height = 600
const spriteW = 48
const spriteH = 48
const shots = 3
let cycle = 0
let pY = height/2 - spriteH/2
let pX = width/2 - spriteW/2
let step = 10
let bottomPressed = false
let upPressed = false
let rightPressed = false
let leftPressed = false
let direction = 0
const keyDownHandler = (e) => {
    if (e.key === 'Down' || e.key === 'ArrowDown') {
        bottomPressed = true
    } else if (e.key === 'Up' || e.key === 'ArrowUp') {
        upPressed = true
    } else if (e.key === 'Right' || e.key === 'ArrowRight') {
        rightPressed = true
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
        leftPressed = true
    }
}

const keyUpHandler = (e) => {
    if (e.key === 'Down' || e.key === 'ArrowDown') {
        bottomPressed = false
    } else if (e.key === 'Up' || e.key === 'ArrowUp') {
        upPressed = false
    } else if (e.key === 'Right' || e.key === 'ArrowRight') {
        rightPressed = false
    } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
        leftPressed = false
    }
}

document.addEventListener('keydown', keyDownHandler)
document.addEventListener('keyup', keyUpHandler)

const canStep = (pX, pY) => {
    if (pX < 0 || pX > width-spriteW || pY < 0 || pY > height-spriteH) {
        return false
    }
    else {
        return true
    }
}

const img = document.createElement('img')
img.src = RootWalker
img.addEventListener('load', () => {
    setInterval(() => {
        if (bottomPressed && canStep(pX, pY + step)) {
            pY += step
            cycle = (cycle + 1) % shots
            direction = 0
        } else if (upPressed && canStep(pX, pY - step)) {
            pY -= step
            cycle = (cycle + 1) % shots
            direction = spriteW * 3
        } else if (rightPressed && canStep(pX + step, pY)) {
            pX += step
            cycle = (cycle + 1) % shots
            direction = spriteW * 2
        } else if (leftPressed && canStep(pX - step, pY)) {
            pX -= step
            cycle = (cycle + 1) % shots
            direction = spriteW
        }
        ctx.clearRect(0, 0, width, height)
        ctx.drawImage(img, cycle * spriteW, direction, spriteW, spriteH, pX, pY, spriteW, spriteH)

    }, 120)

})
