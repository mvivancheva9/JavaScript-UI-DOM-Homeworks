/**
 * Created by Margarita on 7/16/2015.
 */
window.onload = function (){
    var canvas = document.getElementById("the-canvas"),
        context = canvas.getContext('2d');

    context.beginPath();
    context.lineWidth = 5;
    context.arc(150, 300, 100, 0, 360 * Math.PI/180);
    context.fillStyle = "#90CAD7";
    context.strokeStyle = "#22545F";
    context.fill();
    context.stroke();
    context.closePath();

    context.beginPath();
    context.moveTo(140, 310);
    context.lineTo(120, 310);
    context.lineTo(140, 270);
    context.stroke();
    context.closePath();

    context.save();

    context.beginPath();
    context.scale(1, 0.7);
    context.arc(100, 380, 15, 0, 360 * Math.PI/180);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.arc(180, 380, 15, 0, 360 * Math.PI/180);
    context.stroke();
    context.closePath();

    context.restore();
    context.save();

    context.beginPath();
    context.rotate(10 * Math.PI / 180);
    context.scale(1, 0.3);
    context.arc(190, 1050, 35, 0, 360 * Math.PI/180);
    context.stroke();
    context.closePath();

    context.restore();
    context.save();

    context.beginPath();
    context.fillStyle = "#22545F";
    context.scale(0.6, 1);
    context.arc(160, 265, 6, 0, 360 * Math.PI/180);
    context.fill();
    context.stroke();
    context.closePath();

    context.beginPath();
    context.arc(292, 265, 6, 0, 360 * Math.PI/180);
    context.fill();
    context.stroke();
    context.closePath();

    context.restore();

    context.fillStyle = '#396693';
    context.strokeStyle = '#000000';
    context.lineWidth = 20;
    context.beginPath();
    context.scale(1, 0.2);
    context.arc(150, 1100, 100, 0, 360 * Math.PI/180);
    context.stroke();
    context.fill();
    context.closePath();

    context.restore();

    context.beginPath();
    context.lineWidth = 5;
    context.moveTo(110, 500);
    context.lineTo(110, 1050);
    context.bezierCurveTo(110, 1050, 160, 1100, 210, 1050);
    context.lineTo(210, 500);
    context.fill();
    context.stroke();
    context.closePath();

    context.restore();
    context.beginPath();
    context.arc(160, 500, 50, 0, 360 * Math.PI/180);
    context.fill();
    context.stroke();
    context.closePath();

    var circle = document.getElementById("the-canvas2"),
        bycicle = circle.getContext('2d');


    bycicle.fillStyle = "#90CAD7";
    bycicle.strokeStyle = "#22545F";
    bycicle.lineWidth = 3;
    bycicle.save();

    bycicle.beginPath();
    bycicle.arc(150, 300, 60, 0, 360 * Math.PI/180);
    bycicle.fill();
    bycicle.stroke();
    bycicle.closePath();

    bycicle.beginPath();
    bycicle.arc(400, 300, 60, 0, 360 * Math.PI/180);
    bycicle.fill();
    bycicle.stroke();
    bycicle.closePath();

    bycicle.beginPath();
    bycicle.moveTo(250, 270);
    bycicle.lineTo(310, 330);
    bycicle.stroke();
    bycicle.closePath();

    bycicle.beginPath();
    bycicle.fillStyle = '#FFFFFF';
    bycicle.arc(280, 300, 20, 0, 360 * Math.PI/180);
    bycicle.fill();
    bycicle.stroke();
    bycicle.closePath();

    bycicle.beginPath();
    bycicle.moveTo(150, 300);
    bycicle.lineTo(230, 210);
    bycicle.lineTo(390, 210);
    bycicle.lineTo(280, 300);
    bycicle.lineTo(150, 300);
    bycicle.stroke();
    bycicle.closePath();

    bycicle.beginPath();
    bycicle.moveTo(280, 300);
    bycicle.lineTo(210, 170);
    bycicle.stroke();
    bycicle.closePath();

    bycicle.beginPath();
    bycicle.moveTo(180, 170);
    bycicle.lineTo(240, 170);
    bycicle.stroke();
    bycicle.closePath();

    bycicle.beginPath();
    bycicle.moveTo(400, 300);
    bycicle.lineTo(387, 150);
    bycicle.lineTo(430, 120);
    bycicle.stroke();
    bycicle.closePath();

    bycicle.beginPath();
    bycicle.moveTo(387, 150);
    bycicle.lineTo(334, 160);
    bycicle.stroke();
    bycicle.closePath();

    var house = document.getElementById("house"),
        home = house.getContext('2d');

    home.fillStyle = "#975B5B";
    home.strokeStyle = "#000000";
    home.lineWidth = 2;
    home.save();

    home.moveTo(30, 200);
    home.lineTo(30, 400);
    home.lineTo(300, 400);
    home.lineTo(300, 200);
    home.lineTo(30, 200);
    home.lineTo(160, 60);
    home.lineTo(300, 200);
    home.fill();
    home.stroke();
    home.closePath();

    home.beginPath();
    home.fillStyle = '#000000';
    home.moveTo(50, 230);
    home.lineTo(50, 290);
    home.lineTo(130, 290);
    home.lineTo(130, 230);
    home.fill();
    home.closePath();

    home.beginPath();
    home.fillStyle = '#000000';
    home.moveTo(200, 230);
    home.lineTo(200, 290);
    home.lineTo(280, 290);
    home.lineTo(280, 230);
    home.fill();
    home.closePath();

    home.beginPath();
    home.fillStyle = '#000000';
    home.moveTo(200, 320);
    home.lineTo(200, 380);
    home.lineTo(280, 380);
    home.lineTo(280, 320);
    home.fill();
    home.closePath();

    home.beginPath();
    home.strokeStyle = '#975B5B';
    home.lineWidth = 2;
    home.moveTo(40, 260);
    home.lineTo(290, 260);
    home.stroke();
    home.closePath();

    home.beginPath();
    home.moveTo(90, 230);
    home.lineTo(90, 300);
    home.stroke();
    home.closePath();

    home.beginPath();
    home.moveTo(240, 230);
    home.lineTo(240, 380);
    home.stroke();
    home.closePath();

    home.beginPath();
    home.moveTo(40, 350);
    home.lineTo(290, 350);
    home.stroke();
    home.closePath();

    home.restore();
    home.beginPath();
    home.moveTo(60, 400);
    home.lineTo(60, 330);
    home.bezierCurveTo(60, 330, 90, 310, 120, 330);
    home.lineTo(120, 400);
    home.lineTo(90, 400);
    home.lineTo(90, 320);
    home.stroke();
    home.closePath();

    home.beginPath();
    home.arc(80, 360, 3, 0, 360 * Math.PI/180);
    home.stroke();
    home.closePath();

    home.beginPath();
    home.arc(100, 360, 3, 0, 360 * Math.PI/180);
    home.stroke();
    home.closePath();

    home.beginPath();
    home.moveTo(210, 150);
    home.lineTo(210, 70);
    home.lineTo(240, 70);
    home.lineTo(240, 150);
    home.fill();
    home.stroke();
    home.closePath();

    home.beginPath();
    home.scale(1, 0.3);
    home.arc(225, 230, 15, 0, 360 * Math.PI / 180);
    home.fill();
    home.stroke();
    home.closePath();
};