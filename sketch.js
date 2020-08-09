
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var boy;
var tree;
var mangoArray = [];

var launcher;

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, height-50, width, 20);
	tree = new Tree(1200, 390, 400, 550);
	boy = new Boy(200, 575, 100, 250);
	stone = new Stone(240, 595, 50, 50);

	for(var i = 0; i < 10; i++){
		mangoArray.push(new Mango(random(1100, 1330), random(200, 360), 70, 40));
	}

	launcher = new Launcher(stone.body, {x: 240, y: 575}, 0.1);
	console.log(stone);
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
	launcher.display();

}

function mouseDragged() {
	Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
	launcher.fly();
}


