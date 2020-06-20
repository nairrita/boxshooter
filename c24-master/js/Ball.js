class Box {
  constructor(x,y,w,h) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        //inertia: Infinity,
        restitution: 1.0
    }

    this.body = Bodies.rectangle(x,y,w,h, options);
    World.add(world,this.body);

    this.w = w;
    this.h = h
    World.add(world,this.body);
  }

  display() {
    var pos = this.body.position
    var angle = this.body.angle
    push();
    translate(pos.x, pos.y)
    rotate(angle);
    rectMode(CENTER);
  rect(0, 0,this.w,this.h);
    pop()
  }
}