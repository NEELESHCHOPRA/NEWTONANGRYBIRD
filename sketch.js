const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5 ;
var roof;
var rope1, rope2, rope3, rope4, rope5 ;

function preload(){
	img = loadImage ("bg.png")
}

function setup() {
	createCanvas(1200,500);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(310,300,20);
	bob2 = new Bob(330,300,20);
	bob3 = new Bob(350,300,20);
	bob4 = new Bob(370,300,20);
	bob5 = new Bob(390,300,20);

	roof = new Roof(350,100,200,20);

	rope1 = new Rope(bob1.body,roof.body,-80,0);
	rope2 = new Rope(bob2.body,roof.body,-40,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,40,0);
	rope5 = new Rope(bob5.body,roof.body,80,0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(img);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  stroke("black")
  strokeWeight(1)
  fill("black")
  textFont("Broadway")
  textSize(25)
  text("Newton's Craddle (Angry Birds Version)",600,100)

  stroke("black")
  strokeWeight(1)
  fill("black")
  textFont("Comis Sans MS")
  textSize(18)
  text("Newton's cradle is a device that demonstrates conservation of momentum ",600,130)

  stroke("black")
  strokeWeight(1)
  fill("black")
  textFont("Comis Sans MS")
  textSize(18)
  text ("and energy using a series of swinging spheres. When one sphere at the end is ",600,160)

  stroke("black")
  strokeWeight(1)
  fill("black")
  textFont("Comis Sans MS")
  textSize(18)
  text("lifted and released, it strikes the stationary spheres, transmitting a force through ", 600,190)

  stroke("black")
  strokeWeight(1)
  fill("black")
  textFont("Comis Sans MS")
  textSize(18)
  text("the stationary spheres that pushes the last sphere upward.", 600,220)

  stroke("black")
  strokeWeight(1)
  fill("black")
  textFont("Dancing Script")
  textSize(20)
  text("Press 'up' to move the birds",750,250)

}

function keyPressed(){
	if (keyCode === UP_ARROW){
      Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-20,y:-10});
	}
}