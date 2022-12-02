---
title: "Stranki"
categories:
excerpt: "Discover the Swiss cheese holes in your knowledge! Determine Your Understanding of N Things in O(Log(N))! In this post I explain the algorithm."
tags:
  - PersonalProject
---
# Analogy: (What It's Like)

The current way we teach can lead to "swiss cheese" holes being left in our understanding, and also developing over time (e.g. if you cram for a test, the holes will develop after). If a learning a subject "flat" then these "swiss cheese holes" wouldn't be such a problem.

Let's consider an analogy, what if we were laying the foundations for 5 houses and had a 10% chance of messing it up. Then our success rate would be:

``0.9*A + 0.9*B + 0.9*C + 0.9*D + 0.9*E = 90%``. 

But what if we were making a 5 storey building, and our chance of messing it up at any layer was 10%? then we would get this probability that the building would not fall down:

``0.9*A * 0.9*B * 0.9*C * 0.9*D * 0.9*E = 59%``.

In practice, "Hard Skills" like mathematics and programming are more like skyscrapers and very few reach their full potential (in my opinion) *because* defects at the lower layers prevent higher layers being built upon them. The fundamental goal of this software is to develop a method for discovering such defects as easily/rapidly as is *mathematically possible*. Once the defects are discovered, the user can then resolve them one by one, and build their skyscraper of knowledge to new heights!

# Diagram:

Let's imagine that the structure of our understanding looks like so:

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT1.png"><img src="/assets/images/StrankiDiagramForADEPT1.png"></a>
</figure>

Here the red is used to indicate skills which we *know* that we don't know (because we tried to use them and failed at the task). Blue is used to indicate skills which we are unsure of our comprehension of. In reality, with something like mathematics, this structure will be a lot wider and ***lot*** taller. But this shouldn't prevent us from using this as our example. 

Let's consider a few naive approaches to discovering the "swiss cheese holes" first, and then consider the new approach. In both naive approaches, the dependencies between there different bits of knowledge are not explicitly known, and so our meta-understanding of the subject looks more like this:

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT2.png"><img src="/assets/images/StrankiDiagramForADEPT2.png"></a>
</figure>

We do still have a general feeling for the order in which things happen, so we can maybe move from the bottom up to try and find what it is we down understand. We test the first row on the bottom in order and find this:

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT3.png"><img src="/assets/images/StrankiDiagramForADEPT3.png"></a>
</figure>

This looks promising that we understand at least some of the subject so we test the second row from the bottom in order too:

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT4.png"><img src="/assets/images/StrankiDiagramForADEPT4.png"></a>
</figure>

This seems to be helping us determine the fundamentals we have missed out on, but it looks like we've got most of them, what if from the beginning we had tested from the top instead, would that have been more informative?


<figure>
	<a href="/assets/images/StrankiDiagramForADEPT5.png"><img src="/assets/images/StrankiDiagramForADEPT5.png"></a>
</figure>

Unfortunately not!

The problem with both of these naive (and also what is currently practiced!) techniques is that they are a pure brute force approach to determining what the person knows, so it will require the user to go through *one by one* to discover the final form of their comprehension of the subject:

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT6.png"><img src="/assets/images/StrankiDiagramForADEPT6.png"></a>
</figure>

It's worth noting, that there's doesn't even exist a list of exercises for *this* level of stupidity/brute-force! The questions in textbooks are not labeled as to which core skills they are testing, so in reality the student who wants to go back and test their competencies will need to do probably 10-20x as many questions as the "ideal" scenario described above!

The key idea for Stranki is to have the dependencies mapped clearly between the different 'skills', as this prevents you having to resort to the brute force method described above and instead utilize the structure to quickly determine what the user knows.

# Example: Experience The Idea
To get a better idea about what I mean when talk about the 'structure' of knowledge or the 'dependencies' between skills, let's look at an example of eliminating the variable 'z' by combining the two equations below:

  1. 111 = 8x + 2y - 5z
  2. 75 = -3x + 3y - 3z

This would normally form part of a bigger problem, but for the sake of brevity I will keep it constrained to this part of the problem (which typically solves for all 'x', 'y', and 'z').

In order to eliminate the variable 'z', we are exercising the higher level skill "cancel an unknown from two linear equations by combining them" but this will also exercise the lower level skills of "multiplication", "expansion of brackets", "subtraction" and "addition" (to name a few).

The first step of exercising the skill "cancel an unknown from two linear equations by combining them":

  1. Choose what to multiply each equation by
     1.  Will multiply 111 = 8x + 2y - 5z, by -3
         1.  These both require an understanding that 3 * 5 = 5 * 3 and probably a lot of other stuff too!
     2.  Will multiply 75 = -3x + 3y - 3z, by -5 

-3 * 111 = -3 * (8x + 2y - 5z)
-5 * 75 = -5 * (-3x + 3y - 3z) 

  2. Combine the two equations together using addition or subtraction such that the factor multiplying 'z' will be positive in one and negative in the other
     1. Will choose to subtract equation 1 from equation 2.
        1. This requires an understanding of "subtract" both in the concrete sense of numbers and also in the more abstract sense of algebra
        2. This also requires an understanding of why you can combine equations in this way.
        3. You can probably think of more dependencies *just to do this step*!

111 * 3 - 5 * 75 = 3 * (8x + 2y - 5z) - 5 * (-3x + 3y - 3z)

  3. Perform the multiplications on the left side
     1. Understanding of the algorithm for multiplication.
        1. Ability to add numbers together
        2. Likely a knowledge of your times tables will come in handy (speed wise)

333 - 375 = 3 * (8x + 2y - 5z) - 5 * (-3x + 3y - 3z)

  4. Expand the brackets on the right side

333 - 375 = (3 * 8x + 3 * 2y - 3 * 5z) + (-5 * -3x + -5 * 3y -5 * -3z)

  5. Perform the multiplications
     1. This will require an understanding of negative * negative = positive
     2. This will require an understanding of the algorithm for multiplication
        1. This will require and understanding of single digit addition
        2. Also knowledge of your times tables will likely be helpful

333 - 375 = 24x + 6y - 15z + 15x + -15y + 15z

  6. Group the terms on the right (optional step)

333 - 375 = (24x + 15x) + (6y - 15y) + (15z - 15z)

  7. Perform the additions and subtractions on the result of the multiplications
     1. This requires double and single digit addition and subtraction on the right
     2. This requires triple digit subtraction on the left 

-42 = 39x - 9y

  8. Make the constant term positive
     1. Know that this is a convention
     2. Know to change x to the right once it is negative (another convention)

42 = 9y - 39x

We could go *even* deeper on the dependencies like "be able to count to 10", or something like that, but I've left that out because my main point was to illustrate what I *mean* when I say that skill 'A' depends on skill 'B'. It means that skill 'A' actively and completely relies on the *use* of skill 'B'. So for example, 'multiply three digit numbers by hand' relies on the *use* of the skill 'add two numbers together'. So it can be said that *if* you know how to 'multiply three digit numbers by hand' *then* you know how to 'add two numbers together'. It can also thus be said that *if* you do not know how to 'add two numbers together' *then* you do not know how to 'multiply three digit numbers by hand'.

This is ***the key*** to Stranki. It is so simple, but the *absence* of such simple information has led to a terribly stupid way of doing things.

# Full Technical
## (The Actual Idea!)
### You'll finally see the actual idea at the end of this section, so hang in there!

So, now that we can see why dependencies are so important and also what they are, let's consider a few ways of determining the state (understood or not understood) of the nodes in the skill dependency tree:

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT7.png"><img src="/assets/images/StrankiDiagramForADEPT7.png"></a>
</figure>

## #1: Top Down
In this mode we start from the top and work our way down it's brute force for the first two levels of the dependency tree. 

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT8.png"><img src="/assets/images/StrankiDiagramForADEPT8.png"></a>
</figure>

But then when we test our understanding of 'j', we find that we understand it!

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT9.png"><img src="/assets/images/StrankiDiagramForADEPT9.png"></a>
</figure>

This is super informative because it must also mean we understand 'p', because 'p' is required to understand 'j':

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT10.png"><img src="/assets/images/StrankiDiagramForADEPT10.png"></a>
</figure>

But we can also apply this reasoning to 'v' and then 'B' too!

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT11.png"><img src="/assets/images/StrankiDiagramForADEPT11.png"></a>
</figure>

So for the price of one skill we have determined four! That's more like it!

We then test our understanding of 'k' and find that we understand 'k' too:

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT12.png"><img src="/assets/images/StrankiDiagramForADEPT12.png"></a>
</figure>

Which then gives us 'q' for free, as it is required to understand 'k'. 

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT13.png"><img src="/assets/images/StrankiDiagramForADEPT13.png"></a>
</figure>

We then continue on much the same like so:

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT14.png"><img src="/assets/images/StrankiDiagramForADEPT14.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT15.png"><img src="/assets/images/StrankiDiagramForADEPT15.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT16.png"><img src="/assets/images/StrankiDiagramForADEPT16.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT17.png"><img src="/assets/images/StrankiDiagramForADEPT17.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT18.png"><img src="/assets/images/StrankiDiagramForADEPT18.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT19.png"><img src="/assets/images/StrankiDiagramForADEPT19.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT20.png"><img src="/assets/images/StrankiDiagramForADEPT20.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT21.png"><img src="/assets/images/StrankiDiagramForADEPT21.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT22.png"><img src="/assets/images/StrankiDiagramForADEPT22.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT23.png"><img src="/assets/images/StrankiDiagramForADEPT23.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT24.png"><img src="/assets/images/StrankiDiagramForADEPT24.png"></a>
</figure>

## #2: Bottom Up

We seemed to have a bit of a slow "brute force" start with Top-Down, what if we did bottom up instead?

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT25.png"><img src="/assets/images/StrankiDiagramForADEPT25.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT26.png"><img src="/assets/images/StrankiDiagramForADEPT26.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT27.png"><img src="/assets/images/StrankiDiagramForADEPT27.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT28.png"><img src="/assets/images/StrankiDiagramForADEPT28.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT29.png"><img src="/assets/images/StrankiDiagramForADEPT29.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT30.png"><img src="/assets/images/StrankiDiagramForADEPT30.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT31.png"><img src="/assets/images/StrankiDiagramForADEPT31.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT32.png"><img src="/assets/images/StrankiDiagramForADEPT32.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT33.png"><img src="/assets/images/StrankiDiagramForADEPT33.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT34.png"><img src="/assets/images/StrankiDiagramForADEPT34.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT35.png"><img src="/assets/images/StrankiDiagramForADEPT35.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT36.png"><img src="/assets/images/StrankiDiagramForADEPT36.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT37.png"><img src="/assets/images/StrankiDiagramForADEPT37.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT38.png"><img src="/assets/images/StrankiDiagramForADEPT38.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT39.png"><img src="/assets/images/StrankiDiagramForADEPT39.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT40.png"><img src="/assets/images/StrankiDiagramForADEPT40.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT41.png"><img src="/assets/images/StrankiDiagramForADEPT41.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT42.png"><img src="/assets/images/StrankiDiagramForADEPT42.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT43.png"><img src="/assets/images/StrankiDiagramForADEPT43.png"></a>
</figure>

## #3: Guaranteed Reward

There are awesome moments in both of these approaches where because of the known structure/dependencies of the skills, we can use the fact that we've validated that we know a skill to imply we know its dependencies or vice versa, where the fact that we don't know a skill means we can imply that we don't know the skills which depend on knowing this skill.

Lets write two numbers on each of the skills in the skill dependency tree. The first number will be the number of skills which depend on that skill and the second number will be the number of skills that skill depends on itself

## Full Version With All Steps:

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT44.png"><img src="/assets/images/StrankiDiagramForADEPT44.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT45.png"><img src="/assets/images/StrankiDiagramForADEPT45.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT46.png"><img src="/assets/images/StrankiDiagramForADEPT46.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT47.png"><img src="/assets/images/StrankiDiagramForADEPT47.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT48.png"><img src="/assets/images/StrankiDiagramForADEPT48.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT49.png"><img src="/assets/images/StrankiDiagramForADEPT49.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT50.png"><img src="/assets/images/StrankiDiagramForADEPT50.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT51.png"><img src="/assets/images/StrankiDiagramForADEPT51.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT52.png"><img src="/assets/images/StrankiDiagramForADEPT52.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT53.png"><img src="/assets/images/StrankiDiagramForADEPT53.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT54.png"><img src="/assets/images/StrankiDiagramForADEPT54.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT55.png"><img src="/assets/images/StrankiDiagramForADEPT55.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT56.png"><img src="/assets/images/StrankiDiagramForADEPT56.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT57.png"><img src="/assets/images/StrankiDiagramForADEPT57.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT58.png"><img src="/assets/images/StrankiDiagramForADEPT58.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT59.png"><img src="/assets/images/StrankiDiagramForADEPT59.png"></a>
</figure>


<figure>
	<a href="/assets/images/StrankiDiagramForADEPT50.png"><img src="/assets/images/StrankiDiagramForADEPT50.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT51.png"><img src="/assets/images/StrankiDiagramForADEPT51.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT52.png"><img src="/assets/images/StrankiDiagramForADEPT52.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT53.png"><img src="/assets/images/StrankiDiagramForADEPT53.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT54.png"><img src="/assets/images/StrankiDiagramForADEPT54.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT55.png"><img src="/assets/images/StrankiDiagramForADEPT55.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT56.png"><img src="/assets/images/StrankiDiagramForADEPT56.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT57.png"><img src="/assets/images/StrankiDiagramForADEPT57.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT58.png"><img src="/assets/images/StrankiDiagramForADEPT58.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT59.png"><img src="/assets/images/StrankiDiagramForADEPT59.png"></a>
</figure>


<figure>
	<a href="/assets/images/StrankiDiagramForADEPT60.png"><img src="/assets/images/StrankiDiagramForADEPT60.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT61.png"><img src="/assets/images/StrankiDiagramForADEPT61.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT62.png"><img src="/assets/images/StrankiDiagramForADEPT62.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT63.png"><img src="/assets/images/StrankiDiagramForADEPT63.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT64.png"><img src="/assets/images/StrankiDiagramForADEPT64.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT65.png"><img src="/assets/images/StrankiDiagramForADEPT65.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT66.png"><img src="/assets/images/StrankiDiagramForADEPT66.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT67.png"><img src="/assets/images/StrankiDiagramForADEPT67.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT68.png"><img src="/assets/images/StrankiDiagramForADEPT68.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT69.png"><img src="/assets/images/StrankiDiagramForADEPT69.png"></a>
</figure>


<figure>
	<a href="/assets/images/StrankiDiagramForADEPT70.png"><img src="/assets/images/StrankiDiagramForADEPT70.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT71.png"><img src="/assets/images/StrankiDiagramForADEPT71.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT72.png"><img src="/assets/images/StrankiDiagramForADEPT72.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT73.png"><img src="/assets/images/StrankiDiagramForADEPT73.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT74.png"><img src="/assets/images/StrankiDiagramForADEPT74.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT75.png"><img src="/assets/images/StrankiDiagramForADEPT75.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT76.png"><img src="/assets/images/StrankiDiagramForADEPT76.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT77.png"><img src="/assets/images/StrankiDiagramForADEPT77.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT78.png"><img src="/assets/images/StrankiDiagramForADEPT78.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT79.png"><img src="/assets/images/StrankiDiagramForADEPT79.png"></a>
</figure>


<figure>
	<a href="/assets/images/StrankiDiagramForADEPT80.png"><img src="/assets/images/StrankiDiagramForADEPT80.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT81.png"><img src="/assets/images/StrankiDiagramForADEPT81.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT82.png"><img src="/assets/images/StrankiDiagramForADEPT82.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT83.png"><img src="/assets/images/StrankiDiagramForADEPT83.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT84.png"><img src="/assets/images/StrankiDiagramForADEPT84.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT85.png"><img src="/assets/images/StrankiDiagramForADEPT85.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT86.png"><img src="/assets/images/StrankiDiagramForADEPT86.png"></a>
</figure>

## Short Version With Progress Only

In this version, there is only one picture given per question answered by the user. This was not done with the Top-Down or Bottom-Up or 'unstructure' approaches because it would have been extremely tedious!

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT51.png"><img src="/assets/images/StrankiDiagramForADEPT51.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT53.png"><img src="/assets/images/StrankiDiagramForADEPT53.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT55.png"><img src="/assets/images/StrankiDiagramForADEPT55.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT57.png"><img src="/assets/images/StrankiDiagramForADEPT57.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT60.png"><img src="/assets/images/StrankiDiagramForADEPT60.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT63.png"><img src="/assets/images/StrankiDiagramForADEPT63.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT65.png"><img src="/assets/images/StrankiDiagramForADEPT65.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT69.png"><img src="/assets/images/StrankiDiagramForADEPT69.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT72.png"><img src="/assets/images/StrankiDiagramForADEPT72.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT76.png"><img src="/assets/images/StrankiDiagramForADEPT76.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT78.png"><img src="/assets/images/StrankiDiagramForADEPT78.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT79.png"><img src="/assets/images/StrankiDiagramForADEPT79.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT82.png"><img src="/assets/images/StrankiDiagramForADEPT82.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT83.png"><img src="/assets/images/StrankiDiagramForADEPT83.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT84.png"><img src="/assets/images/StrankiDiagramForADEPT84.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT85.png"><img src="/assets/images/StrankiDiagramForADEPT85.png"></a>
</figure>

<figure>
	<a href="/assets/images/StrankiDiagramForADEPT86.png"><img src="/assets/images/StrankiDiagramForADEPT86.png"></a>
</figure>


# Conclusion

There is ***a lot left*** to do to make this "good idea" into "useful software". I won't go into the details as I'm sure you can come up with ideas yourself, but regardless I do think the fundamental *gist* of the idea has real potential, and I'm looking forward to pursuing it when my main side project is done (which might be a year or more away!).
