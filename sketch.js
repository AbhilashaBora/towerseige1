const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var polygonImage;
var ball;
var slingshot;

function preload(){
    polygonImage = loadImage("polygon.png");
}


function setup(){
     var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(400,260,300,20);
    box1=new Box(330,235,30,40);
    box2=new Box(360,235,30,40);
    box3=new Box(390,235,30,40);
    box4=new Box(420,235,30,40);
    box5=new Box(450,235,30,40);
    box6=new Box(360,195,30,40);
    box7=new Box(390,195,30,40);
    box8=new Box(420,195,30,40);
    box9=new Box(390,155,30,40);
    ball=Bodies.circle(50,200,20);
    World.add (world,ball);
    slingshot=new SlingShot(this.ball,{x:100, y:200});


}
  
  function draw(){
      background("black");
      Engine.update(engine);

      ground.display();
      box1.display();
      box2.display();
      box3.display();
      box4.display();
      box5.display();
      box6.display();
      box7.display();
      box8.display();
      box9.display();
      imageMode(CENTER);
      image(polygonImage, ball.position.x, ball.position.y, 40, 40);
      slingshot.display();
  }

    function mouseDragged(){
        Matter.Body.setPosition(this.ball, {x:mouseX, y:mouseY});
    }

    function mouseReleased(){
        slingshot.fly();
    }