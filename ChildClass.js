class ChildClass{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);

        this.x = this.body.position.x;
        this.y = this.body.position.y;
        this.width = width;
        this.height = height;
    }

    display(){
        rectMode(CENTER);
    }

}