
{
    const init = () => {
        // initialize the canvas
        const $canvas = document.querySelector(`.canvas`);
        const ctx = $canvas.getContext(`2d`);


        // new instance of Path2D to draw a rectangle
        const rectangle = new Path2D();
        rectangle.rect(10, 10, 50, 50);

        // new instance of Path2D to draw a circle
        const circle = new Path2D();
        circle.arc(100, 35, 25, 0, 2 * Math.PI);

        // outline for the rectangle and fill the circle
        ctx.stroke(rectangle);
        ctx.fillStyle = `orange`;
        ctx.fill(circle);
    };

    init();
}
