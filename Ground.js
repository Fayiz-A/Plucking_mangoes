class Ground extends ParentClass{
    constructor(x,y,width,height){
        super(x,y,width,height);

        this.body = Bodies.rectangle(x,y,width,height, {isStatic: true});
        World.add(world, this.body);
        
    }

    display(){
        super.display();
        fill(255, 255, 0);
        strokeWeight(0);
        rect(this.x, this.y, this.width*2, this.height*2);
    }
}