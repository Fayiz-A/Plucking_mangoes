class Mango extends ChildClass{
    constructor(x, y, width, height){
        super(x, y, width, height);

        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1.0 
        }

        this.body = Bodies.circle(x, y, width/3, options);
        World.add(world, this.body);

        this.image = loadImage("mango.png");
    }

    fall(){
        Body.setStatic(this.body, false);
    }

    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}