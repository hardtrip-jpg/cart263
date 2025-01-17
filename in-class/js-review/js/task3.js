"use strict";

let square1_x = 10;
let square1_y = 10;

let square2_x = 100;
let square2_y = 100;

let square3_x = 200;
let square3_y = 200;
const square3_speed = 1;

let color_x = 0;
let color_y = 0;

const size = 50;

function setup() {
    console.log("go");
    createCanvas(640, 480);

    set_square_1_pos();
    set_square_2_pos();
}

function draw() {
    background("#FFFFFF");
    set_square_3_pos();
    check_mouse_color();
    square1();
    square2();
    square3();
}

function square1() {
    push();
    fill(255, 0, 0);
    rect(square1_x, square1_y, size);
    pop();
}

function square2() {
    push();
    fill(0, 255, 0);
    rect(square2_x, square2_y, size);
    pop();
}

function square3() {
    push();
    fill(color_x, color_y, 255);
    rect(square3_x, square3_y, size);
    pop();
}

function check_mouse_color() {
    color_x = map(mouseX, 0, height, 0, 255);
    color_y = map(mouseY, 0, width, 0, 255);
}

function new_rand_pos() {
    var new_x = random(50, (height - size));
    var new_y = random(50, (width - size));
    return createVector(new_x, new_y);
}

function set_square_1_pos() {
    const new_pos = new_rand_pos();
    square1_x = new_pos.x;
    square1_y = new_pos.y;
}

function set_square_2_pos() {
    const new_pos = new_rand_pos();
    square2_x = new_pos.x;
    square2_y = new_pos.y;
}

function set_square_3_pos() {
    square3_y = square3_y - square3_speed;

    if (square3_y === 0) {
        square3_y = height;
    }
}

function mouseClicked() {
    set_square_1_pos();
}

function keyPressed() {
    if (keyCode === 32) {
        set_square_2_pos();
    }
}