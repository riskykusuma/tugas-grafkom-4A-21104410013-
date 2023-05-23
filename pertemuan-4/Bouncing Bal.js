// Variabel ukuran area bola memantul
let x = 320;
let y = 180;
// Atur kecepatan
let xspeed = 20;
let yspeed = 2;
// Ukuran bola
let r = 30;
function setup() {
  createCanvas(640, 360);
}
function draw() {
  background(0);
  ellipse(x, y, r*2, r*2);
  x += xspeed;
  y += yspeed;

  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }

  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }
}