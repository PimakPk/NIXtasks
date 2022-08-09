function drawRectangle() {
    let canvas = document.getElementById('canvas');

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillRect(0, 0, 100, 100);
    }
}

function drawTriangle() {
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext("2d");
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        context.beginPath();
        context.moveTo(100, 100);
        context.lineTo(100, 300);
        context.lineTo(300, 300);
        context.closePath();

        // the outline
        context.lineWidth = 10;
        context.strokeStyle = '#666666';
        context.stroke();

        // the fill color
        context.fillStyle = "#FFCC00";
        context.fill();
    }
}

//test

drawRectangle();
drawTriangle();