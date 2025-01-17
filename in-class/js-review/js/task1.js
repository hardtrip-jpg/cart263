"use strict";

let x = 50
let y = 50
let w = 50

function setup() {
    console.log("go");
    createCanvas(640, 480);

}

function draw() {
    push();
    fill("#FF0000");
    ellipse(x, y, w);
    pop();
    push();
    fill("#00FF00");
    ellipse(x * 2, y * 2, w * 2);
    pop();
    push();
    fill("#0000FF");
    ellipse(x * 3, y * 3, w * 3);
    pop();

}