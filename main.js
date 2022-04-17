let hightA = [];

function setup() {
  let canv = createCanvas(600, 600);
  canv.center();
}

function draw() {
  background(51);
  visualize();
}

function visualize() {
  for (i = 0; i < 600; i++) {
    stroke(255, 30, 60);
    strokeWeight(1);
    line(i, 600, i, 600 - hightA[i]);
  }
}

function runner() {
  bubbleSort();
  visualize();
}
