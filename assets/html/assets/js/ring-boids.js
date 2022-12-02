function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    // any additional setup code goes here
}
let numShips = 42;
let radius = 150;
let increment = 0;
function draw() {
    // your "draw loop" code goes here
    translate(mouseX-windowWidth/2-radius,mouseY-windowHeight/2);
    background(30);
    increment = frameCount/10;
    for (let i = 0; i < numShips; i++){
      if (i==4){
        fill(255,0,0,255);
      }
      let truei = ((i+increment)%numShips);
      let turnFraction = truei / (numShips);
      let angle = Math.PI*2.0*turnFraction;
      push();
      rotateZ(angle);
      translate(radius,0.0);
      ellipse(0,0,20,20);
      pop();
      fill(255);
    }
    
    
    push();
    fill(255,0,0,255);
    translate(radius,0.0);
    ellipse(0,0,10,10);
    fill(255);
    pop();
    
    ellipse(0,0,20,20);
}
