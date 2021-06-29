
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paper;	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper=new Paper(300,300)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  keyPressed()
 

  groundObject.display();
  dustbinObj.display();
  paper.display();

}

function keyPressed(){
	if(keyCode===UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:3,y:-7})
	}

	if(paper.body.position.x>1100){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0,y:20})
				background(random(0,255),random(0,255),random(0,255))
		textSize(100)

fill('green')
		text('winner',width/2-100,height/2)

	}

	
}
