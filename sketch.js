const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
var divisions=[];
var plinkos=[]
var particles=[];
var divisionHeight=300;

function setup() {
  createCanvas(800,600);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(400,590,800,20);


for (var i = 0; i<800; i = i + 80) {

  divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
}


for (var x = 75; x <=width; x=x+50) 
{

   plinkos.push(new Plinko(x,75));
}

for (var x = 50; x <=width-10; x=x+50) 
{

   plinkos.push(new Plinko(x,175));
}

 for (var x = 75; x <=width; x=x+50) 
{

   plinkos.push(new Plinko(x,275));
}

 /*for (var x = 50; x <=width-10; x=x+50) 
{

   plinkos.push(new Plinko(x,375));
}*/
  
}

function draw() {
  background("skyblue");  
  Engine.update(engine);

  ground.display();
  for (var i = 0; i < divisions.length; i++) {
     
    divisions[i].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }


  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-300, width/2+300), 10,10));
    
  }

  for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }
}