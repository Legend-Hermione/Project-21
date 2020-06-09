var bullet,speed,weight;
var wall,thickness;

function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50, 200, 25, 25);
  bullet.shapeColor=color(255,255,255);
  bullet.velocityX=speed;

  wall=createSprite
  (500,200,thickness,height/2);

  wall.shapeColor=color(80,80,80);
}

function draw() {
  background("black");  
  
   if(isTouching(bullet,wall)){
     bullet.velocityX=0; 
   }
   if(hasCollided(bullet,wall)){
     bullet.velocityX=0;
     var damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);

     if(damage>10){
       wall.shapeColor= color(255,0,0);
     }

     if(damage<10){
       wall.shapeColor=color(0,255,0);
     }
   }
 
  drawSprites();
}

function hasCollided(lbullet,lwall)

{

bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{

return true;

}

return false;

}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
   return true;
  }
  

else {
  return false;
}
}