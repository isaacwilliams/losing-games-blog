
const drawLoader = (context) => {
    const start = new Date();
    const lines = 16;
    const cW = context.canvas.width;
    const cH = context.canvas.height;

    const draw = () => {
        const rotation = parseInt(((new Date() - start) / 1000) * lines) / lines;

        context.save();
        context.clearRect(0, 0, cW, cH);
        context.translate(cW / 2, cH / 2);
        context.rotate(Math.PI * 2 * rotation);

        for (let i = 0; i < lines; i++) {
            context.beginPath();
            context.rotate(Math.PI * 2 / lines);
            context.moveTo(15, 0);
            context.lineTo(25, 0);
            context.lineWidth = 2;
            context.strokeStyle = `rgba(0,0,0,${i / lines})`;
            context.stroke();
        }

        context.restore();
    };

    return setInterval(draw, 1000 / 30);
};

export default drawLoader;
