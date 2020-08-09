const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var ground;
var boy;
var tree;
var mangoArray = [];

var launcher;
var mango;

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, height-50, width, 20);
	tree = new Tree(1200, 390, 400, 550);
	boy = new Boy(100, 575, 100, 250);
	stone = new Stone(240, 550, 50, 50);

	for(var i = 0; i < 10; i++){
		mangoArray.push(new Mango(random(1100, 1330), random(200, 360), 70, 40));
	}

	launcher = new Launcher(stone.body, {x: 260, y: 540}, 0.1);
	console.log(stone);
}


function draw() {
	background(200);
	Engine.update(engine);
	
	rectMode(CENTER);
	fill(0, 0, 0);

	boy.display();
	ground.display();
	tree.display();

	mangoArray.forEach((item, index) => item.display());
	stone.display();
	launcher.display();

	for(var i=0; i<mangoArray.length; i++){
		detectCollision(stone, mangoArray[i]);
	}

}

function mouseDragged() {
	Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
	launcher.fly();
}

function detectCollision(lstone,lmango){
	mangoPosition=lmango.body.position
	stonePosition=lstone.body.position

	if(mangoPosition.x - stonePosition.x <= 50 + 40 
		&& stonePosition.x - mangoPosition.x <= 50 + 40
		&& mangoPosition.y - stonePosition.y <= 50 + 40
		&& stonePosition.y - mangoPosition.y <= 50 + 40){

		Matter.Body.setStatic(lmango.body,false);
	}	
	//if(wall.x - car.x < wall.width/2 + car.width/2)
}
