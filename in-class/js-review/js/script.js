"use strict";

let current_color = {
    r: 255,
    b: 255,
    g: 255,
}

let current_state = "flip"

function setup() {
    console.log("go");
    createCanvas(640, 480);

}

function draw() {
    background("#000000");

}

function mouseClicked() {
    switch (current_state) {
        case "flip":
            current_state = "flop";
        case "flop":
            current_state = "flip";
    }
}

function keyPressed() {
    if (key === " ") {
        current_color.r = random(0, 255);
        current_color.b = random(0, 255);
        current_color.g = random(0, 255);
    }
}