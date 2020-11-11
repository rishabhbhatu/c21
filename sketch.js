var fixedRect, movingRect;
var gameObject1;

function setup() {

  
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect.velocityY=5;
  movingRect.velocityY=-5;
  gameObject1 = createSprite(200,100,80,30);
  gameObject1.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  
  if(isTouching(movingRect,gameObject1)){

    movingRect.shapeColor = "blue";
    gameObject1.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }

  bounceOff(movingRect,fixedRect);
  drawSprites();
}

