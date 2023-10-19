// var dspX = 0;
// var dspY = 10000;
var inc = 0.01;
var start = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  beginShape();
  var dspX = start;
  for (var x = 0; x < windowWidth; x++) {
    stroke(255);
    var y = noise(dspX) * height;
    vertex(x, y);

    dspX += inc;
  }
  endShape();
  start += inc;

  // nooLoop();
}
  //   var x = map(noise(dspX), 0, 1, 0, windowWidth);
  //   var y = map(noise(dspY), 0, 1, 0, windowHeight);
  //   var coli = color(50, random(53, 160), random(151, 250));

  //   dspX += 0.01;
  //   dspY += 0.01;

  //   ellipse(x, y, 24, 24);
  //   fill(coli)
  // }

