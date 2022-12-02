// this is the variable your picker should change
var pickedColor = 0;
var madeImage = false;
var waitingForCapture = true;
var store, backgroundPixels, capture;

function preload() {
  //img = loadImage('assets/landscape.jpg');
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    
    // image(img,0,0,width,height);
    capture = createCapture(VIDEO);
    capture.size(windowWidth, windowHeight);
    capture.hide();
    image(capture, 0, 0, windowWidth, windowHeight);
}

function mouseClicked() {
  waitingForCapture = !(waitingForCapture);
  madeImage = false;
}

function draw() {

    if (waitingForCapture){
        image(capture, 0, 0, windowWidth, windowHeight);
    } else if (!waitingForCapture & !madeImage) {

        loadPixels();
        resolution = Math.floor(100), d = pixelDensity();
        imageLength = 4 * (width * d) * (height * d);
        var HueDis = new Array(resolution).fill(0);
        var r,g,b,colorHueVal,newRGB, pixelAsHSV = [];

        for (var i = 0; i < imageLength - 4*d*width; i+=4){
            r = pixels[i];
            g = pixels[i+1];
            b = pixels[i+2];
            pixelAsHSV = rgbToHsl(r,g,b);
            colorHueVal = Math.floor(resolution*pixelAsHSV[0]);
            HueDis[colorHueVal]++;
        }

    
        for (var i = 1; i < HueDis.length; i++){
          HueDis[i] = HueDis[i] + HueDis[i-1];
        }

        store = HueDis.copyWithin(0,HueDis.length);
        // console.log(store);

        for (var i = 0; i < imageLength - 4*d*width; i+=4){
          r = pixels[i]; g = pixels[i+1]; b = pixels[i+2];
          pixelAsHSV = rgbToHsl(r,g,b);
          colorHueVal = Math.floor(resolution*pixelAsHSV[0]);
          var nuHue = HueDis[colorHueVal]/(imageLength/4);

          var rgbPix = hslToRgb(nuHue,pixelAsHSV[1],pixelAsHSV[2]);
          pixels[i]   = rgbPix[0];
          pixels[i+1] = rgbPix[1];
          pixels[i+2] = rgbPix[2];
          HueDis[colorHueVal]--;
        }
        updatePixels();
        loadPixels();
        //Now Histogram equalise /w regard to saturation for each hue
        var HueSatDis = new Array(128);
        for (var i = 0; i < 128; i++){
          HueSatDis[i] = new Array(128);
          for (var k = 0; k < 128; k++){
            HueSatDis[i][k] = 0;
          }
        }
        // console.log(HueSatDis);
        for (var i = 0; i < imageLength - 2*4*d*width; i+=4){
          r = pixels[i]; g = pixels[i+1]; b = pixels[i+2];
          pixelAsHSV = rgbToHsl(r,g,b);
          colorHueVal = Math.floor(127*pixelAsHSV[0]);
          colorSatVal = Math.floor(127*pixelAsHSV[1]);
          try {
            HueSatDis[colorHueVal][colorSatVal]++;
          } catch(e) {
            // console.log(r + " " + g + " " + b + " " + i);
          }
          
        }
        for (var i = 0; i < 128; i++){
          for (var k = 1; k < 128; k++){
            HueSatDis[i][k] = HueSatDis[i][k]+HueSatDis[i][k-1];
          }
        }
        for (var i = 0; i < imageLength - 2*4*d*width; i+=4){
          r = pixels[i]; g = pixels[i+1]; b = pixels[i+2];
          pixelAsHSV = rgbToHsl(r,g,b);
          colorHueVal = Math.floor(127*pixelAsHSV[0]);
          colorSatVal = Math.floor(127*pixelAsHSV[1]);
          var nuSat = (HueSatDis[colorHueVal][colorSatVal]--/HueSatDis[colorHueVal][127]);
          rgbPix = hslToRgb(pixelAsHSV[0],nuSat,pixelAsHSV[2]);
          pixels[i]=rgbPix[0]; pixels[i+1]=rgbPix[1]; pixels[i+2]=rgbPix[2];
        }
        updatePixels();
        loadPixels();
        // Equalise the histogram with regard to Vibrance in terms of hue and saturation
        var HueSatVibDis = new Array(128);
        for (var i = 0; i < 128; i++){
          HueSatVibDis[i] = new Array(128);
          for (var k = 0; k < 128; k++){
            HueSatVibDis[i][k] = new Array(128);
            for (var q = 0; q < 128; q++){
              HueSatVibDis[i][k][q] = 0;
            }
          }
        }
        a = HueSatVibDis;
        // console.log(HueSatVibDis);

        for (var i = 0; i < imageLength - 2*4*d*width; i+=4){
          r = pixels[i]; g = pixels[i+1]; b = pixels[i+2];
          pixelAsHSV = rgbToHsl(r,g,b);
          colorHueVal = Math.floor(127.9*pixelAsHSV[0]);
          colorSatVal = Math.floor(127.9*pixelAsHSV[1]);
          colorVibVal = Math.floor(127.9*pixelAsHSV[2]);
          HueSatVibDis[colorHueVal][colorSatVal][colorVibVal]++;
        }
        for (var i = 0; i < 128; i++){
          for (var k = 0; k < 128; k++){
            for (var q = 1; q < 128; q++){
              HueSatVibDis[i][k][q] = HueSatVibDis[i][k][q]+HueSatVibDis[i][k][q-1];
            }
          }
        }
        for (var i = 0; i < imageLength - 2*4*d*width; i+=4){
          r = pixels[i]; g = pixels[i+1]; b = pixels[i+2];
          pixelAsHSV = rgbToHsl(r,g,b);
          colorHueVal = Math.floor(127.9*pixelAsHSV[0]);
          colorSatVal = Math.floor(127.9*pixelAsHSV[1]);
          colorVibVal = Math.floor(127.9*pixelAsHSV[2]);
          var nuVib = (HueSatVibDis[colorHueVal][colorSatVal][colorVibVal]-- / HueSatVibDis[colorHueVal][colorSatVal][127]);
          rgbPix = hslToRgb(pixelAsHSV[0],pixelAsHSV[1],nuVib);
          pixels[i]=rgbPix[0]; pixels[i+1]=rgbPix[1]; pixels[i+2]=rgbPix[2];
        }
        updatePixels();
        loadPixels();
        //Save the current background
        
        backgroundPixels = new Uint8ClampedArray(pixels);
        backgroundPixels.set(pixels);
        updatePixels();
        
        // console.log("finished");
        madeImage = true;
    } else if (madeImage) {
      fill(255);
      rect(0,0,width,height);
      loadPixels();
      for (var i = 0; i < imageLength - 2*4*d*width; i++){
        pixels[i]=backgroundPixels[i];
      }
      updatePixels();

      var x = Math.floor(mouseX);
      var y = Math.floor(mouseY);
      copy(x-3,y-3,6,6,x-30,y-30,60,60);
      
      var mouseColor = get(x,y,1,1);
      // console.log(mouseColor);
      noStroke();
      fill(mouseColor);
      ellipse(x-30, y-30, 20);
      if (mouseIsPressed){
        pickedColor=mouseColor;
      // console.log("set the color! It's "+pickedColor);
      }
    }
}





function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
  
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
  
    if (max == min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
  
      h /= 6;
    }
  
    return [ h,l,s ];
}


function hslToRgb(h,l,s) {
    var r, g, b;
  
    if (s == 0) {
      r = g = b = l; // achromatic
    } else {
      function hue2rgb(p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1/6) return p + (q - p) * 6 * t;
        if (t < 1/2) return q;
        if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
        return p;
      }
  
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
  
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
  
    return [ r * 255, g * 255, b * 255 ];
}