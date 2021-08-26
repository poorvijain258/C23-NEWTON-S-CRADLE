const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
  bobs1 = new Bobs1(200,50);
  bobs2 = new Bobs2(250,500);
  bobs3 = new Bobs3(300,50);
  bobs4 = new Bobs4(350,50);
  bobs5 = new Bobs5(400,50);
  
function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			


	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

    rope1 = new rope1(bobs1,roof,-80,0);
    World.add(world,this.rope1);

    rope2 = new rope1(bobs2,roof,+80,0);
    World.add(world,this.rope2);

    rope3 = new rope1(bobs3,roof,-20,0);
    World.add(world,this.rope3);

    rope4 = new rope1(bobs4,roof,-180,0);
    World.add(world,this.rope4);

    rope5 = new rope1(bobs5,roof,-100,0);
    World.add(world,this.rope5);

	Engine.run(engine);
	
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  //create ellipse shape for multiple bobs here
bobs1.show();
bobs2.show();
bobs3.show();
bobs4.show();
bobs5.show();
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed() {
  if(keyCode==="UP_ARROW"){
  Matter.Body.applyForce(bobs1.body,bobs1.body.position,20);
}
}