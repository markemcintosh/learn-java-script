
let mySound, amplitude;

function preload() {
  mySound = loadSound('music.mp3');
}


function setup() {
  createCanvas(displayWidth, displayHeight);
  console.log("setup");
  amplitude = new p5.Amplitude();
}

function draw() {
  background(20);
  let level = amplitude.getLevel();
  let diam = map(level, 0, 1, 10, 400)
  fill(255,0,0);
  ellipse(150,150,diam,diam);
}

function mousePressed() {
 if (mySound.isPlaying()) {
   mySound.stop()
  } else {
    mySound.play()
  }
}