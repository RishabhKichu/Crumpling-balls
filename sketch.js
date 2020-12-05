var Ground, paper, w1, w2, w3;
const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var world, body;

function setup() {
  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  Ground = new Box1(width / 2, height - 10, width + 100, 20);
  paper = new Paper(100, 200, 25);
  w1 = new Dustbin(width / 2 + 220, 540, 20, 150);
  w2 = new Dustbin(width / 2 + 380, 540, 20, 150);
  w3 = new Dustbin(width / 2 + 300, 570, 150, 20);
  Engine.run(engine);
}

function draw() {
  background(0);

  Engine.update(engine);
  paper.display();

  w3.display();
  w1.display();
  w2.display();

  Ground.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 100,
      y: -170,
    });
    console.log("Hallo");
  }
}
