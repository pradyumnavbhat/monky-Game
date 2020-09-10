var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var PLAY = 1;
var END = 0;
var score = 0;

function preload() {  
 monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png"  ,"sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png"  ,"sprite_7.png", "sprite_8.png")
  
 bananaImage = loadImage("banana.png");
 obstaceImage = loadImage("obstacle.png");
}



function setup() {
  createCanvas(600, 400);
  ground = createSprite(3,390,2000,10);
  ground.velocityX = -2;
  ground.shapecolor = "green";
  
  monkey = createSprite(40,365,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
}


function draw() {  
  background("lightblue");
  
  text("Score: "+ score, 400,50);
  
   if(keyDown("space")) {
        monkey.velocityY = -10;
    }
    
  if(ground.x <1){
     ground.x = ground.width/4 
   }
  
    //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
 drawSprites();
}






