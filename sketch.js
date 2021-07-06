const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof, bob1, bob2, bob3, bob4, bob5;
var rope;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = createSprite(420,150,340,20);
	bob1 = createSprite(290,400,50,50);
	bob2 = createSprite(350,400,50,50);
	bob3 = createSprite(410,400,50,50);
	bob4 = createSprite(470,400,50,50);
	bob5 = createSprite(530,400,50,50);
	rope = new Rope(290,400,10,150);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Rope.display();
  drawSprites();
 
}



