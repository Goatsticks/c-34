class rope {
    constructor(bodyA, pointB){
        var options =  {
            stiffness:0.5,
            length:300,
            bodyA: bodyA,
            pointB:pointB
        }

        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world,this.rope);

    }
    display(){
        if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        line(pointA.x , pointA.y , pointB.x, pointB.y);
        }
    }
    fly(){
        this.rope.bodyA= null;
    }
}