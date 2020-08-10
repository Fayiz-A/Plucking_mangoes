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
var mango;

var timePressed = 0;
var timeStretched = 0;
var timeHit = 0;

var bg_img, stretchSound, hitSound;

function preload(){
	bg_img = loadImage("bg.png");

	stretchSound  = loadSound("Stretch.mp3");
	hitSound = loadSound("drop_2.mp3");
}

function setup() {
	createCanvas(1500, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, height-50, width, 20);
	tree = new Tree(1200, 390, 400, 550);
	boy = new Boy(290, 575, 100, 250);
	stone = new Stone(240, 550, 50, 50);

	for(var i = 0; i < 10; i++){
		mangoArray.push(new Mango(random(1100, 1330), random(200, 360), 70, 40));
	}

	launcher = new Launcher(stone.body, {x: 260, y: 510}, 0.1);
}


function draw() {
	image(bg_img, width/2, height/2, width, height);
	Engine.update(engine);

	displayText("Press space_bar to get another stone", "Green", 500, 100);
	rectMode(CENTER);

	boy.display();
	tree.display();
	ground.display();

	mangoArray.forEach((item, index) => item.display());
	stone.display();
	launcher.display();

	for(var i=0; i < mangoArray.length; i++){
		detectCollision(stone, mangoArray[i]);
	}

	if(timePressed < 1){
		if(keyIsDown(32)){
			Body.setPosition(stone.body, {x: 240, y: 550});
			launcher.attach(stone.body);
			timePressed++;
		}
	}
}

function mouseDragged() {
	if(timeStretched < 1) {
		stretchSound.play();
		timeStretched++;
	}
	Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
	launcher.fly();
	stretchSound.stop();

	timePressed = 0;
	timeStretched = 0;
	timeHit = 0;
}

function detectCollision(lstone,lmango){
	mangoPosition=lmango.body.position
	stonePosition=lstone.body.position

	if(mangoPosition.x - stonePosition.x <= 50 + 40 
		&& stonePosition.x - mangoPosition.x <= 50 + 40
		&& mangoPosition.y - stonePosition.y <= 50 + 40
		&& stonePosition.y - mangoPosition.y <= 50 + 40){

		Matter.Body.setStatic(lmango.body,false);
		if(timeHit < 1){
			hitSound.play();
			timeHit++;
		}
	}	
}
