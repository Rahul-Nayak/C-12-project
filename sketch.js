var garden,rabbit,apple,leaves;
var gardenImg,rabbitImg,appleImg,leavesImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

//creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;

  

  spawnApples();
  spawnLeaves();
  drawSprites();
}

function spawnApples(){
  if(frameCount % 80===0){
  apple = createSprite(200,10,30,10);
  apple.scale = 0.09;
  apple.addImage(appleImg);
  apple.velocityY = 5;
  apple.x = Math.round(random(7,397));
  apple.lifetime = 79;
  }
}

 function spawnLeaves(){
  if(frameCount % 80===0){
   leaves = createSprite(200,10,30,10);
   leaves.scale = 0.07;
   leaves.addImage(leavesImg);
   leaves.velocityY = 2;
   leaves.x = Math.round(random(3,391));
   leaves.lifetime = 130;
  }





 }
  
 
