const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var ground1
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
     ground1=Bodies.rectangle(200,300,200,10)
    World.add(world,ground1)

var options={
    isStatic:true
}
    ground = Bodies.rectangle(200,200,200,20,options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.5
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER)
    rect(ground1.position.x,ground1.position.y,200,10)
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
  

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}