window.addEventListener("keydown", function(e) {
  // space and arrow keys
  if([40, 38].indexOf(e.keyCode) > -1) { //37 and 39 excluded
      e.preventDefault();
  }
}, false);

var vaultBoyScript = [
                      "Hi, I'm here to give you some help!",
                      "Let's start by moving your character with the arrow keys!",
                      "Great!",
                      "Now your job here is to deliver packages from house to house.",
                      "You're a sort of postal service ;)",
                      "Go get a package from Daves' house and take it to Caras'!...",
                      "Our goal is to write code to do this automatically...",
                      "Go over to the code editor.",
                      "Try this! Enter EXACTLY: \nspeed=20; \n",
                      "Press RUN CODE, and then move Codey!",
                      "This is not the only way you can move Codey",
                      "Let's try moving Codey by using the grid and code",
                      "Type EXACTLY: codeyPath=\"RR\";           to move Codey right two squares",
                      "R=Right  L=Left  D=Down  U=Up",
                      "Press the [R] key to get Codey to go back to the reset point \"post office\"",
                      "Get Codey to go to Genes' house from the reset point with: codeyPath=\"....\";",
                      "If you get stuck, press the [R] key, clear the code editor and look at the background hints!",
                      "Get Codey to backtrack to the reset point *from Genes'* with: codeyPath=rev(\"....\");\n",
                      "Having trouble!!! Delete your code and look at the hints! Reset with the [R] key!",
                      "Roundtrip! (try): codeyPath= \"....\"+rev(\"....\");",
                      "If you suceeded, Codey will go to Genes' from the reset point and then back.",
                     "Once that works, keep Codey at the reset point so your code doesn't break!",
                     "Awesome! Now we'll link this code to the G key on the keyboard!",
                     "That way you can send him to Genes' and back with one click!",
                     "Copy this code very carefully and fill in the \"....\" with your code!",
                     "g=\"....\"+rev(\"....\");\n\n*Don't forget to run your code and then press [G]",
                     "Now when you press the [G] key your code sends Codey to Genes' house!",
                     "Awesome now complete the code for a,b,c,d,e and f! Be patient when counting squares!",
                     "Remember not to move Codey from his starting point! It breaks your code! Reset with [R]",
                     "Now comes the real challenge! You're going to write some code that ...",
                     "Automatically delivers a parcel given a sender and reciver!...",
                     "Make sure to check all your buttons are working! (A,B,C,D,E,F,G)",
                     "Ok here's what our function looks like (COPY CAREFULLY!):...",
                    "send = function(x,y){ "+
                    "codeyPath=x+y;\n"+
                    "}",
                    "If you were carefull you will now see Codey sending packages everywhere!",
                    "code function explanation...",
                    "This bit of code works by taking in the two address: \"sender\" x, \"reciever\" y",
                    "For example, these could be a and f (Alice and Felix) e.g. send(a,f)",
                    "However, remember how a equals the instructions to go to Alices' and back?",
                    "And f equals the instructions to go to Felix's and back?",
                    "Well this code makes Codey go to Alices' and back then to Felix's and back...",
                    "codeyPath= \"a and back\" + \"f and back\";",
                    "By the magic of this simple statement, Codey is now an automated postman!",
                    "Well done! And good luck with future coding!!",
                    ];
var codey, corneliaIMG, redCorneliaIMG, vaultBoyIMG, vaultBoySpeaks, 
speachBubbleText, nextStatementFrame, graphics, backgroundSound, doorbell,
packageDown, reset;
var speachBubbleText = "Press Space to begin...";
var vaultBoyScriptIndex = 0;
var area;
var parcelIMG;
var parcelAddress = 252;
var parcelDestination = 253;
var codeyPath = "";
var stepTime = 2;
var stepSize = 61;
var currentDir = "";
var areaDOM;
var userTyping = false;
var a = "";
var b = "";
var c = "";
var d = "";
var e = "";
var f = "";
var g = "";
var speed = 10;
var send; 
send = function(x,y) {
    return;
}

// FOR ASSESSMENT PURPOSES!!
// send=function(x,y){codeyPath=x+y;}
// a="URUUUULLLLDLLLLLLL"+rev("URUUUULLLLDLLLLLLL");
// b="URUUUULLLLDLLL"+rev("URUUUULLLLDLLL");
// c="LLLLLLL"+rev("LLLLLLL");
// d="LLLU"+rev("LLLU");
// e="DRDDDDLLLLU"+rev("DRDDDDLLLLU");
// f="DRRRURRRRRRRRU"+rev("DRRRURRRRRRRRU");
// g="URRRDRRRRRUUUU"+rev("URRRDRRRRRUUUU");


function rev(str){
    var mirrorStr = "";
    for (i = 0; i < str.length; i++){
        var symb = str[str.length - 1 - i];
        (symb=='R') && (mirrorStr=mirrorStr+"L");
        (symb=='L') && (mirrorStr=mirrorStr+"R");
        (symb=='U') && (mirrorStr=mirrorStr+"D");
        (symb=='D') && (mirrorStr=mirrorStr+"U");
    }
    return mirrorStr;
}
function preload() {
    // load any assets (images, sounds etc.) here
    codey = codeyM();
    parcelIMG = loadImage("assets/images/gift.png");
    vaultBoySpeaks = loadSound("assets/sounds/vaultBoySpeaks.mp3");
    vaultBoyIMG = loadImage("assets/images/vaultBoy.png");
    corneliaIMG = loadImage("assets/images/cornelia.png");
    redCorneliaIMG = loadImage("assets/images/corneliared.png");
    backgroundSound = loadSound("assets/sounds/countryside.mp3");
    doorbell = loadSound("assets/sounds/doorbell.mp3");
    packageDown = loadSound("assets/sounds/packageDown.mp3");
    reset = loadSound("assets/sounds/reset.mp3")
}
function setup() {
    createCanvas(1920, 1080);
    frameRate(30);
    graphics = createGraphics(1920, 1080);
    graphics.image(redCorneliaIMG,0,0,1920, 1080);
    shortcuts.drawDoorsteps();
    codeEditor.setupCodeEditor();
    vaultBoySpeaks.setVolume(0.33);
    backgroundSound.setVolume(1);
    backgroundSound.loop();
    reset.setVolume(1);
    codey.resetCodey();
}
function draw() {
    //image(graphics,0,0,1920, 1080);
    image(corneliaIMG,0,0,1920, 1080);
    shortcuts.drawGrid();
    shortcuts.drawVaultBoy();
    shortcuts.speachBubble();
    shortcuts.drawHouseNames();
    shortcuts.drawPackage();
    (codeyPath!="") && (codeEditor.iteratePath());
    (frameCount==nextStatementFrame) && (shortcuts.changeSpeachBubble());
    codey.visual.moveCodey();
    codey.visual.drawCodey();
    codey.visual.updatePackage();
    (codeyPath==="") && (send(codeEditor.addressToName(parcelAddress),codeEditor.addressToName(parcelDestination)));
}


var codeEditor = {
    setupCodeEditor : function() {
        area = createElement('textarea');
        area.position(30,670);
        area.style('height:370px;width:400px;font-size:24px');
        area.elt.placeholder = 
        "Your code goes here! :D"+
        "\n\nR=Right L=Left U=Up D=Down"+
        "\n\nExamples / Hints:"+
        "\n\ncodeyPath=\"DDR\";"+
        "\n\ncodeyPath=\"DDR\"+rev(\"DDR\");"+
        "\n\ng=\"....\"+rev(\"....\");"+
        "\n\nsend = function(x,y){ "+
        "codeyPath=x+y;\n"+
        "}";
        areaDOM = window.document.getElementsByTagName('textarea')[0];
        areaDOM.addEventListener("focus", codeEditor.typingON,true);
        areaDOM.addEventListener("blur", codeEditor.typingOFF,true);
        this.enableTabInTextArea();
    
        this.button = createButton('RUN\nCODE');
        this.button.position(440, 672);
        this.button.style('height:370px;width:80px;background-color: #FF2200; color: white;text-align: centre;display: inline-block;font-size: 24px;');
        this.button.mousePressed(codeEditor.runCode);
    },
    typingOFF : function() {
        userTyping = false;
        console.log("user stopped typing");
    },
    typingON : function() {
        userTyping = true;
        console.log("user started typing");
    },
    enableTabInTextArea : function() {
        var textareas = document.getElementsByTagName('textarea');
        var count = textareas.length;
        for(var i=0;i<count;i++){
            textareas[i].onkeydown = function(e){
                if(e.keyCode==9 || e.which==9){
                    e.preventDefault();
                    var s = this.selectionStart;
                    this.value = this.value.substring(0,this.selectionStart) + "   " + this.value.substring(this.selectionEnd);
                    this.selectionEnd = s+3; 
                }
            }
        }
    },
    iteratePath : function() {
        if (frameCount%stepTime==0){
            currentDir=codeyPath[0];
            codeyPath=codeyPath.substring(1,codeyPath.length);
            (currentDir=="R") && (codey.visual.codeyCanMove(stepSize,0))  && (codey.stateOfCodey = ["walk","","right"]);
            (currentDir=="L") && (codey.visual.codeyCanMove(-stepSize,0)) && (codey.stateOfCodey = ["walk","","left"]);
            (currentDir=="U") && (codey.visual.codeyCanMove(0,-stepSize)) && (codey.stateOfCodey = ["walk","up",""]);
            (currentDir=="D") && (codey.visual.codeyCanMove(0,stepSize))  && (codey.stateOfCodey = ["walk","down",""]);
        }
    },
    runCode : function() {
        var name = area.value();
        try {
          eval(name);
        } catch(e){
          area.value('');
          name = "//uh oh! you did something slightly wrong!\n//The problem was: "+e.message+"\n//Your Original Code\n"+name;
        }
        area.value(name);
        //area.value('');
    },
    newDelivery : function() {
        packageDown.play();
        var newAddress = parcelAddress+0;
        var newDestination = parcelDestination+0;
        while (newDestination==parcelDestination || newAddress==parcelAddress || 
                newAddress==newDestination || newAddress==parcelDestination ||
                 newDestination==parcelAddress){
            newDestination = 249+Math.floor(7*Math.random());
            newAddress     = 249+Math.floor(7*Math.random());
        }
        parcelAddress = newAddress+0;
        parcelDestination = newDestination+0;
        codey.hasPackage = false;
        //speachBubbleText = "at house:  "+ codeEditor.addressToName(parcelAddress)+"  to house: "+ codeEditor.addressToName(parcelDestination);
        return;
    },
    addressToName : function(addr) {
        var name = "";
        (addr==255) && (name = a);
        (addr==254) && (name = b);
        (addr==253) && (name = c);
        (addr==252) && (name = d);
        (addr==251) && (name = e);
        (addr==250) && (name = f);
        (addr==249) && (name = g);
        return name;
    },
}


var shortcuts = {
    drawVaultBoy : function() {
        image(vaultBoyIMG,1920-200,Math.sin(frameCount/10)*5,200,200);
    },
    drawDoorsteps : function() {
        graphics.noStroke();
        graphics.strokeWeight(0);

        // graphics.fill(255,0,0);
        // graphics.rect(213, 291, 363-213, 319-291);
        // graphics.fill(254,0,0);
        // graphics.rect(419, 291, 573-419, 318-291);
        // graphics.fill(253,0,0);
        // graphics.rect(318, 508, 519-318, 535-508);
        // graphics.fill(252,0,0);

        // graphics.rect(576, 506, 779-576, 534-506);
        // graphics.fill(251,0,0);
        // graphics.rect(611, 795, 792-611, 826-795);
        // graphics.fill(250,0,0);
        // graphics.rect(1457, 508, 1608-1457, 536-508);
        // graphics.fill(249,0,0);
        // graphics.rect(1304, 290, 1454-1304, 319-290);

         graphics.fill(255,0,0);
        graphics.rect(245, 290 ,327-245,  363-290)
 
         graphics.fill(254,0,0);
        graphics.rect(425 , 294  ,551-425,  365-294 )
  
         graphics.fill(253,0,0);
        graphics.rect(368  ,508  ,488-368 , 613-508  )
 
         graphics.fill(252,0,0);
        graphics.rect(659 , 506  ,754-659 , 582-506  )

         graphics.fill(251,0,0);
        graphics.rect(671 , 796 , 732-671  ,856-796 )

         graphics.fill(250,0,0);
        graphics.rect(1459 , 507  ,1607-1459,  580-507 )

         graphics.fill(249,0,0);
        graphics.rect(1343  ,293 , 1409-1343 , 368-293) 

  

    },
    drawHouseNames : function() {
        fill("#500e0f");
        rect(265, 203, 100, 40);//Alice
        rect(431, 198, 100, 40);
        rect(393, 416, 100, 40);
        rect(650, 418, 100, 40);
        rect(603, 680, 100, 40);
        rect(1490, 418, 100, 40);
        rect(1329, 203, 100, 40);
        fill(255);
        textSize(34);
        textAlign(CENTER, CENTER);
        text("Alice",265, 203, 100, 40);
        text("Bob", 431, 198, 100, 40);
        text("Cara",393, 416, 100, 40);
        text("Dave",650, 418, 100, 40);
        text("Eve",603, 680, 100, 40);
        text("Felix",1490, 418, 100, 40);
        text("Gene",1329, 203, 100, 40);
        //265 203 //Alice
        //431 198 //Bob
        //393 416 //Cara
        //650 418 //Dave
        //603 680 //Eve
        //1490 418 //Felix
        //1329 203 //Gene
    },
    drawGrid : function() {
        var gridSize = stepSize+0;
        strokeWeight(0.8);
        stroke(0,255);
        for (i = 0; i < 1920/gridSize;i++){
            line(i*gridSize,1080,i*gridSize,0);
        }
        for (i = 0; i < 1080/gridSize;i++){
            line(0,i*gridSize,1920,i*gridSize);
        }
    },
    drawPackage : function() {
        var x,y;
        if (codey.hasPackage) {
            return;
        }
        (parcelAddress==255) && (this.packageAnimation(265, 203));
        (parcelAddress==254) && (this.packageAnimation(431, 198));
        (parcelAddress==253) && (this.packageAnimation(393, 416));
        (parcelAddress==252) && (this.packageAnimation(650, 418));
        (parcelAddress==251) && (this.packageAnimation(603, 680));
        (parcelAddress==250) && (this.packageAnimation(1490, 418));
        (parcelAddress==249) && (this.packageAnimation(1329, 203));
        //rect(265, 203, 100, 40);//Alice
        // rect(431, 198, 100, 40);
        // rect(393, 416, 100, 40);
        // rect(650, 418, 100, 40);
        // rect(603, 680, 100, 40);
        // rect(1490, 418, 100, 40);
        // rect(1329, 203, 100, 40);
    },
    packageAnimation : function(x,y) {
        image(parcelIMG,x+5*Math.sin(frameCount/2), y-40+5*Math.sin(frameCount/10), 30, 30);
    },
    changeSpeachBubble : function() {
        speachBubbleText = vaultBoyScript[vaultBoyScriptIndex];
        if (vaultBoyScriptIndex<vaultBoyScript.length-1){
            vaultBoyScriptIndex++;
            vaultBoySpeaks.play();
        }
    },
    speachBubble : function() {
        //
        fill(255);
        noStroke();
        triangle(1787,67, 1787-60,67-10, 1787-60,67+10);
        rect(1460, 5, 1787-1460-60, 120,20);
        fill(50);
        textSize(24);
        textAlign(LEFT, TOP);
        text(speachBubbleText, 1464, 10, 1787-1460-60, 120);
        //1460 40
    },
}

function codeyM(){
    var codey = {
        positionOfCodey : [850,500],
        sizOfCodey : 60,
        stateOfCodey : ["stand","","right"], //"walk" || "stand"; "up" || "down" || ""; "left" || "right" || "";
        hasPackage : false,
        visual : {
            spriteIndex : 0,
            spriteRow : 0,
            codeySprite : loadImage("assets/images/sprite.png"),
            //codeySprite : loadImage("assets/Red.png"),

            moveCodey : function(){
               var pos = codey.positionOfCodey;
               var state = codey.stateOfCodey;
               if (state[0]=="walk") {
                  var col = get(codey.positionOfCodey[0],codey.positionOfCodey[1]);
                  var dx = 0;
                  var dy = 0;
                  (state[2]=="right") && (dx = speed);
                  (state[2]=="left")  && (dx = -speed);
                  (state[1]=="up")    && (dy = -speed);
                  (state[1]=="down")  && (dy =  speed);
                  (state[1]=="up")    && (state[2]=="left" || state[2]=="right") && (dy = -speed*0.6) && (dx = dx*0.6);
                  (state[1]=="down")  && (state[2]=="left" || state[2]=="right") && (dy =  speed*0.6) && (dx = dx*0.6);
                  this.codeyCanMove(dx,dy);
               }
            },
            codeyCanMove : function(incX,incY){
               var canMove = true;
               var x = codey.positionOfCodey[0] + incX;
               var y = codey.positionOfCodey[1] + incY;
               var p1 = graphics.get(x+codey.sizOfCodey/2-incX,y+codey.sizOfCodey*0.80);
               var p2 = graphics.get(x+codey.sizOfCodey/2-incX,y+codey.sizOfCodey*1.0);
               var p3 = graphics.get(x+codey.sizOfCodey*(0.4),y+codey.sizOfCodey*1.0-incY);
               var p4 = graphics.get(x+codey.sizOfCodey*0.6,y+codey.sizOfCodey*1.0-incY);
               (p1[0]>=249) && (p1[1]<=13) && (p1[2]<=27) && (codey.positionOfCodey[1]+=incY/2);
               (p2[0]>=249) && (p2[1]<=13) && (p2[2]<=27) && (codey.positionOfCodey[1]+=incY/2);
               (p3[0]>=249) && (p3[1]<=13) && (p3[2]<=27) && (codey.positionOfCodey[0]+=incX/2);
               (p4[0]>=249) && (p4[1]<=13) && (p4[2]<=27) && (codey.positionOfCodey[0]+=incX/2);
            },
            drawCodey : function(){
               //codey.positionOfCodey = [mouseX,mouseY];
               var state = codey.stateOfCodey;
               (state[1]=="down") && (state[2]=="left")  && (this.spriteRow = 0);
               (state[1]=="down") && (state[2]=="right") && (this.spriteRow = 2);
               (state[1]=="down") && (state[2]==""     ) && (this.spriteRow = 1);
               (state[1]=="up"  ) && (state[2]=="left" ) && (this.spriteRow = 4);
               (state[1]=="up"  ) && (state[2]=="right") && (this.spriteRow = 6);
               (state[1]=="up"  ) && (state[2]==""     ) && (this.spriteRow = 7);
               (state[1]==""    ) && (state[2]=="left" ) && (this.spriteRow = 3);
               (state[1]==""    ) && (state[2]=="right") && (this.spriteRow = 5);
               var im;
               (state[0]=="walk")  && (im = this.codeySprite.get(this.spriteIndex*64+64,this.spriteRow*96,64,96));
               (state[0]=="stand") && (im = this.codeySprite.get(0                     ,this.spriteRow*96,64,96));
               var x = codey.positionOfCodey[0];
               var y = codey.positionOfCodey[1];
               image(im,x,y,codey.sizOfCodey,codey.sizOfCodey);
               stroke(255,0,0);
               strokeWeight(6);
                //line(x+codey.sizOfCodey/2,y+codey.sizOfCodey*0.80,x+codey.sizOfCodey/2,y+codey.sizOfCodey*0.80);
               //line(x+codey.sizOfCodey/2,y+codey.sizOfCodey*1.0,x+codey.sizOfCodey/2,y+codey.sizOfCodey*1.0);
               //line(x+codey.sizOfCodey*(0.4),y+codey.sizOfCodey*1.0,x+codey.sizOfCodey*(0.4),y+codey.sizOfCodey*1.0);
                //line(x+codey.sizOfCodey*0.6,y+codey.sizOfCodey*1.0,x+codey.sizOfCodey*0.6,y+codey.sizOfCodey*1.0);
               noStroke();
               (frameCount%2==0) && (this.spriteIndex++) ;
               (this.spriteIndex >=8) && (this.spriteIndex = 0);
               (codey.hasPackage) && (shortcuts.packageAnimation(x+20,y+3));
            },
            updatePackage : function(){
                var x = codey.positionOfCodey[0];
                var y = codey.positionOfCodey[1];
                var points = [];
                points[0] = graphics.get(x+codey.sizOfCodey/2,y+codey.sizOfCodey*0.80);
                points[1] = graphics.get(x+codey.sizOfCodey/2,y+codey.sizOfCodey*1.0);
                points[2] = graphics.get(x+codey.sizOfCodey*(0.4), y+codey.sizOfCodey*1.0);
                points[3] = graphics.get(x+codey.sizOfCodey*0.6,   y+codey.sizOfCodey*1.0);
                if (codey.hasPackage){//check for delivery
                    var delivered = false; 
                    for (var i = 0;i<4;i++){
                        (points[i][0]==parcelDestination) && (points[i][1]==0) && (points[i][2]==0) && (delivered = true);
                    }
                    (delivered) && (codeEditor.newDelivery());
                } else {//check for pickup
                    var pickedUp = false; 
                    for (var i = 0;i<4;i++){
                        (points[i][0]==parcelAddress) && (points[i][1]==0) && (points[i][2]==0) && (pickedUp = true);
                    }
                    (pickedUp) && (codey.hasPackage=true) && (doorbell.play());
                }

            },
        },
        resetCodey : function(){
            codey.positionOfCodey= [884+codey.sizOfCodey/2-60,  580+codey.sizOfCodey-120];  
            reset.play();
        }
    }
    return codey;
}

function keyReleased() {
    if (userTyping){
        return;
    }
   (keyCode==LEFT_ARROW)  && (codey.stateOfCodey[2]="");
   (keyCode==RIGHT_ARROW) && (codey.stateOfCodey[2]="");
   (keyCode==UP_ARROW)    && (codey.stateOfCodey[1]="");
   (keyCode==DOWN_ARROW)  && (codey.stateOfCodey[1]="");
   if (!keyIsPressed) {
      codey.stateOfCodey[0]="stand";
   }
   return false; // prevent any default behavior
}
function keyPressed() {
    codey.stateOfCodey[0]="stand";
    if (userTyping){
        return;
    }
   (keyCode==LEFT_ARROW)  && (codey.stateOfCodey[2]="left")  && (codey.stateOfCodey[0]="walk");
   (keyCode==RIGHT_ARROW) && (codey.stateOfCodey[2]="right") && (codey.stateOfCodey[0]="walk");
   (keyCode==UP_ARROW)    && (codey.stateOfCodey[1]="up")    && (codey.stateOfCodey[0]="walk");
   (keyCode==DOWN_ARROW)  && (codey.stateOfCodey[1]="down")  && (codey.stateOfCodey[0]="walk");
    //return false; // prevent any default behavior
}
function keyTyped() {
    if (userTyping!=false){
        return;
    }
    (key===' ') && (shortcuts.changeSpeachBubble());
    try {
        (key==='a') && (codeyPath=a);
        (key==='b') && (codeyPath=b);
        (key==='c') && (codeyPath=c);
        (key==='d') && (codeyPath=d);
        (key==='e') && (codeyPath=e);
        (key==='f') && (codeyPath=f);
        (key==='g') && (codeyPath=g);
        (key==='r') && (codey.resetCodey());
    } catch (e) {};   
}