function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    // any additional setup code goes here
}
let scaleUp = 80;
let modulus = 8;
let offset = 0;
let s = 0;
let numPoints = 42;
let phi = (Math.sqrt(5)+1)/2;
let offset2 = 0;
function draw() {
  s = mouseY/200;
  scale(2.0)
  background(250);
  for (let i = 0; i < numPoints; i++) {
    let p = makeXYZ(i);
    decideColor(i, offset);
    drawSphere(p.x,p.y,p.z);
  }
  
  for (let i = 0; i < numPoints; i++) {
    if ((i+offset) % modulus == 0) {
      
      let sp = makeXYZ(i);
      let newi = i - 8;
      if (i < modulus) {
        let newi = 34 + ((i+6)%8);
      }
      let dp = makeXYZ(newi);
      let x = s*sp.x + (1-s)*dp.x;
      let y = s*sp.y + (1-s)*dp.y;
      let z = s*sp.z + (1-s)*dp.z;
      fill(255,0,0,255);
      drawSphere(x,y,z);  
      /*if (i < modulus) {
          console.log("yo");
          let newi = i - (numPoints%modulus);
          let p = makeXYZ(newi);
          fill(255,0,0,255);
          drawSphere(p.x,p.y,p.z);
        }*/
    }
  }
}

function decideColor(i,offset) {
  
  if ((i+offset) % modulus == 0) {
    if (i < modulus){
        fill(255, 0, 0,255);
    }
    if (i >= modulus && i < 2*modulus ){
        fill(0, 0, 250,255);
    }
    if (i >= 2*modulus && i < 3*modulus){
        fill(0, 250, 0,255);
    }
    if (i >= 3*modulus && i < 4*modulus) {
        fill(250, 250, 0,255);
    }
    if (i >= 4*modulus && i < 5*modulus) {
        fill(0, 250, 250,255);
    }
    if (i >= 5*modulus) {
        fill(0, 0, 0,255);
    }
  } else {
    fill(250, 255, 255,125);
  }
  stroke(0.0,0.0,0.0,255);
}

function drawSphere(x,y,z){
  push();
  translate(x,y,z);
  sphere(8, 6, 4);
  pop();
}

function makeAzimuth(i){
  let phi = (Math.sqrt(5)+1)/2;
  return 2*Math.PI*phi*i;
}
function makeX(t,azimuth){
  return scaleUp*t*Math.cos(azimuth);
}
function makeY(t,azimuth){
  return scaleUp*t*Math.sin(azimuth);;
}
function makeXYZ(i){
  let t = Math.sqrt(i / (numPoints - 1));
  //let inclination = Math.acos(1 - 2*t);
  let azimuth = makeAzimuth(i);
  let x = makeX(t, azimuth);
  let y = makeY(t, azimuth);
  let z = 0.0;
  return {x: x, y: y, z: z,};
}
function keyPressed() {
  offset = offset + 5;
}