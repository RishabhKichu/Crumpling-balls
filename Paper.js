class Paper {
  constructor(x, y, radius) {
    const options = {
      restituion: 0.3,
      friction: 1,
      density: 1.2,
    };
    this.body = Bodies.circle(x, y, radius, options);
    World.add(world, this.body);

    this.height = radius * 2;
    this.width = radius * 2;
  }

  display() {
    ellipseMode(CENTER);
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    fill(200);
    translate(pos.x, pos.y);
    rotate(angle);
    ellipse(0, 0, this.height, this.width);
    pop();
  }
}
