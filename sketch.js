var monkey , monkey_running;
var banana ,bananaImage,bananaGroup, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime=0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,360);

  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velcityX=-4;
  ground.x=ground.width/2;
  console.log(monkey.y);
  
}


function draw() {
background(225);
  
  stroke("white");
  textSize(20);
  fill("white");
  
  stroke("black");
  textSize("20");
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survivalTime: "+survivalTime,100,50);
  
  if(ground.x>0){
      ground.x=ground.width/2;
  }
  
  
  if(keyDown("space")){
    monkey.velocityY=-10;
    
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  food();
  Obstacles();
  drawSprites();
}

function food(){
  if(frameCount%80===0){
    var banana=createSprite(600,200,200,100);
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX=-4;
    banana.scale=0.1;
    banana.setLifetime=50;

  }
}

function Obstacles(){
  if(frameCount%300===0){
    var obstacle=createSprite(600,325,200,200);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-4;
    obstacle.scale=0.1;
    obstacle.setLifetime=50;
    
  }
}


