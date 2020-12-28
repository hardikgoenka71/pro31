const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var divisions=[];
var divisionheight=300;
var xpos
function setup() {
  createCanvas(480,600);
  engine = Engine.create();
    world = engine.world;
    
    ground1=new Ground(240,594,500,10)
   
    for(var k; k<= width;k=k+80) {
      divisions.add(new division(k,height-divisionheight/2,10,divisionheight))
    }
    
  }

function draw() {
  
  background(0);  
  Engine.update(engine);
  for(k=0;k<=divisions.length;k++){
    divisions[k].display();
  }
  ground1.display();
  
}