import { Ball } from "./ball.js";
import { getElementByRef } from "../utils/index.js";

function createBall () {
    const ball = new Ball();

    const div =  document.createElement('div');

    div.textContent = ball.ref;
    div.setAttribute('ref', ball.ref);
    div.setAttribute('class', 'ball');

    div.style.bottom = `${ball.posY}px`;
    div.style.left = `${ball.posX}px`;


    const boundingBox = document.getElementById("bounding-box");
    boundingBox.appendChild( div );

    ball.updatePosition();
}

function init() {
    createBall();
}

document.addEventListener("DOMContentLoaded", init);