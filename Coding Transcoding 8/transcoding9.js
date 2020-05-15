let img;
let smallPoint, largePoint;

function preload() {
  img = loadImage('../Seidel.jpg');
}

function setup() {
  createCanvas(620, 800);
  smallPoint = 200;
  largePoint = 250;
  imageMode(CENTER);
  noStroke();
  background(0);
  img.loadPixels();
}

function draw() {
  let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  let x = floor(random(img.width));
  let y = floor(random(img.height));
  let pix = img.get(x, y);
  fill(pix, 128);
  rect(x, y, pointillize, pointillize);
}