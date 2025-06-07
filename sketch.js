class Star {
    constructor() {
        this.x = random(0, width);
        this.y = random(0, height);
        this.z = random(0, width);
    }
    
    
    update(){
        
    }
    
    show() {
        let raio = 2;
        fill(255); 
        noStroke();
        circle(this.x, this.y, raio * 2);
    }
}

let stars =  [];

function setup() {
    createCanvas(400, 400);
    for(let i = 0; i < 100; i++){
      stars[i] = new Star();
    }
}

function draw() {
    background(0);
    for(let i = 0; i < stars.length; i++){
    stars[i].update();
    stars[i].show();
  }
  
}

