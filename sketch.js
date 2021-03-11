const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var b1, b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12;
var ball1;
var rope1;


function preload() {
    
}

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(1500,790,3000,20);

    b1 = new box(400,200,70,70);
    b2 = new box(475,200,70,70);
    b3 = new box(550,200,70,70);
    b4 = new box(625,200,70,70);

    b5 = new box(400,150,70,70);
    b6 = new box(475,150,70,70);
    b7 = new box(550,150,70,70);
    b8 = new box(625,150,70,70);

    b9 = new box(400,100,70,70);
    b10 = new box(475,100,70,70);
    b11= new box(550,100,70,70);
    b12= new box(625,100,70,70);

    b13 = new box(400,50,70,70);
    b14 = new box(475,50,70,70);
    b15= new box(550,50,70,70);
    b16= new box(625,50,70,70);

    ball1= new ball(200,300,30);

    rope1= new rope(ball1.body,{x:200,y:300})
    
}

function draw(){
    
        background("white");
    
       
        
    
    Engine.update(engine);
    b1.display();
    b2.display();
    b3.display();
    b4.display();

    b5.display();
    b6.display();
    b7.display();
    b8.display();

    b9.display();
    b10.display();
    b11.display();
    b12.display();

    b13.display();
    b14.display();
    b15.display();
    b16.display();
    ball1.display();

    ground.display();
    
    rope1.display();


}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}

function mouseReleased (){
    rope1.fly();
}