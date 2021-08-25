var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png")
  boyImg = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png")
  //loadImage of the path
  //loadAnimation of the boy
 
}

function setup(){
  
  createCanvas(400,400);
path = createSprite(200,200)
path.addImage(pathImg)
path.velocityY = -2

path.scale=1.2;

boy = createSprite(100,100)
boy.addAnimation("running",boyImg)

//create a boy sprite
//add animation for the boy
  
// create left Boundary
leftBoundary=createSprite(0,0,100,800);
//set visibility as false for left boundary

//create right Boundary
rightBoundary=createSprite(410,0,100,800);
//set visibility as false for left boundary
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX  
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // collide the boy with the left and right invisible boundaries.
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
