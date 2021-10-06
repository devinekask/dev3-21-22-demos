/*
NOTE: 
the code will not execute correctly because it is not attached to an html document
this demo only demonstrates how webpack bundles and minifies the code
*/

import Particle from './classes/Particle.js';
import {random} from './functions/lib.js';
import Vector from './classes/Vector.js';


{
    const $canvas = document.querySelector(`.canvas`);
    const ctx = $canvas.getContext(`2d`);

    const balls = [];
    const mouse = new Vector($canvas.width / 2, $canvas.height / 2);

    const handleMouseMove = event => {
        mouse.x = event.offsetX;
        mouse.y = event.offsetY;
    };

    const drawBalls = () => {
        ctx.clearRect(0, 0, $canvas.width, $canvas.height);
        balls.forEach(ball => ball.draw());
        requestAnimationFrame(drawBalls);
    }

    const init = () => {
        for (let i = 0; i < 10; i++) {
            balls.push(new Particle($canvas, mouse, random(0, $canvas.width), random(0, $canvas.height), `#ff0000`));
        }

        drawBalls();
        $canvas.addEventListener(`mousemove`, handleMouseMove);

    };

    init();
}