"use strict";

let current_color = {
    r: 255,
    b: 255,
    g: 255,
};

const object_size = 50;

let current_state = "circle";

let row_count = 0

function setup() {
    console.log("go");
    createCanvas(500, 500);
    row_count = int(width / object_size)
    changeColor();
}

function draw() {
    background("#000000");
    push();
    fill(current_color.r,current_color.b,current_color.g);

    for (let i = 0; i < row_count; i++){
        switch(current_state){
            case "circle":
                drawCircleRow(object_size * i);
                current_state = "square"
                break;
            case "square":
                drawSquareRow(object_size * i);
                current_state = "circle"
                break;
        }
    }
    pop();
}

function drawCircleRow(cur_y){
    for(let i = 0; i < row_count; i++){
        ellipse((object_size * i) + (object_size/2), cur_y + (object_size/2), object_size);
    }
}

function drawSquareRow(cur_y){
    for(let i = 0; i < row_count; i++){
        rect(object_size * i, cur_y, object_size);
    }
}

function changeColor(){
    current_color.r = random(0, 255);
    current_color.b = random(0, 255);
    current_color.g = random(0, 255);
}

function mouseClicked() {
    switch (current_state) {
        case "circle":
            current_state = "square";
            break;
        case "square":
            current_state = "circle";
            break;
    }
}

function keyPressed() {
    if (key === " ") {
        changeColor();
    }
}