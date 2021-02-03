
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Bear, Tree, Car

var score=0

var BearIMG, TreeIMG, CarIMG

function preload()
{
BearIMG=loadImage("bear.png")	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  
 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	createSprite(400,400,90,90)
	Bear.addImage("Bear", BearIMG)
	Bear.scale=1

	createSprite(600,600,90,90)
	car.addImage("Car", CarIMG)
	
	createSprite(800,400,90,90)
	Tree.addImage("Tree, TreeIMG")
	Tree.scale=1

	createSprite(200,400,90,90)
	Tree1.addImage("Tree1, TreeIMG")
	Tree1.scale=1

	createSprite(1000,400,90,90)
	Tree2.addImage("Tree2, TreeIMG")
	Tree2.scale=1

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(keyDown(LEFT_ARROW)){
    Bear.velocityX=-2;
  }
  if(keyDown(RIGHT_ARROW)){
    Bear.velocityX=2;
  }
  if(keyDown(UP_ARROW)){
    Bear.velocityY=-4;
  }
 // if(keyDown(DOWN_ARROW)){
    Bear.velocityY=Bear.velocityY+0.5;
 // }
  drawSprites();
 
}



