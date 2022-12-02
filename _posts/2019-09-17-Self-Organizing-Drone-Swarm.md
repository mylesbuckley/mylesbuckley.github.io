---
title: "Self Organizing Drone Swarm"
categories:
excerpt: "A real-time system written in Ada to allow semi-blind submarines to self organise"
header:
  teaser: "/assets/images/256-vehicle-time-lapse.png"
  image: "/assets/images/256-vehicle-time-lapse.png"
tags:
  - Ada
  - comp2310
  - Real-time Systems
  - Autonomous Robotics
  - Decentralized
  - p5js
  - Interactive
  - Start Here
  - Complete
---
<figure>
	<a href="/assets/images/256-boids.png"><img src="/assets/images/256-boids.png"></a>
</figure>
> If you're on a Mac you can <a href="/assets/binaries/swarm.zip">download and play with the simulation</a>. First, unzip swarm.zip. Second, two finger click on the file "swarm" that was extracted and select "Open" from the drop down menu. You'll now be prompted to "trust" an unidentified (me) developer by selecting "Open" for a second time. It should now be running. If this doesn't work it's quite possible you'll need to [allow applications from unidentified developers](https://www.macworld.co.uk/how-to/mac-app-unidentified-developer-3669596/) in system preferences.

As part of [comp2310](https://web.archive.org/web/20190407170849/https://cs.anu.edu.au/courses/comp2310/) I got to write the brains for a school of underwater vehicles. This already sounds hard, but it was made almost impossible by the fact that we were going to do it in [Ada](https://en.wikipedia.org/wiki/Ada_(programming_language)).

The challenge was organising underwater vehicles such that they shared a “recharging station” (orb) efficiently. Additional challenges were that the vehicles needed to organise themselves through communication, they had extremely short communication distance and they had equally short visual acuity (for spotting the orb). When a vehicle comes into contact with the orb it is instantly recharged. My solution was to have the vehicles organise themselves into a [fibonacci spiral](https://www.sciencedirect.com/science/article/abs/pii/0025556479900804?via%3Dihub) embedded onto the [surface of a sphere](https://bduvenhage.me/geometry/2019/07/31/generating-equidistant-vectors.html#:~:text=Summary,three%20points%20to%20the%20sphere.) with the orb at the top. Vehicles from the bottom of the sphere would then accelerate through the centre of the sphere and out the top (touching the orb) in order to recharge. Once charged, the vehicles would make their way back down from the top of the sphere to the bottom in order to repeat the process. This maxed out the number of vehicles far beyond any other technique at easily supporting 256 vehicles stably.

Although I came up with this idea early, I delayed committing to it because I knew it would be difficult to develop.

My first thought was to simply try getting the vehicles to go round in a ring, hitting the orb one by one: 
<div style="position: relative; padding-bottom: 56.25%;">
<iframe src="/assets/html/ring-boids.html" title="ring formation demo should be here" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>
Unfortunately this was unable to achieve an impressive number of ships, so I tried a 2D "sunflower" approach:
<div style="position: relative; padding-bottom: 56.25%;">
<iframe src="/assets/html/sunflower-boids.html" title="sunflower formation demo should be here" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>
> To use the simulation, first click on it. Now move your mouse up and down to see where each vehicle in an individual "spiral" of the sunflower will go. Press the space bar to move over to the next spiral. 
This approach was okay, but clearly could be improved on as there was an entire dimension left unused. It was helpful as it provided an easier testing bed for the code I would use on the spherical version
<div style="position: relative; padding-bottom: 56.25%;">
<iframe src="/assets/html/sphere-boids.html" title="sphere formation demo should be here" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>
> To use this simulation, first click on it. You can rotate the sphere with your mouse (I recommend putting it in the top left corner to begin with). You can select a different (red) spiral "path" in the sphere by using the left arrow key. You can select a different (blue) "ship" in the (black) "crown" by using the right arrow key. Finally you can choose which "step" in all of the (red) "paths" to place the (black) "crown" using the up and down arrow keys.

Using this simulation I was able to debug the logic which I would use in my final Ada code. The benefit of using these [p5js](https://p5js.org/) interactive animations was that they were incredibly quick to build and debug. This meant that I could have a very fast "run, change, observe" debugging loop, and the logic of my code was ready in a few hours. Though I had very minor bugs when transitioning this to the Ada code, debugging them was far slower because the compilation was about three orders of magnitude longer, and I had less control over the simulation due to poor documentation. 
Here's what it looks like with 256 vehicles in full flight:
{% include video id="-UkhqeWF3-s" provider="youtube" %}
However I think it looks nicer when there are just 64 vehicles:
{% include video id="_7WPDeF835w" provider="youtube" %}
And here's what it looks like with the communication/visual acuity represented with lines:
{% include video id="ArlddiA3cHk" provider="youtube" %}
Finally here's a time-lapse of 256 vehicles I made with [p5js](https://p5js.org):
<figure>
	<a href="/assets/images/256-vehicle-time-lapse.png"><img src="/assets/images/256-vehicle-time-lapse.png"></a>
</figure>