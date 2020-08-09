class Ground extends ChildClass{
    display(){
        fill(255, 255, 0);
        rect(this.x, this.y, this.width, this.height);
        super.display();
    }
}