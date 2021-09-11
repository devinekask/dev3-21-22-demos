
{
    // default x-position is 0 and the size is 1
    let xPos = 0;
    let size = 1;

    // initialize the canvas
    const $canvas = document.querySelector(`.canvas`);
    const ctx = $canvas.getContext(`2d`);

    const animate = () => {
        // increment position and size
        xPos++;
        size += 0.1;

        // clear the canvas
        ctx.clearRect(0, 0, $canvas.width, $canvas.height);

        // draw the circle again
        ctx.beginPath();
        ctx.arc(xPos, 75, size, 0, Math.PI * 2, true); 
        ctx.closePath();
        ctx.fill();

        // start over when the circle left the canvas
        if (xPos > $canvas.width) {
            xPos = 0;
            size = 1;
        }

        // repeat the animation
        requestAnimationFrame(animate);
    };

    const init = () => {
        // start the animation
        animate();
    };

    init();
}




