class Stone extends ChildClass{
    constructor(x, y, width, height){
        super(x, y, width, height);

        var options = {
            isStatic: false,
            friction: 1,
            restitution: 0,
            density: 1.2
        }

        this.image = loadImage("stone.png");
    }

    display() {
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height);
    }
}