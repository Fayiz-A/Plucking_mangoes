class Stone extends ParentClass{
    constructor(x, y, width, height){
        super(x, y, width, height);

        var options = {
            isStatic: false,
            restitution:0.2,
            friction:0.9,
            density:1.3
        }

        this.body = Bodies.circle(x, y, width/2, options);
        World.add(world, this.body);
        this.image = loadImage("stone.png");
    }

    display() {
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
    }
}
