import { gravity, forceLoss } from "./physics.js";
import { getElementByRef } from "../utils/index.js";

var refCount = 1;

class Ball {
    mass = 1;

    posX = Math.random() * 1000;
    posY = Math.random() * 1000;

    ref = `ball${refCount}`;

    updatePosition() {
        this.updateHeight();
        this.updateXAxis();
    }

    updateHeight(timeElapsed) {
        if ( this.posY !== 0 ) {
            const newHeight = -gravity * (5 ** timeElapsed);
            return newHeight;
        } else {
            this.endMovement();
        }
    }

    updateXAxis() {

    }

    endMovement() {
        refCount += 1;
    }

}

export { 
    Ball, 
};