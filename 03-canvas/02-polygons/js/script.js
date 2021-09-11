
{
    const init = () => {
        // initialize the canvas
        const $canvas = document.querySelector(`.canvas`);
        const ctx = $canvas.getContext(`2d`);

        // indicates the start of a new path
        ctx.beginPath();
        // moves the starting point to new coordinates
        ctx.moveTo(10, 10);
        // draw a line to a certain coordinate
        ctx.lineTo(150, 100);
        // draw another line
        ctx.lineTo(10, 200);
        // close the path: this draws a line to the starting point
        ctx.closePath();
        
        // fill the shape or just draw the stroke
        ctx.fill();
        ctx.stroke();
    };

    init();
}
