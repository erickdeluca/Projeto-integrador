let stars = [];
let speed = 0;

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
  slider = createSlider(0, 400, 0);
  slider.position(width / 2 - 65, 660);

}

function draw() {
  speed = map(slider.value(), 0, width, 0, 70);
  background(0);

  translate(width / 2, height / 2);

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
//desenhando o painel de controle e estrutura da nave

  fill(128, 128, 128);
  noStroke();
  circle(0, 1200, 2000);

  fill(29, 143, 54);
  stroke(0);
  rect(-100, 230, 200, 120);

  fill(0);
  noStroke();
  textSize(20);
  text("Velocidade: ",-48, 255);
}
