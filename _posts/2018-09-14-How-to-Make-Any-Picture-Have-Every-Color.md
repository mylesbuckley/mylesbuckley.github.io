---
title: "How to Make Any Picture Have Every Color."
categories:
excerpt: "A web program that can change any given image so that the image contains every perceivable colour."
header:
  image: "/assets/images/snowy-landscape-after-colour.png"
  teaser: "/assets/images/snowy-landscape-after-colour.png"
tags:
  - p5js
  - comp1720
  - Interactive
  - Start Here
  - Complete
---
<div style="position: relative; padding-bottom: 56.25%;">
<iframe src="/assets/html/colour-picker.html" title="colour picker should be here" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

> To use this demo, first allow access to your camera. Then simply keep clicking on the image until you get a picture you like. (The demo doesn't work in safari, see the example at then end instead.)

I made a web program that can change any given image so that the image contains every perceivable colour. This was a comical solution to the problem of creating a "[colour picker](https://en.wikipedia.org/wiki/Color_picker)" for the second assignment in [comp1720](https://cs.anu.edu.au/courses/comp1720/). This seems impossible, but the combinations of typical RGB are: 255 × 255 × 255 = 16581375. The number of pixels in an 8k image are: 4096 × 2160 = 33177600 which is more than enough.

If you were to use this as a colour picker, you wold of course have the challenge of finding the pixel that corresponded to your target color. However, the challenge for me was actually to produce an image that wasn't viscerally disturbing, **and** still resembled the image fed in. 

I chose to work with [HSV](https://en.wikipedia.org/wiki/HSL_and_HSV) rather than [RGB](https://en.wikipedia.org/wiki/RGB_color_model) because it felt a lot more suited to the task, as it separates color from brightness and saturation. I achieved the ‘every color’ goal  by first performing a histogram equalization on the hue (colour). This then meant that I could break up all (255) of the now equally sized "hue" bins and individually make sure that for each of these had an equal amount of each (255) "lightness's" of the hue. Now we have an equal amount of each "hue-lightness" combination, so now we make sure that within each of these "buckets" the representation of each "saturation" value is equal. Now we can be sure, that for any combination of hue, lightness, and saturation you might choose; there is a pixel in the image with that given value.

For those on safari, here's an example:

Before
<figure>
	<a href="/assets/images/snowylandscape-before-colour.jpg"><img src="/assets/images/snowylandscape-before-colour.jpg"></a>
</figure>
After
<figure>
	<a href="/assets/images/snowy-landscape-after-colour.png"><img src="/assets/images/snowy-landscape-after-colour.png"></a>
</figure>

