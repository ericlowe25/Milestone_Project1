// update Loop
import Ball from "./ball.js"
import Paddle from "./Paddles.js"

const ball = new Ball(document.getElementById("ball"))
const userPaddle = new Paddle(document.getElementById("user-paddle"))
const cpuPaddle = new Paddle(document.getElementById("cpu-paddle"))
const userScoreElem = document.getElementById("user-score")
const cpuScoreElem = document.getElementById("cpu-score")


// create time loop
// let lastTime
// function update(time) {
//    const delta = time - lastTime
//}
//    lastTime = time
//    window.requestAnimationFrame(update)

// Update code with ref: https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame  
let lastTime
function update(time) {
    if (lastTime != null) {
        const delta = time - lastTime
        ball.update(delta, [userPaddle.rect(), cpuPaddle.rect()])
        cpuPaddle.update(delta, ball.y)
    }
    
    lastTime = time
    window.requestAnimationFrame(update)
}

document.addEventListener("mouseove", e => {
    userPaddle.position = (e.y / window.innerHeight) * 100
})

window.requestAnimationFrame(update)
