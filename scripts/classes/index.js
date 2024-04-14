import { PhysicsObject } from "./physicsObject.js";

function init() {
    let time = new Date().getSeconds();

    const object = new PhysicsObject;

    const objectDiv = document.createElement('div');

    objectDiv.setAttribute('ref', 'object');
    objectDiv.setAttribute('class', 'ball');

    objectDiv.style.bottom = "600px";
    objectDiv.style.left = "750px";

    document.getElementById('bounding-box').appendChild(objectDiv);

    requestAnimationFrame( () => {
        time = animate(objectDiv, object, time);
    });
}

function animate(div, object, time) {
    const timeElapsed = new Date().getSeconds() - time;
    if (div.style.bottom >= "0px") {
        div.style.bottom = object.updateVertical(div.style.bottom.substring(0, div.style.bottom.length-2), timeElapsed) + "px";

        requestAnimationFrame(() => animate(div, object, time));
        return time;
    } else {
        time = new Date().getSeconds();
        return time;
    }
}

addEventListener('DOMContentLoaded', init);