
{
    const init = () => {
        // initialize the canvas
        const $canvas = document.querySelector(`.canvas`);
        const ctx = $canvas.getContext(`2d`);

        // Option 1: Step by step
        // Step 1: draw the outer circle
        ctx.beginPath();
        ctx.arc(125, 125, 100, 0, Math.PI * 2);
        //ctx.closePath(); --> not required since the path is already closed
        ctx.stroke();

        // Step 2: draw the mouth
        ctx.beginPath();
        ctx.arc(125, 125, 45, 0, Math.PI);
        //ctx.closePath(); --> no need to close it.
        ctx.stroke();

        // Step 3: draw the left eye
        ctx.beginPath();
        ctx.arc(80, 75, 15, 0, Math.PI * 2);  // Left eye
        ctx.fill();

        // Step 4: draw the right eye
        ctx.beginPath();
        ctx.arc(170, 75, 15, 0, Math.PI * 2);  // Right eye
        ctx.fill();

        // Option 2: at once
        /* 
        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2); // Outer circle
        ctx.moveTo(110, 75);
        ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
        ctx.moveTo(65, 65);
        ctx.arc(60, 65, 5, 0, Math.PI * 2);  // Left eye
        ctx.moveTo(95, 65);
        ctx.arc(90, 65, 5, 0, Math.PI * 2);  // Right eye
        ctx.stroke();
         */
    };

    init();
}
