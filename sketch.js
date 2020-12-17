var m;
var bgImage,playerimages

function preload(){
  bgImage=loadImage("Images/level1.png");
  playerimages=loadImage("Images/player.png");
}
function setup() {
  createCanvas(displayWidth-2,displayHeight-2);
  

   main =createSprite(70,300,30,30);
   main.addImage("player",playerimages)
  main.scale=0.1
   
}

function draw() {
  background(bgImage); 

if (keyIsDown(LEFT_ARROW)){
  main.velocityX=-5
main.velocityY=0;
}
if (keyIsDown(RIGHT_ARROW)){
  main.velocityX=5
main.velocityY=0;
}
if (keyIsDown(UP_ARROW)){
  main.velocityX=0
main.velocityY=-5;

}
main.velocityY=main.velocityY-0.5;




  drawSprites();
}
