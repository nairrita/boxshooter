const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint} = Matter;

var engine, world;
var tanker;
var angle = 0
var canonBall;
var shot;
var ground;
var box_1,box_2,box_3,box_4,box_5;
var launcherX,launcherY;
var flag = "start"

function setup(){
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2, height-10, width, 30);
  tanker = new Tanker(75,height-110,60,30);

  box_1 = new Box(400,380,50,50)
  box_2 = new Box(400,100,50,50)
  box_3 = new Box(500,380,50,50)
  box_4 = new Box(500,100,50,50)
 

  canonBall = new CanonBall(20,20);


  shot = new ShootBall(canonBall.body,{x:70, y:height-220});
}

function draw() {
   background("powderblue");
   Matter.Engine.update(engine);
   ground.display()
   box_2.display()
   box_1.display()
   box_3.display();
   box_4.display();
  
   canonBall.display();
   tanker.display();
   shot.display();
   if(keyIsDown(UP_ARROW)){
     shot.attach(canonBall.body)
   }
   //fill("crimson");
    textSize(15);
    text("Use the Left and Right Arrow keys to aim",20,46);
    text("Use the Up Arrow to reload and use the Down Arrow to shoot",20,76);
}


function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    flag = "launch"

    shot.shoot()
  }
}