---
title: "Can You Learn To Code With A Game?"
categories:
excerpt: "Code an \"artificially intelligent\" postman with no coding experience."
tags:
  - p5js
  - comp1720
  - interactive
---

<style>
  #wrap {
    width: 960px;
    height: 540px;
    padding: 0;
    overflow: hidden;
  }
  #scaled-frame {
    width: 1920px;
    height: 1080px;
    border: 0px;
  }
  #scaled-frame {
    zoom: 0.5;
    -moz-transform: scale(0.5);
    -moz-transform-origin: 0 0;
    -o-transform: scale(0.5);
    -o-transform-origin: 0 0;
    -webkit-transform: scale(0.5);
    -webkit-transform-origin: 0 0;
  }
  @media screen and (-webkit-min-device-pixel-ratio:0) {
    #scaled-frame {
      zoom: 1;
    }
  }
</style>
<div id="wrap">
<iframe id="scaled-frame" src="/assets/html/codey-newman.html" title="Learning to code game should be here"></iframe>
</div>

> To play the game, follow the instructions of the [Vault Boy](https://fallout.fandom.com/wiki/Vault_Boy) lookalike. At the end of playing the game you will have put: 
```js 
{% raw %}a="URUUUULLLLDLLLLLLL"+rev("URUUUULLLLDLLLLLLL");
b="URUUUULLLLDLLL"+rev("URUUUULLLLDLLL");
c="LLLLLLL"+rev("LLLLLLL");
d="LLLU"+rev("LLLU");
e="DRDDDDLLLLU"+rev("DRDDDDLLLLU");
f="DRRRURRRRRRRRU"+rev("DRRRURRRRRRRRU");
g="URRRDRRRRRUUUU"+rev("URRRDRRRRRUUUU");
send = function(x,y){
codeyPath=x+y;
} {% endraw %}
```
> in the white code box and pressed the red "RUN CODE" button (try it now if you're interested to see what it's like).

This little game was my major project for [comp1720](https://cs.anu.edu.au/courses/comp1720/), where we were asked to explore the theme of "new". This game by attempted to introduce a new way of teaching coding. 

The fundamental thing to understand in coding is the kind of mistakes the computer makes in interpreting your instructions, because they are so different to anything in real life. The key here was that people could *see* that when "Codey" missed just one instruction (that they forgot to include) he would totally mess up everything. Gaining familiarity with this type of “stupidity” is essential in changing people's attitude to the errors they will eventually encounter when writing real code. It turns the computer into a “dumb robot” instead of a grammar nazi who shouts at you. Of course this won’t stop it from being frustrating when you hit an error, but understanding the “mentality” of the computer will likely help the student.

The structure of the game is very much trying to introduce coding in “baby steps”, though they will likely still feel like large leaps to a beginner. The idea was to start with some silly code, just to get an idea as to what code might look like and that it might be powerful (i.e. speed=20). The next was to show what an instruction statement would look like, followed by what the symbols in the instruction string mean in an intuitive sense (left, right, up, down). 

This ramped up into asking them to create full paths very quickly (perhaps too quickly), and then linking them to the keyboard (kind of like a DJ's soundboard). The culmination of the game was getting to see Codey become an automated postman, and seeing him run around delivering packages! I hope this leaves the player with a positive impression of coding and confidence in their own coding ability/potential. 
 
