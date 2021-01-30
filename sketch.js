const Engine =Matter.Engine;
const World =Matter.World
const Bodies=Matter.Bodies;

var engine, world;
var gr, box;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    gr=new ground();
    box= new Box(240,20,40,40);
    box1= new Box(200,200,50,50);
    console.log(ground);
    console.log(ground.position.x);
    console.log(ground.position.y);
}

function draw(){
    background(0);
    Engine.update(engine);
    gr.display();
    box.display();
    box1.display();
}