---
title: "An Approachable Analogy For a Computer"
categories:
excerpt: "Computer Organisation and Program Execution -> Kitchen Organisation and Recipe Completion"
tags:
  - comp2300
  - analogies
  - hardware
  - STM32
  - ARMv7
  - embedded hardware
  - assembly
---
Computer programs, and *especially* assembly code are like recipes. They are an explicit sequence of actions done in order to reach a goal. It’s quite nice then to find out that the inner working of a computer maps nearly one to one with those of a restaurant. You have a CPU at the centre of the operation. This is the cook! You have a person who mans the front desk and takes orders from customers (this is the EXTI). Second you have another person who manages what the cook is doing by telling when which order to complete, if something needs to come out of the oven e.t.c. (this is the NVIC). So far we have: cook, front desk, manager. Not too bad eh? Here’s what a typical round in the restaurant looks like. A customer comes to the front desk (EXTI) and places their order. The front desk (EXTI) then writes it down nice and neatly, giving it a table number and a priority from 0 to 16. The priority is based on how bad it will be if the person doesn’t get served first, so Mafia Don’s and those near starvation get to go first (0’th priority). This well formatted order is then passed to the manager (NVIC). The manager will look at the priority of the order and the priority of the order currently being processed. If the priority of the order currently being filled is not as urgent as the one just added, the manager will swoop in, save where the cook was in his recipe book and where all his tools where and whatever else by writing it down in the margin of the recipe. Next the manager will then give the cook the new (more important) order and say “GO!”. The manager (NVIC) doesn’t only do this, sometimes the cook will makes cakes or other recipes that take a long time. In this case the cook will typically set a timer (SysTick) and a reference to the order it was for to the manager (NVIC).  This means the cook can go prepare another order while waiting and the manager (NVIC) will interrupt when the timer goes off save what the cook was doing and redirect them to the cakes in the oven. However, some orders may never get interrupted like this because they are too important (like those for *The Don*). Here’s a ‘wee picture:

<figure>
	<a href="/assets/images/CPU-cooking-analogy.png"><img src="/assets/images/CPU-cooking-analogy.png"></a>
</figure>

This was the “big picture”, it should help serve as a scaffold for further information, and like any scaffold you will discard it after finishing this “level” in your conceptual “building”.