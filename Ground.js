class Ground extends ChildClass{
    display(){
        var pos = this.body.position;
        fill(255, 255, 0);
        rect(pos.x, pos.y, this.width, this.height);
    }
}