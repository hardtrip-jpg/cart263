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

    }

    Bird() {
        this.birdDiv = document.createElement('div')
        this.birdDiv.style.position = 'absolute';
        this.birdDiv.style.width = this.width + 'px';
        this.birdDiv.style.height = this.height + 'px';

        this.birdDiv.style.left = this.x + 'px';
        this.birdDiv.style.top = this.y + 'px';

        // image of the bird from the assets folder
        this.birdDiv.style.backgroundImage = 'url(assets/Eagle-png-transparent-background-free-download.png)';
        this.birdDiv.style.backgroundSize = 'cover';

        // add the bird to the DOM
        document.body.appendChild(this.birdDiv);

    }

    animateBird() {

    }

}