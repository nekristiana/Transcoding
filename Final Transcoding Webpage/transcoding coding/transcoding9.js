
let img;
//let img2;
let smallPoint, largePoint;

function preload() {
  img = loadImage('Seidel.jpg');

//  img2 = loadImage('../image_1.JPG');
//    capture = createCapture(VIDEO);
//    capture.size(500, 560);
//    capture.hide();

}

function setup() {
  createCanvas(550, 770);
  smallPoint = 2;
  largePoint = 3;
//  imageMode(CENTER);
  noStroke();
//  background(0);
  img.loadPixels();
//  img2.loadPixels();
}

function draw() {
  let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
  let x = floor(random(img.width));
  let y = floor(random(img.height));
  let pix = img.get(x, y);
  fill(pix, 128);
  rect(x, y, pointillize, pointillize);

}


///////////////////////////////////////////////////////////////



//let capture;
//let smallPoint, largePoint;
//
//function preload() {
////  img = loadImage('../Seidel.jpg');
//    capture = createCapture(VIDEO);
//    capture.size(500, 560);
////    capture.hide();
//}
//
//function setup() {
//  createCanvas(620, 800);
//  smallPoint = 80;
//  largePoint = 150;
//  imageMode(CENTER);
//  noStroke();
//  background(145);
//  capture.loadPixels();
////  img.loadPixels();
//}
//
//function draw() {
//  let pointillize = map(mouseX, 0, width, smallPoint, largePoint);
//  let x = floor(random(capture.width));
//  let y = floor(random(capture.height));
//  let pix = capture.get(x, y);
//  fill(pix, 128);
//  rect(x, y, pointillize, pointillize);
//  
//}
