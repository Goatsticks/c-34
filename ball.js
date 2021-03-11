class ball {
    constructor(x,y,radius) {
      var options = {
          frictionAir: 0.005,
          density: 0.1
      }
      this.body = Bodies.circle(x,y,radius, options);
      this.radius = radius;
            World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
       var angle = this.body.angle;
       push ()
       translate(pos.x, pos.y);
       rotate(angle)
       strokeWeight (4)
       stroke ("blue")
      ellipseMode(RADIUS);
            ellipse(0,0, 50, 50);
            pop ()
    }
  };
