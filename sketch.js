let stars = [];
let speed = 0;
let systemsOnline = false;
let shieldsActive = false;
let warpDriveReady = false;
let slider;

function setup() {
  createCanvas(800, 800);
  for (let i = 0; i < 800; i++) {
    stars[i] = {
      x: random(-width, width),
      y: random(-height, height),
      z: random(width),
      pz: null
    };
    stars[i].pz = stars[i].z;
  }
  
  
  controleVelocidade();
  
  textAlign(CENTER, CENTER);
  textSize(32);
}

function draw() {
  speed = map(slider.value(), 0, width, 0, 70);
  background(0);

  translate(width / 2, height / 2);

  // Efeito das estrelas
  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];

    star.z -= speed;
    if (star.z < 1) {
      star.z = width;
      star.x = random(-width, width);
      star.y = random(-height, height);
      star.pz = star.z;
    }

    let sx = map(star.x / star.z, 0, 1, 0, width);
    let sy = map(star.y / star.z, 0, 1, 0, height);
    let r = map(star.z, 0, width, 16, 0);

    let px = map(star.x / star.pz, 0, 1, 0, width);
    let py = map(star.y / star.pz, 0, 1, 0, height);

    star.pz = star.z;

    fill(255);
    noStroke();
    ellipse(sx, sy, r, r);

    stroke(255);
    line(px, py, sx, sy);
  }

  painelControle();
}

function controleVelocidade() {
  slider = createSlider(0, 600, 0);
  slider.position(width / 2 - 70, 750);
}

function painelControle() {
  fill(40, 40, 50);
  noStroke();
  circle(0, 1200, 2000);

  fill(20, 20, 30);
  stroke(50, 100, 150);
  strokeWeight(3);
  rect(-200, 230, 400, 200, 20);

  fill(0, 20, 40);
  stroke(0, 150, 200);
  strokeWeight(2);
  rect(-180, 250, 360, 150, 10);
  
  if(speed.toFixed(2) == 52.50) {
    fill(255)
    text('Velocidade máxima', 0, 300);
  } else {
    fill(255)
    text(speed.toFixed(2), 0, 300);
  }
}
