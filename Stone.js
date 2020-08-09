class Stone extends ChildClass{
    constructor(x, y, width, height){
        super(x, y, width, height);

        var options = {
            isStatic: false,
            friction: 1,
            restitution: 0,
            density: 1.2
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("stone.png");
    }

    display() {
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
    }
}