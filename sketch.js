var ball,engine,world,ground
const Engine=Matter.Engine

const World= Matter.World
const Bodies=Matter.Bodies
const Body =Matter.Body 

function setup(){
  createCanvas(400,400)
  engine=Engine.create()
world=engine.world
var options={
  restitution:1
 //frictionAir:0.1
}
ball=Bodies.circle(100,10,20,options)
World.add(world,ball)
var options={
  isStatic:true
}
ground=Bodies.rectangle(99,390,900,20,options)
World.add(world,ground)
}
function draw(){
  background("black")
  Engine.update(engine)
ellipse(ball.position.x,ball.position.y,20)
rect(ground.position.x,ground.position.y,900,20)
}
