var score=+5
var gameState = PLAY;
var PLAY = 1;



function preload(){
  mask=loadImage("images/boy mask.png")
  banna=loadImage("images/banna.png")
  corona=loadImage("images/corona.png")
  orange=loadImage("images/orange.png")
  watermelon=loadImage("images/watermelon.png")
}
function setup() {
  createCanvas(800,400);
  boy=createSprite(400, 340, 20, 20);
boy.addImage(mask)
boy.scale=0.5


}
function fruites(){
  if(frameCount%100===0){
    fruite=createSprite(50,0,10,10)
    fruite.velocityY=+5
    fruite.scale=0.4
    fruite.x=random(0,800)
    var rand=Math.round(random(1,4))
    switch(rand){
      case 1:fruite.addImage(banna)
      break;
      case 2:fruite.addImage(corona)
      break;
      case 3:fruite.addImage(orange)
      break;
      case 4:fruite.addImage(watermelon)
      break;
    }
  }
  
}

function draw() {
  background("black");
    
  
  //move the boy with useing left button and right arrow button
  if (keyIsDown(RIGHT_ARROW) ) {
    boy.x += 10
    
}
if (keyIsDown(LEFT_ARROW) ) {
    boy.x -= 10
}
 
  
  fruites()
  
  drawSprites();

  //text("healthbars :"+healthscore,+15,50)
  text("Score: "+ score, +15,50);

  

  if(gameState==PLAY){
    score = score + Math.round(getFrameRate()/60); 
  }  
}
