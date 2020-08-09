
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, height-50, width, 20)
}


function draw() {
	Engine.update(engine);

	background(0);
  	rectMode(CENTER);
	ground.display();
  	drawSprites();
}



