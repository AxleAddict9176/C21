var movingRect, fixedRect;
var go1, go2, go3, go4;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200, 200, 50, 50);
  fixedRect = createSprite(600, 200, 50, 50);
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "orange";
  
  go1 = createSprite(100, 100, 20, 20);
  go2 = createSprite(300, 100, 20, 20);
  go3 = createSprite(500, 100, 20, 20);
  go4 = createSprite(700, 100, 20, 20);
  go1.shapeColor = "brown";
  go2.shapeColor = "purple";
  go3.shapeColor = "blue";
  go4.shapeColor = "yellow";

  go2.velocityX = 5;
  go3.velocityX = -5;
}

function draw() {
  background("grey");
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  // isTouching Function Logic
  if(isTouching(go1, movingRect)){
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  } else{
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "orange";
  }

  //BounceOff Function Logic
  bounceOff(go2, go3);
  drawSprites();
}

function isTouching(object1, object2){
  if (object2.x - object1.x <= object2.width/2 + object1.width/2 &&
    object1.x - object2.x <= object2.width/2 + object1.width/2 &&
    object2.y - object1.y <= object2.height/2 + object1.height/2 &&
    object1.y - object2.y <= object2.height/2 + object1.height/2) {
    return true;
  }
  else {
    return false;
  }
}

function bounceOff(object1, object2){
  if (object2.x - object1.x <= object2.width/2 + object1.width/2 && 
    object1.x -object2.x <= object2.width/2 + object1.width/2)
    {
      object2.velocity= object2.velocityX * (-1);
      object1.velocityX =object1.velocityX * (-1);
    }
  if (object2.y - object1.y <= object2.height/2 + object1.height/2 && 
    object1.y - object2.y <= object2.height/2 + object1.height/2) {
    object2.velocityY = object2.velocityY * (-1);
    object1.velocityY = object1.velowcityY * (-1);
  }
}