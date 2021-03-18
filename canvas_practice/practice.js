document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById('mycanvas');

    canvas.width = 500;
    canvas.height = 500;

    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'red';
    ctx.fillRect(0,0,500,500);

    ctx.beginPath();
    ctx.arc(250,250,200,0,360);
    ctx.strokeStyle = 'purple';
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = 'blue';
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(100,100);
    ctx.lineTo(100,200);
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.strokeStyle = 'white';
    ctx.stroke();

});
