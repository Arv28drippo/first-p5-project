function preload(){
    
}

function setup(){
  canvas = createCanvas(500, 400);
  canvas.position(70, 200);
  video = createCapture(VIDEO);
  video.hide(); 
}

function draw(){
  image(video, 0, 0, 640, 480);
  fill(191, 34, 199);
  rect(0, -20, 700, 50);
  rect(0, 370, 700, 50);
  rect(-20, 30, 50, 2000);
  rect(470, 30, 50, 2000);
  fill(34, 67, 199);
  circle(20, 10, 70);
  circle(480, 10, 70);
  circle(20, 390, 70);
  circle(480, 390, 70);
}

function take_snapshot(){
    save('frame.png');
}