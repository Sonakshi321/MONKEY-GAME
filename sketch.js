//Declare global variables

var monkey , monkey_running;

var banana ,bananaImage, obstacle, obstacleImage;

var bananaGroup, obstacleGroup;

var score;

var invisbleGround;

var survivalTime=0;

var bg;






function preload(){
  
  //Load animations and images
  
  monkey_running =             
  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png" ,"sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  
  obstacleImage = loadImage("obstacle.png");
  
  bg = loadImage ("bg.jpg");
  
  groundImage = loadImage ("ground.jpeg");
  
}



function setup() {
  
  //create canvas
  
  createCanvas(600,600);

  
  // create monkey
  
  monkey=createSprite(80,315,20,20);
  
  monkey.addAnimation("moving",monkey_running);
  
  monkey.scale=0.1
  
  
  //create ground
  
  ground=createSprite(400,450.02,900,200);
  
  ground.x = ground.width/2;
  
  console.log(ground.x);
  
  //create scrolling ground
  
  if(ground.x===ground.x/2){
    
    ground.x=ground.width/2;
    
  }
 
  }


function draw() {
  
  //background
  
  background(bg);
  
  //if space key is pressed monkey jump 
  
  if(keyDown("space")&& monkey.y >= 100) {
    
  monkey.velocityY = monkey.velocityY-2;
  
  }
  
  //Give gravity
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  //monkey should stay on the ground
  
  monkey.collide(ground);
  
  // score and Survival Time
  
  // score
  
  stroke("white");
  
  textSize=20;
  
  fill("white");
  
  text("Score"+score,500,50);
  
  //Survival Time
  
  stroke("black");
  
  textSize=20;
  
  fill("black");
  
  survivalTime=Math.ceil(frameCount/frameRate());
  
  text("Survival Time:  "+ survivalTime,100,50);
  
  
  // Spawn bananas
  
  spawnBanana();
  
  //Spawn obstacles
  
  spawnObstacles();
  
  //Add banana group
  
  bananaGroup= new Group();
  
  //Add obstacles group
  
  obstaclesGroup= new Group();
  
  //draw sprites
  
  drawSprites();
  
}

//spawn banana function

function spawnBanana(){
  
  if(frameCount % 80 === 0){
    
    banana=createSprite(500,315,1,1);
    
    banana.y=Math.round(random(120,200));
    
    banana.addImage(bananaImage);
    
    banana.scale=0.1;
    
    banana.velocityX=-3
    
    banana.lifetime=150;
    
    bananaGroup.add(banana);
   
  }
  
}



//spawn obstacles function

function spawnObstacles(){
  
 if (frameCount % 300 === 0){
   
   var obstacle = createSprite(494,330,1,1);
   
   obstacle.velocityX = -3;
   
   obstacle.addImage(obstacleImage);
   
   obstacle.scale = 0.1;
   
   obstacle.lifetime = 150;
   
   obstaclesGroup.add(obstacle);
   
 }
  
}



