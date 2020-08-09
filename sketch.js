
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var boy;
var tree;
var mangoArray = [];

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, height-50, width, 20);
	tree = new Tree(1200, 390, 400, 550);
	boy = new Boy(200, 575, 100, 250);
	stone = new Stone(220, 575, 50, 50);

	for(var i = 0; i < 10; i++){
		mangoArray.push(new Mango(random(1100, 1330), random(200, 360), 70, 40));
	}
}


function draw() {
	background(200);
	Engine.update(engine);

	rectMode(CENTER);
	
	boy.display();
	tree.display();
	ground.display();

	mangoArray.forEach((item, index) => item.display());
	stone.display();

  	drawSprites();
}



