class Mango extends ParentClass{
    constructor(x, y, width, height){
        super(x, y, width, height);

        var options = {
            isStatic: true,
            restitution: 0.1,
            density: 2.5,
            friction: 0.1
        }

        this.body = Bodies.circle(x, y, width/5, options);
        World.add(world, this.body);
        this.width = width;
        this.height = height

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