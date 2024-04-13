import { gravity, forceLoss } from "./physics.js";
import { getElementByRef } from "../utils/index.js";

var refCount = 1;

class Ball {
    mass = 1;

    posX = Math.random() * 1000;
    posY = Math.random() * 1000;
    moving = true;

    ref = `ball${refCount}`;

    updatePosition() {
        this.updateHeight();
        this.updateXAxis();
    }

    updateHeight() {
        this.moving = !(this.posY === 0);
        if ( this.moving === true ) {
            const ball = getElementByRef(this.ref);
            this.posY = this.posY - gravity*5 + "px";
            ball.style.bottom = this.posY;

            console.log("Moving!");
            
            this.updateHeight();
        } else {
            this.endMovement();
        }
    }

    updateXAxis() {

    }

    endMovement() {
        if (this.posY = 0) {
            this.moving = false;
            refCount += 1;
        }
    }

}

export { 
    Ball, 
};