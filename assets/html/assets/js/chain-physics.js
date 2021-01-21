var MyNamePoints = [[101, 319],[123, 280],[142, 243],[160, 198],[178, 155],[194, 121],[204, 100],[211, 137],[209, 176],[207, 215],[204, 257],[207, 286],[221, 258],[241, 217],[260, 175],[282, 140],[307, 103],[296, 151],[286, 200],[277, 233],[272, 269],[272, 307],[279, 319],[301, 311],[314, 283],[329, 263],[336, 240],[348, 213],[337, 247],[330, 275],[343, 288],[364, 284],[384, 265],[398, 244],[406, 226],[399, 267],[390, 293],[380, 320],[366, 345],[357, 361],[337, 376],[324, 372],[322, 355],[336, 338],[361, 323],[378, 314],[398, 304],[421, 288],[437, 269],[456, 247],[481, 226],[501, 195],[514, 170],[524, 145],[531, 121],[532, 98],[510, 118],[492, 148],[477, 176],[466, 202],[456, 226],[449, 257],[448, 279],[457, 300],[466, 303],[486, 295],[504, 277],[522, 268],[544, 261],[560, 252],[575, 240],[586, 227],[592, 212],[586, 199],[569, 199],[549, 209],[534, 226],[522, 244],[517, 260],[515, 280],[521, 297],[535, 306],[554, 306],[576, 302],[590, 286],[605, 272],[622, 250],[636, 236],[649, 215],[657, 194],[669, 182],[695, 176],[713, 181],[727, 205],[722, 190],[704, 175],[690, 168],[675, 174],[662, 185],[657, 201],[659, 218],[664, 231],[667, 252],[667, 270],[667, 285],[659, 301],[652, 309],[634, 310],[623, 305],[613, 293],[609, 283],[610, 268],[618, 261],[628, 270],[638, 280],[648, 286],[664, 288],[677, 288],[690, 284],[702, 276],[713, 264],[718, 251]];
var springs = [];
var specialFont;
var gravity = 9;
var mass = 2.0;
var simulate = false;
//I leaned heavily on the "chain" example on the p5 website
// https://p5js.org/examples/simulate-chain.html
//I left a lot of code I used at the beginning in because it shows 
//how I achieved a bunch of other effects

  

function setup() {
    // create the canvas
    createCanvas(windowWidth, windowHeight); // used to be 800, 600
    fill(255, 126);
    
    for (var i = 0; i<MyNamePoints.length;i++){
        // Inputs: x, y, mass, gravity
        var spr = new Spring2D(windowWidth*(MyNamePoints[i][0]/800), windowHeight*(MyNamePoints[i][1]/600), mass, gravity);
        springs.push(spr);
    }
    // make the text nice and big - adjust theSize parameter
    // to make *your* name fit nicely on the nametag
    textSize(150);

    // draw a border to help you see the size
    // this isn't compulsory (remove this code if you like)
    strokeWeight(5);
    rect(0, 0, width, height);
}
var commands = "";

function draw() {
    background(0);
    fill(200);

    
    beginShape();
    fill(5,5,5,5);
    colorMode(HSB, 100);
   
    if (simulate==true){
        simulate = false;
        springs[0].update(mouseX, mouseY);
        springs[0].display(mouseX, mouseY); 
        for (var i = 1; i <springs.length;i++){
            var spr = springs[i];
            var prevSpr = springs[i-1];
            spr.update(prevSpr.x, prevSpr.y);
            spr.display(prevSpr.x, prevSpr.y);
        }
        if (simulate == false){
            springs = [];
            for (var i = 0; i<MyNamePoints.length;i++){
                // Inputs: x, y, mass, gravity
                var spr = new Spring2D(MyNamePoints[i][0], MyNamePoints[i][1], mass, gravity);
                springs.push(spr);
            }
        }
    } else {
        springs[0].display(springs[2].x,springs[2].y);
        for (var i = 1; i <springs.length;i++){
            var spr = springs[i];
            var prevSpr = springs[i-1];
            spr.display(prevSpr.x, prevSpr.y);
        }
    }
    endShape();


}
function mouseClicked() {
    simulate = true;
}

  
function Spring2D(xpos, ypos, m, g) {
  this.x = xpos;// The x- and y-coordinates
  this.y = ypos;
  this.vx = 0; // The x- and y-axis velocities
  this.vy = 0;
  this.mass = m;
  this.gravity = g;
  this.radius = 3;
  this.stiffness = 10; // was 0.2
  this.damping = 0.1; //was 0.6
  
  this.update = function(targetX, targetY) {
    var forceX = (targetX - this.x) * this.stiffness;
    var ax = forceX / this.mass;
    this.vx = this.damping * (this.vx + ax);
    this.x += this.vx;
    var forceY = (targetY - this.y) * this.stiffness;
    forceY += this.gravity;
    var ay = forceY / this.mass;
    this.vy = this.damping * (this.vy + ay);
    this.y += this.vy;
    if (this.y < 100+height){
        simulate = true;
    }
  }
  
  this.display = function(nx, ny) {
    stroke(45 + random(0, 10),100,100- ((this.y/height)**2) * 100);
    line(this.x, this.y,nx,ny)//////////////
  }
}




function keyTyped() {
    if (key === " ") {
      simulate = false;
      springs = [];
      for (var i = 0; i<MyNamePoints.length;i++){
        // Inputs: x, y, mass, gravity
        var spr = new Spring2D(windowWidth*(MyNamePoints[i][0]/800), windowHeight*(MyNamePoints[i][1]/600), mass, gravity);
        springs.push(spr);
      }
    }
}
