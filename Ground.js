class Ground extends ChildClass{
    display(){
        super.display();
        fill(255, 255, 0);
        rect(x, y, this.width, this.height);
    }
}