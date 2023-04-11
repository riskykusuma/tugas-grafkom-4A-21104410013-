function setup() {
  // membuat kanvas dengan ukuran 640 x 480
  createCanvas(640, 480); 
}

function draw() {
  // memberikan warna background terserah, dalam contoh ini 		warna ungu
  background(128, 0, 128);
  // membuat lingkaran dengan diameter 200 piksel
  ellipse(width/2, height/2, 200, 200); 
}