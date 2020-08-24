var bullet,wall;
var speed,weight,thickness;



function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 50, 50);

  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);

  bullet = createSprite(50,200,50,50);
  wall = createSprite(1300,200,thickness,height/2);
  
  

  //console.log(car);

  bullet.velocityX = speed;


  
}

function draw() {
  background("black");

  if(hasCollided(bullet,wall)){

    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){

      wall.shapeColor = color("green");


    }

    if(damage<10){

      wall.shapeColor = color("red");


    }




  }
  

  drawSprites();
}



function hasCollided(Lbullet,Lwall){

  bulletRightEdge = Lbullet.x + Lbullet.width;
  wallLeftEdge = Lwall.x;

  if(bulletRightEdge>=wallLeftEdge){


    return true;



  }

  return false;








}