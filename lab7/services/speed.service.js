/**
 * sm it's means pixels
 */

const MAIN_RADIUS = 150; // sm
const SMALL_RADIUS = 120; // sm

const SPEED = 0.7; // revolutions per second
const REVERSE_SPEED = 0.4; // revolutions per second

const TRACTOR_WIDTH = 1000; // pixels

class SpeedService {
    main = MAIN_RADIUS;
    small = SMALL_RADIUS;

    tractorWidth = TRACTOR_WIDTH;

    speed = SPEED;
    reverseSpeed = REVERSE_SPEED;

    getSpeed = (isForward) => isForward ? this.speed : this.reverseSpeed;

/**
 * ger linear speed in sm
 */

    getLinearSpeed = (mainRadialSpeed) => {
        return Math.PI * 2 * mainRadialSpeed * this.main;
    };

    getSmallRadialSpeed = (mainRadialSpeed) => {
        return (this.main * mainRadialSpeed)/this.small;
    };

    getTime = (linearSpeed) => {
        return (this.tractorWidth + document.body.clientWidth) / linearSpeed;
    }
}

export default new SpeedService();