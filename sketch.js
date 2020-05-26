var bg ; 
var r ; 
var road  ; 

function preload(){
 bg = loadImage("bg1.jpg");
 r = loadImage("road.png");

}


function setup() {
  createCanvas(displayWidth , 600);
  road = createSprite(displayWidth/2 , 550 , displayWidth , 200 );
  road.addImage("road" , r) ; 
  
 
}

function draw() {
  background(bg);  
  drawSprites();
}