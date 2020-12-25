const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine,world

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var options={
    isStatic:true
  }
  object=Bodies.rectangle(200,100,50,50,options);
  World.add(world,object);

  //console.log(object.type)
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  rectMode(CENTER)
  rect(object.position.x,object.position.y,50,50) 
}