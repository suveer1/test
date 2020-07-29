const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ground;
var d1,d2,d3,d4,d5,d6;
var particles =[];
var plinkos=[];
var divisions=[];
var divisionheight = 300;
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240,790,width,20)


}

function draw() {
  background(0); 
  Engine.update(engine); 
  ground.display();

for(var s = 0; s <= width; s+80){
  divisions.push(new Division(s,height-divisionheight/2,10,divisionheight));
}
/*for(var k = 0; k <= width ; k+50){
  plinkos.push(new Plinkos(k,75));
}
for(var j = 0; j <= width ; j+50){
  plinkos.push(new Plinkos(k,25))
}*/
}