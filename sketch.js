let speed;
class Star {
    constructor() {
        this.x = random(-width, width);
        this.y = random(-height, height);
        this.z =  random(width);
    }

    update(){
        this.z -= speed;
        if(this.z < 1){
            this.z = width;
            this.x = random(-width, width);
            this.y = random(-height, height);
        }
    }
    
    show() {
        let raio = 2;
        fill(255); 
        noStroke();

        let sx = map(this.x / this.z, 0, 1, 0, width);
        let sy = map(this.y / this.z, 0, 1, 0, width);

        let r = map(this.z, 0, width, 16, 0 );
        circle(sx, sy, r);
    }
}

let stars =  [];

function setup() {
    createCanvas(800, 800);
    for(let i = 0; i < 800; i++){
      stars[i] = new Star();
    }
}

function draw() {
    speed = map(mouseX, 0, width, 0, 20);
    background(0);
    translate(width/2, height/2);
    for(let i = 0; i < stars.length; i++){
    stars[i].update();
    stars[i].show();
  }
  
}

