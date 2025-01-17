"use strict";

const rectangle_amount = 3;


function setup() {
    console.log("go");
    createCanvas(640, 480);

}

function draw() {
    background("#FFFFFF");
    draw_rectangle(0, 255, 0, 0);
    draw_rectangle(1, 0, 255, 0);
    draw_rectangle(2, 0, 0, 255);
}

function draw_rectangle(pos, r, b, g) {
    const cur_width = width / rectangle_amount;
    const cur_pos = cur_width * pos;
    const max_pos = cur_width * (pos + 1);

    push();
    fill(r, b, g);
    if (mouseX > cur_pos && mouseX < max_pos) {
        fill("#FFFFFF");
    }
    rect((cur_pos), 0, cur_width, height);
    pop();
}