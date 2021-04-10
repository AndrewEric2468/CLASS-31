class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.Trajectory = [];
    this.image1 = loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.speed > 5 && this.body.position.x >200 ){
        var pos = [this.body.position.x , this.body.position.y]
        this.Trajectory.push(pos);
    

    }
    for(var i = 0; i < this.Trajectory.length; i++){
      image(this.image1, this.Trajectory[i][0], this.Trajectory[i][1])
    }
  }
}
