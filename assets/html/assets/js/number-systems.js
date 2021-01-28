var abacus = [0,1,1,1,1,1];
var abacus2 = [0,0,1,1,0,1];
var targetAbacus = [0,1,1,1,1,1];
var targetAbacus2 = [0,1,1,1,1,1];
var coinPile = 0;
var coinPileDenomination = 0;
var mouseInFlux = false;
var numberBase = 2;
var speachBubbleText = "";
var transferAmmount = 0;
var baseSelectPoint = [0,0];
var tempNumberBase  = 0;
var congradulationMessageFrames = 0;
var showCongradulationMessage = false;
var congradulationMessages = [
"Good Job!",
"Nice!",
"Well done!",
"Destroyed! ;)",
"(y) ^_^ (y)",
"-_- how?",
"Like a machine!",
"11010101, good.",
"Are you cheating?",
"that was easy 🤨",
"11010101",
"🔥 Fire 🔥",
"Cool beans",
"Tips fedora",
"Sensational",
"*Pat on the back*",
"Way to go!",
"Awesome! :D",
"Beautiful",
];
var chosenMessage = "";
var coinColors = [[152,231,232], //diamond
                  [218,165,32],  //gold
                  [140,140,140], //silver
                  [30,30,60],       //iron
                  [233,217,194], //clay
                  [141,97,66]];    //wood
//the converters have a color juuusst slightly darker than the coin colors
var converters =[[151,230,231], //diamond
                  [217,164,31],  //gold
                  [139,139,139], //silver
                  [29,29,59],       //iron
                  [232,216,193], //clay
                  [140,96,65]];    //wood

function preload() {
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // your persuasive arcade game code goes here
  // but its also a good idea to write some functions
  // which deal with specific parts of your game (like drawing things)
  scale(0.5,0.5)
  background(3,124,47);
  drawStickPerson(600,460,1);
  drawStickPerson(600,30,0);
  drawStickPerson(80,700-130,0);
  speachBubble(speachBubbleText);
  drawConverters(converters);
  drawAbacus(abacus,200,200,0);
  drawAbacus(abacus2,200,400,1);
  drawCoinPile(coinPile); //MAYBE
  drawSelectNumberBase();
  drawCongratulationMessege();
  if (frameCount==10){
    setChallenge();
  } else {
    checkChallenge();
  }
}

function mouseClicked() {
  console.log(mouseX,mouseY);
  var pixVal = get(mouseX, mouseY); //get RGBA value for the pixel
  console.log(pixVal);

  var pixDen = getDenomination(pixVal); //what is this pixel part of? e.g. a 'coin' or 'coin converter'
  if (pixDen==-1) return; //not a recognised coin denomination or coin converter
  if (pixDen>=251){//trying to use a coin converter
    convertCoins(pixDen);//this only converts coins if you have exactly 10
    return;
  }
  var abacusID = getAbacusID(pixVal, pixDen);//it's of a recognsed denomination and not a coin converter, 
                                             //therefore belongs to an abacus, this gets the ID of that abacus
  var isSigCoin = isDenominationSignallingCoin(pixVal, pixDen); //a sig coin is what you use to drop coins
  if (isSigCoin){
    dropCoins(pixDen,abacusID);
    return;
  }
  //part of an abacus and not a sigCoin, therefore must be just a regular coin! Pick it up!
  var depth = coinDepth(pixVal, pixDen, abacusID);
  pickUpCoins(abacusID,depth,pixDen);
}

function mousePressed(){
  tempNumberBase=1;
  var pixVal = get(mouseX, mouseY);
  if (pixVal[0]==120){
    console.log("matched");
    baseSelectPoint = [mouseX, mouseY];
  }
}

function mouseReleased() {
  baseSelectPoint = [0, 0];
  
  if (numberBase != tempNumberBase && tempNumberBase>1){
    numberBase = tempNumberBase+0;
    setChallenge();
  }
  
}

function mouseDragged() {
  if (!(baseSelectPoint[0] == 0 || baseSelectPoint[0] == 0)){
    var dy = baseSelectPoint[1]-mouseY;
    var dist = Math.floor( Math.abs(dy) / 10 );
    console.log(dist);
    tempNumberBase = Math.max(dist,1);
  }
}

function drawCongratulationMessege(){
  if (!showCongradulationMessage) return;
  if (congradulationMessageFrames==0){
    var idx = rand(0,congradulationMessages.length-1);
    var msg = congradulationMessages[idx];
    chosenMessage = msg + "";
  }

  noStroke();
  fill(250,255-congradulationMessageFrames);
  textSize(120+congradulationMessageFrames);
  text(chosenMessage,100,700);
  congradulationMessageFrames++;
  if (congradulationMessageFrames>60){
    showCongradulationMessage=false;
    congradulationMessageFrames=0;
  }
}



function drawSelectNumberBase(){
  noStroke();
  strokeWeight(1);
  stroke(255,125);
  fill(120);
  rect(737,310,30,20);
  textSize(24);
  fill(0);
  noStroke();
  text("Select Base",780,330);
  textSize(14);
  text("(by dragging up and down)",780,350);
  if (mouseIsPressed && !(baseSelectPoint[0] == 0 || baseSelectPoint[0] == 0)){
    fill(120);
    stroke(255,125);
    for (i = 0; i < tempNumberBase;i++){
      ellipse(752,310-i*10,40,40);
    }
  }
}

function setChallenge() { //set and addition or subtraction problem 
  coinPile = 0;
  var maxMoney = Math.pow(numberBase,6)-1;
  var yourMoney = -1;
  var addOrSubtract = rand(1,2);
  if (addOrSubtract==1){//add
    yourMoney = rand(0, maxMoney-1);
    var maxAdd = maxMoney - yourMoney;
    var add    = rand(1,maxAdd-1);
    var theirMoney = add;
    var yourTargetMoney  = yourMoney + add;
    var theirTargetMoney = 0;
    speachBubbleText = "Take this much money";
    transferAmmount = add+0;
    console.log("add: "+add);
    console.log("your money: " + yourMoney + " Your target money: " + yourTargetMoney);
    console.log("their money: " + theirMoney + " Their target money: " + theirTargetMoney);
  } else {//subtract
    yourMoney = rand(1, maxMoney);
    var maxSubtract     = yourMoney+0;
    var subtract        = rand(1,maxSubtract);
    var theirMoney      = rand(0,maxMoney-subtract);
    var yourTargetMoney = yourMoney - subtract;
    var theirTargetMoney= theirMoney + subtract;
    speachBubbleText = "Give this much money";
    transferAmmount = subtract+0;
    console.log("subtract: "+subtract);
    console.log("your money: " + yourMoney + " Your target money: " + yourTargetMoney);
    console.log("their money: " + theirMoney + " Their target money: " + theirTargetMoney);
  }
  abacus       =setAbacus(theirMoney);
  abacus2      =setAbacus(yourMoney);
  targetAbacus2=setAbacus(yourTargetMoney);
  targetAbacus =setAbacus(theirTargetMoney);
}

function displayTransferAmmount(n){
  var mockAbacus = setAbacus(n);
  noStroke();
  strokeWeight(1);
  stroke(255,125);
  var spacing = 0;
  for (i=0;i<6;i++){
    var col = converters[i];
    fill(col[0],col[1],col[2]);
    for (j=0;j<mockAbacus[i];j++){
      ellipse(540+20*spacing,700+7*j-130,40,40);
    }
    if (mockAbacus[i]>0) spacing++;
  }

}

function checkChallenge() { //are the two abacusses in their objective states
  var pass = true;
  for (i=0;i<6;i++){
    if (!(abacus[i]==targetAbacus[i])){
      pass = false;
    }
    if (!(abacus2[i]==targetAbacus2[i])){
      pass = false;
    }
  }
  if (pass){
    console.log("Good job!");
    showCongradulationMessage=true;
    setChallenge();
  }
}

function setAbacus(anAbacusNum){
  var anAbacus = [0,0,0,0,0,0];
  for (i=5;i>=0;i-=1){
    var idx = 5-i;
    var coinVal = Math.pow(numberBase,i);
    if (anAbacusNum-coinVal>=0){
      var numCoins = Math.floor(anAbacusNum/coinVal);
      anAbacus[idx]=numCoins;
      anAbacusNum-=coinVal*numCoins;
    }
  }
  return anAbacus;
}

function speachBubble(message){
  noStroke();
  fill(220);
  ellipse(480,600,600,200);
  triangle(114, 724-150, 181, 755-150, 194, 722-150);
  fill(0);
  noStroke();
  textSize(32);
  text(message, 200,750-150);
  displayTransferAmmount(transferAmmount);
}

function rand(min,max){
  var ret = Math.min(min,max);
  var diff = Math.max(min-max,max-min);
  ret += Math.round(Math.random()*diff);
  return ret;
}

function drawStickPerson(faceX,faceY,ID){
  noStroke();
  fill(250);
  ellipse(faceX,faceY,80,80);
  
  strokeWeight(4);
  if (ID==0){
    stroke(0,125);
    rect(faceX-40, faceY-20, 30, 15);
    rect(faceX+40, faceY-20, -30, 15);
    line(faceX-10,faceY-12,faceX+10,faceY-12);
    stroke(0);
    line(faceX,faceY+40,faceX,faceY+150);//body
    line(faceX,faceY+50,faceX-40,faceY+90);//sholder to elbow
    line(faceX-40,faceY+90, faceX-20, faceY+90);//elbow to hand
    line(faceX,faceY+50,faceX+40,faceY+90);//sholder to elbow
    line(faceX+40,faceY+90,faceX+50,faceY+70);//elbow to hand
    line(faceX,faceY+150,faceX-40,faceY+170); //thigh
    line(faceX,faceY+150,faceX+40,faceY+170); //thigh
    line(faceX+40,faceY+170,faceX-10,faceY+165); //calf
    line(faceX-40,faceY+170,faceX+10,faceY+165); //calf
  } else if (ID==1) {
    stroke(0);
    line(faceX,faceY+40,faceX,faceY+150);//body
    line(faceX,faceY+50,faceX+40,faceY+90);//sholder to elbow
    line(faceX+40,faceY+90, faceX+20, faceY+90);//elbow to hand
    line(faceX,faceY+50,faceX-40,faceY+90);//sholder to elbow
    line(faceX-40,faceY+90,faceX-50,faceY+70);//elbow to hand
    line(faceX,faceY+150,faceX+40,faceY+130); //thigh
    line(faceX,faceY+150,faceX-40,faceY+130); //thigh
    line(faceX-40,faceY+130,faceX+10,faceY+135); //calf
    line(faceX+40,faceY+130,faceX-10,faceY+135); //calf
  }
}

function convertCoins(pixDen){
  console.log("pixDen:"+pixDen);
  var converterNum = pixDen-251;
  if (coinPile == numberBase  || (coinPile == 1 && (coinPileDenomination < 5))){
    if ((converterNum == coinPileDenomination) && (coinPile == 1)){
      coinPileDenomination++;
      coinPile = numberBase;
    } else if ((converterNum == coinPileDenomination - 1) && (coinPile == numberBase)){
      coinPileDenomination--;
      coinPile = 1;
    }
  }
  /*
  0 1<->0
  1 2<->1
  2 3<->2
  3 4<->3
  4 5<->4

  is pile 10 or 1 && den < 5?
  if   C# == den, lower den (den+1), set pile to 10 
  elif C# == den - 1, raise den, set pile to 1
  */
  
}

function drawConverters(converters) {
  //rect(80,120+100*i,40,30);
  fill(0);
  noStroke();
  textSize(32);
  text('Convert', 50, 40);
  fill(250,0,0);
  text('Button', 60, 80);
  stroke(255,125);
  strokeWeight(1);
  for (i = 0; i < 5; i++){
    fill(251+i,0,0);
    rect(80,120+100*i,40,30);
    fill(0);
    noStroke();
    textSize(32);
    text('=', 90,120+100*i);
    //low denomination (i+1) high denomination (i)
    for (j = 0; j < numberBase; j++){
      noStroke();
      strokeWeight(1);
      stroke(255,125);
      var col = converters[i+1];
      fill(col[0],col[1],col[2]);
      ellipse(65-(j%4)*15,110+100*i+j*5,40,40);
    }
    noStroke();
    strokeWeight(1);
    stroke(255,125);
    var col = converters[i];
    fill(col[0],col[1],col[2]);
    ellipse(140,110+100*i,40,40);

    //image(converters[i], 10, 120+60*i, 160, 60);
  }
}




function pickUpCoins(abacusID,depth,pixDen){
  if (coinPile > 0){//don't add the wrong coins to the pile
    if (pixDen!=coinPileDenomination) return;
  }
  if (abacusID==0){
    coinPile += depth;
    coinPileDenomination = pixDen;
    abacus[pixDen] -= depth;
    mouseInFlux = true;
  } else if (abacusID==1){
    coinPile += depth;
    coinPileDenomination = pixDen;
    abacus2[pixDen] -= depth;
    mouseInFlux = true;
  }
}

function dropCoins(pixDen,abacusID){
  if (pixDen != coinPileDenomination) return;
    if (abacusID==0){
      if (abacus[pixDen]+coinPile > numberBase -1){
        var diff = numberBase -1 - abacus[pixDen];
        coinPile -= diff;
        abacus[pixDen] = numberBase -1;
      } else {
        abacus[pixDen] += coinPile;
        coinPile = 0;
        mouseInFlux = false;
      }

    } else if (abacusID==1){
      if (abacus2[pixDen]+coinPile > numberBase -1){
        var diff = numberBase -1 - abacus2[pixDen];
        coinPile -= diff;
        abacus2[pixDen] = numberBase-1;
      } else {
        abacus2[pixDen] += coinPile;
        coinPile = 0;
        mouseInFlux = false;
      }
    }
  return;
}

function coinDepth(pixVal, pixDen, abacusID){
  
  var pixCol = coinColors[pixDen];
  if (pixVal[0]==pixCol[0]){
    var height = pixVal[1]-pixCol[1];
    if (abacusID==0){
      return abacus[pixDen] - height;
    } else if (abacusID==1) {
      return abacus2[pixDen] - height;
    } else {
      return -1;
    }
  } else {
    return -1;
  }
}

function isDenominationSignallingCoin(pixVal, pixDen){
  var pixCol = coinColors[pixDen];
  if (pixVal[0]==pixCol[0]){
    if (pixVal[1]-pixCol[1]==20) {
      return true;
    } else {
      return false;
    }
  } else {
    return -1;
  }
}

function getAbacusID(pixVal, pixDen){
  var pixCol = coinColors[pixDen];
  if (pixVal[0]==pixCol[0]){
    return pixVal[2]-pixCol[2];
  } else {
    return -1;
  }
}



function getDenomination(pixVal) {
  for (i = 0; i < 6; i++){
    if (pixVal[0]==coinColors[i][0]){
      console.log(i);
      return i;
    }
  }
  if (pixVal[0]>=251 && pixVal[0] <=255) {
    return pixVal[0];
  }
  return -1;
}

function drawCoinPile(numcoins) {
  for (i = 0; i < numcoins; i++){
    var coinCol = coinColors[coinPileDenomination];
    fill(coinCol[0],coinCol[1],coinCol[2]);
    strokeWeight(1);
    stroke(255,125);
    scale(2.0,2.0);
    ellipse(mouseX+12, mouseY-i*10, 20, 20);
    scale(0.5,0.5);
  }
}

function drawAbacus(coinStates,abacusX,abacusY,ID)  {
  var abacusWidth = 300;
  var abacusHeight = 40;
  var abacusRoundness = 20;
  noStroke();
  fill(163,119,3);
  rect(abacusX, abacusY, abacusWidth, abacusHeight, abacusRoundness);
  noFill();
  stroke(158);
  strokeWeight(4);
  //draw the coins
  for (i = 0; i < 6; i++){
    var numCoins = coinStates[i]+0;
    var spacing = (abacusWidth - 2*abacusRoundness)/(6 - 1);
    var poleHeight = Math.max(numberBase-2,0)*10;
    var startX = abacusX + abacusRoundness + spacing*i
    var startY = abacusY + abacusRoundness;
    var coinCol = coinColors[i];
    for (j = 0; j < numCoins; j++){
      fill(coinCol[0],coinCol[1]+j,coinCol[2]+ID);
      strokeWeight(1);
      stroke(255,125);
      ellipse(startX, startY-j*10, 40, 40);
    }
    //denomination signalling coins
    
    fill(coinCol[0],coinCol[1]+20,coinCol[2]+ID);
    strokeWeight(1);
    stroke(255,125);
    
    triangle(startX-15*2, startY-poleHeight-50, 
      startX, startY-poleHeight-40+10*2,
       startX+15*2, startY-poleHeight-50)
    //ellipse(startX, startY-poleHeight-40, 20, 20);
    //strokeWeight(4)
    //line(startX, startY-poleHeight-50,
    //     startX, startY-poleHeight-70);

    noFill();
    stroke(158);
    strokeWeight(4);
    var lineY = startY-Math.max((numCoins-1),0)*10;
    var endLineY = startY - poleHeight;
    line(startX,lineY,startX,endLineY);
    if (ID==0){
      fill(0);
      noStroke();
      textSize(32);
      text("Their Money",520,250);
    } else if (ID==1){
      fill(0);
      noStroke();
      textSize(32);
      text("Your Money",520,400);
    }

  }

}

function keyPressed() {
  setChallenge();
}