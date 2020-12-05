var wall;
var bullet, speed, weight, thickness;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(400, 200, 50, 50);
  wall = createSprite(1200,200,thickness,height/2);
  speed=random(55.90);
  weight=random(400,1500);
  thickness = random(22,83)
  bullet.velocityX = speed;

  wall.shapeColor = "lightpink"
  bullet.shapeColor = "white"
}

function draw() {
  background("lightblue");  
  if(wall.x- bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed/22500;

    if(deformation>10){
      bullet.shapeColor("red");
    }
    
    }
    if(deformation<100){
      bullet.shapeColor=("green");
    }

    drawSprites();
  }
  
