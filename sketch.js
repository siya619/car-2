var car1 , car2 , car3 , wall;
var speed ,  weight;

function setup() {
  createCanvas(800,400);
   
  speed=random(55,90);
  weight=random(400,1500);

  car1=createSprite(50, 200, 50, 50);
  car1=shapeColor=color("red");

  car2=createSprite(50, 200, 50, 50);
  car2.shapeColor=color("orange");

  car3=createSprite(50, 200, 50, 50);
  car3.shapeColor=color("yellow") ;

  wall=createSprite(1500, 200, 60, height/2);
  wall.shapeColor=color(80,80,80); 
  
car1.velocity = speed;
car2.velocity = speed;
car3.velocity = speed;

}

function draw() {
  background(255,255,255); 
  
  if(wall.x-car1.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var defor,ation=0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }

    if(deformation<100)
    {
      car.shapeColor=color(0,255,0)
    }

    if(deformation<150)
    {
      car.shapeColor=color(230,230,0)
    }
  }

  drawSprites();
}