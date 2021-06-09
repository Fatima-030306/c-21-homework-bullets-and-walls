var thickness,wall;
var speed,weight,bullet;
function setup(){
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  bullet = createSprite(200,200,50,50);
  wall = createSprite(800,200,thickness,height/2);
  bullet.velocityX=speed;
  
  wall.shapeColor="grey";
  bullet.shapeColor="grey"
}
function draw(){
  background("yellow");
  

if(hasCollided(bullet,wall))
 {
  bullet.velocityX=0;
  var damage =0.5 * weight * speed * speed/(thickness* thickness*thickness) ;

  if(damage>10)
  {
    wall.shapeColor="green";
  }
  if(damage<10)
  {
    wall.shapeColor="red"
  }
 }
  drawsprites ();
 }
 function hasCollided(lbullet, lwall)
 {
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
 }
