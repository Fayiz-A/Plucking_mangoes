class Boy extends ChildClass{
    constructor(x, y, width, height){
        super(x, y, width, height);
        this.image = loadImage("boy.png");
    }

    display(){
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height);
    }
}