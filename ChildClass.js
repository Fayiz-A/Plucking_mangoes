class ChildClass{
    constructor(x, y, width, height) {
        var options = {
            isStatic:false,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.x = this.body.position.x;
        this.y = this.body.position.y;
        this.width = width;
        this.height = height;
        World.add(world, this.body);

    }

    display(){
        rectMode(CENTER);
    }

}