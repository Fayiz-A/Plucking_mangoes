class Mango extends ChildClass{
    constructor(x, y, width, height){
        super(x, y, width, height);
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1, 
        }
        this.body = Bodies.circle(x, y, width, options);

        this.image = loadImage("mango.png");
    }

    fall(){
        Body.setStatic(this.body, false);
    }

    display(){
        image(this.image, this.x, this.y, this.width, this.height);
    }
}