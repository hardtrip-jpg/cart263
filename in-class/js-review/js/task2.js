"use strict";

function setup() {
    console.log("go");
    createCanvas(640, 480);

}

function draw() {
    drawEllipse(50, 50, 50, 50, 255, 0, 0);
    drawEllipse(150, 150, 50, 50, 0, 255, 0);
    drawEllipse(250, 250, 50, 50, 0, 0, 255);

}

function drawEllipse(x, y, w, h, r, b, g) {
    push();
    fill(r, b, g);
    ellipse(x, y, w, h);
    pop();
}