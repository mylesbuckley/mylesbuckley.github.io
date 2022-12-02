window.addEventListener("keydown", function(e) {
  // space and arrow keys
  if([40, 38].indexOf(e.keyCode) > -1) { //37 and 39 excluded
      e.preventDefault();
  }
}, false);

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    // any additional setup code goes here
}
let numShips = 42; // USED TO BE 42
let radius = 130;
let increment = 0;
let increment2 = 0;
let increment3 = 0;
let phi = (Math.sqrt(5)+1)/2;
function draw() {
  background(250);
  rotateY(mouseX/200);
  rotateX(mouseY/200);
  for (let Vehicle_Number = 0; Vehicle_Number < numShips; Vehicle_Number++){
    let effective_VN = (Vehicle_Number + increment3) % numShips;
    t = effective_VN / numShips;
    inclination = Math.acos(1.0 - 2.0*t);
    azimuth = Math.PI * 2.0 * phi * effective_VN;
    let myX = radius * Math.sin(inclination) * Math.cos(azimuth);
    let myY = radius * Math.sin(inclination) * Math.sin(azimuth);
    let myZ = radius * Math.cos(inclination);
    push();
    translate(myX,myY,myZ);
    if (Vehicle_Number < 8){
      fill(0);
      if ((Vehicle_Number + increment2) % 8 == 0){
        fill(0,0,255);
      }
    }
    if ((Vehicle_Number + increment) % 8 == 0) {
      fill(255,0,0);
      if (Vehicle_Number < 8){
        fill(0,255,0);
      }
    }

    sphere(8, 6, 4);
    pop();
    fill(255);
  }
  // push();
  // translate(0,0,0);
  // sphere(8, 6, 4);
  // pop();
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    increment = (increment + 5)%8;
  } else if (keyCode === RIGHT_ARROW) {
    increment2 = (increment2 + 5)%8;
  } else if (keyCode === UP_ARROW) {
    increment3 = (increment3 + 8);
  } else if (keyCode === DOWN_ARROW) {
    increment3 = increment3 - 8;
  }
}
