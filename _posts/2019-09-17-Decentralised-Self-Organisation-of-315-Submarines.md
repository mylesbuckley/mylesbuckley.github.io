---
title: "Decentralised Self Organisation of 256 Submarines"
categories:
excerpt: "A real-time system written in Ada to allow almost senseless submarines to self organise"
tags:
  - Ada
  - comp2310
  - Real-time Systems
  - Autonomous Robotics
  - Decentralised
---
<figure>
	<a href="/assets/images/256-boids.png"><img src="/assets/images/256-boids.png"></a>
</figure>

As part of [comp2310](https://web.archive.org/web/20190407170849/https://cs.anu.edu.au/courses/comp2310/) I got to write the brains for a school of underwater vehicles (I'll call them vehicles to be brief). This already sounds hard, but it was made almost impossible by the fact that we were going to do it in [Ada](https://en.wikipedia.org/wiki/Ada_(programming_language)). There was a steep withdraw rate in the course. 

The challenge was organising underwater vehicles such that they shared a “recharging station” (orb) efficiently. Additional challenges were that the vehicles needed to organise themselves through communication, they had extremely short communication distance and they had equally short visual acuity (for spotting the orb). When a vehicle comes into contact with the orb it is instantly recharged. My solution was to have the vehicles organise themselves into a [fibonacci spiral](https://www.sciencedirect.com/science/article/abs/pii/0025556479900804?via%3Dihub) embedded onto the [surface of a sphere](https://bduvenhage.me/geometry/2019/07/31/generating-equidistant-vectors.html#:~:text=Summary,three%20points%20to%20the%20sphere.) with the orb at the top. Vehicles from the bottom of the sphere would then accelerate through the centre of the sphere and out the top (touching the orb) in order to recharge. Once charged, the vehicles would make their way back down from the top of the sphere to the bottom in order to repeat the process. This maxed out the number of vehicles far beyond any other technique at easily supporting 256 vehicles stably.

Although I came up with this idea early, I delayed committing to it because I knew it would be difficult to develop.
My first thought was to simply try getting the vehicles to go round in a ring, hitting the orb one by one: 
<div style="position: relative; padding-bottom: 56.25%;">
<iframe src="/assets/html/ring-boids.html" title="ring formation demo should be here" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>


Unfortunately this was unable to achieve an impressive number of ships, so I tried a 2D "sunflower" approach:
> To use the simulation, first click on it. Now move your mouse up and down to see where each vehicle in an individual "spiral" of the sunflower will go. Press the space bar to move over to the next spiral. 
<div style="position: relative; padding-bottom: 56.25%;">
<iframe src="/assets/html/sunflower-boids.html" title="sunflower formation demo should be here" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>
This approach was okay, but clearly could be improved on as there was an entire dimension left unused. It was helpful as it provided an easier testing bed for the code I would use on the spherical version

> To use this simulation, first click on it. You can rotate the sphere with your mouse (I recommend putting it in the top left corner to begin with). You can select a different (red) spiral "path" in the sphere by using the left arrow key. You can select a different (blue) "ship" in the (black) "crown" by using the right arrow key. Finally you can choose which "step" in all of the (red) "paths" to place the (black) "crown" using the up and down arrow keys.
<div style="position: relative; padding-bottom: 56.25%;">
<iframe src="/assets/html/sphere-boids.html" title="sphere formation demo should be here" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
</div>

Using this simulation I was able to debug the logic which I would use in my final Ada code. The benefit of using these [p5js](https://p5js.org/) interactive animations was that they were incredibly quick to build and debug. This meant that I could have a very fast "run, change, observe" debugging loop, and the logic of my code was ready in a few hours. Though I had very minor bugs when transitioning this to the Ada code, debugging them was far slower because the compilation was about three orders of magnitude longer, and I had less control over the simulation due to poor documentation. 

It's very hard to see what the ships are doing where there are 256 of them, and it looks (misleadingly) chaotic. Here's what and older version[^1] looks like with 256 vehicles:



[^1]: Unfortunately I can no longer compile my code as an update to MacOS broke the make file. So I'm left with an older executable which was less optimised (the optimisation was actually just to slow down the movement of the vehicles, and stop them from moving in an unnecessarily jerky way, as well as tuning the timing very slightly).
