import { gravity } from "./physics.js";

class PhysicsObject {
    mass;
    bounce;
    speedY;
    speedX;

    updateVertical(_posY, time) {
        const newPosY = parseInt(_posY) + ( -gravity * (time ** 2) / 2 ) + (this.speedY | 0);
        return newPosY;
    }

    updateHorizontal(_posX, time) {
        const newPosX = _posX + this.speedX * time;
        return newPosX;
    }

    stopMovementX() {
        this.speedX = 0;
    }

    stopMovementY() {
        this.speedY = 0;
    }

    stopMovementAll() {
        this.stopMovementX();
        this.stopMovementY();
    }

}


export {
    PhysicsObject,
}