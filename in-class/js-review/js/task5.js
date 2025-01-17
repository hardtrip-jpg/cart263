"use strict";

let counter = 0;

const square = {
    x: 295,
    y: 215,
    w: 50,
    r: 255,
    b: 215,
    g: 0,

}

const square2 = {
    x: 355,
    y: 215,
    w: 50,
    r: 255,
    b: 0,
    g: 0,

}

const base_ellipse = {
    x: 295,
    y: 215,
    r: 30,
    a: 127.5
}


function setup() {
    console.log("go");
    createCanvas(640, 480);

}

function draw() {
    background("#000000");
    for (let i = 0; i < counter; i++) {
        displayEllipse(base_ellipse.x, base_ellipse.y, base_ellipse.r, base_ellipse.a, i)
    }
    displaySquare(square);
    displaySquare(square2);

}

function displaySquare(draw_sqaure) {
    push();
    fill(draw_sqaure.r, draw_sqaure.b, draw_sqaure.g);
    if (checkCollisionWithSquare(draw_sqaure)) {
        fill(draw_sqaure.r, draw_sqaure.b + 50, draw_sqaure.g + 50);
    }
    rect(draw_sqaure.x, draw_sqaure.y, draw_sqaure.w)
    pop();
}

function displayEllipse(x, y, w, a, p) {
    push();
    fill(255, 255, 255, a);
    ellipse(x, y, (w * p));
    pop();
}

function checkCollisionWithSquare(check) {
    if (mouseX > check.x && mouseX < (check.x + check.w)) {
        if (mouseY > check.y && mouseY < (check.y + check.w)) {
            return true
        }
    }
    return false
}

function mouseClicked() {
    if (checkCollisionWithSquare(square)) {
        counter++;
    }
    else if (checkCollisionWithSquare(square2)) {
        counter--;
        if (counter < 0) {
            counter = 0;
        }
    }
    console.log(counter);
}