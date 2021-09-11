
{
    const init = () => {
        // initialize the canvas
        const $canvas = document.querySelector(`.canvas`);
        const ctx = $canvas.getContext(`2d`);

        // draw a 100 by 100 square at point 25,25
        ctx.fillRect(25, 25, 100, 100);

        // setting a color and draw a second rectangle
        ctx.fillStyle = `#34a4f2`;
        ctx.fillRect(150,25,50,50);

        // setting a stroke as rgb color for the second rectangle
        ctx.lineWidth = 5;
        ctx.strokeStyle = `rgb(123,45,67)`;
        ctx.strokeRect(150, 25, 50, 50);

        // remove a part of both rectangles
        ctx.clearRect(80, 45, 100, 60);
    };

    init();
}
