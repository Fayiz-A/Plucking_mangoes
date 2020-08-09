class Launcher {
    constructor(bodyA, pointB, stiffness){

        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: stiffness,
            length: 20
        }

        this.constraint = Constraint.create(options);
        World.add(world, this.constraint);
    }

    fly() {
        this.constraint.bodyA = null;
    }

    attach(bodyA) {
        this.constraint.bodyA = bodyA;
    }

    display(){
        if(this.constraint.bodyA){
            var startPos = this.constraint.bodyA.position;
            var endPos = this.constraint.pointB;
            strokeWeight(3);
            line(startPos.x, startPos.y, endPos.x, endPos.y);
        }
    }
}