"use strict";

const loop_amount = 10;
const vert_loop = 15

let text_height = 28;

function setup() {
    console.log("go");
    createCanvas(640, 480);

}

function draw() {
    background("#000000");
    push();
    fill(255, 255, 255);
    textSize(text_height);
    text("Test", width / 2, height / 2);
    for (let i = 0; i < loop_amount; i++) {
        var i_string = String(i)
        text(i, 10 + ((textWidth(i) * i) + 5), 50)
    }
    for (let i = vert_loop; i >= 0; i--) {
        text(i, 10, height - (text_height * i) - 10)
    }
    pop();

}