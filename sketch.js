
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var boy;
var tree;

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, height-50, width, 20);
	boy = new Boy(200, 575, 100, 250);
	tree = new Tree(1200, 390, 400, 550);
}


function draw() {
	background(200);
	Engine.update(engine);

	rectMode(CENTER);
	
	boy.display();
	tree.display();
	ground.display();

  	drawSprites();
}



