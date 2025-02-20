class Bird {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = Math.floor(Math.random() * 16777215).toString(16);
        if (color) {
            this.color = color;
        }
        this.birdDiv = document.createElement('div');


    }

    Bird() {

    }

    animateBird() {

    }

}