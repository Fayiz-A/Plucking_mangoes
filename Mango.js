class Mango extends ChildClass{
    constructor(x, y, width, height){
        super(x, y, width, height);

        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1.0 
        }

        this.body = Bodies.circle(x, y, width/2, options);
        World.add(world, this.body);

        this.image = loadImage("mango.png");
    }

    fall(){
        Body.setStatic(this.body, false);
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
    }
}