---
title: "Playing the Harry Potter Theme With Assembly"
categories:
excerpt: "A program I wrote in ARMv7 for the STM32l476 *Disco Board*"
tags:
  - nasm
  - ARMv7
  - comp2300
  - assembly
  - Complete
---
<figure>
	<a href="/assets/images/harrypotterdiscoboard.jpg"><img src="/assets/images/harrypotterdiscoboard.jpg"></a>
</figure>
I wrote this deceptively simple assembly program for the second assignment of [comp2300](https://web.archive.org/web/20190404050858/https://cs.anu.edu.au/courses/comp2300/). We were asked to get our [disco boards](/assets/images/discoboard-new.jpg) to "sing" any tune that took our fancy. The first problem being that we were required to hard code everything ourselves. The second problem was that we were doing it in [assembly](https://en.wikipedia.org/wiki/Assembly_language). The third was that it took about 30 seconds to run your code, which meant debugging was abysmal.

For the curious, or perhaps the masochistic, here is the code:
```nasm
.syntax unified
.global main
.type main, %function

main:
    bl init @ do any once-off initialisation stuff first
    ldr r2, =harry_potter_start
    ldr r3, =harry_potter_end
    main_sec:
    ldr r0, [r2], 4
    ldr r1, [r2], 4
    cmp r2, r3
    ble continue
    ldr r2, =harry_potter_start
    b main_sec
    continue:
    bl play_note
    b main_sec
  loop:
  nop
  b loop

play_note:
  push {r2, r3, r4, lr}
  @ r0 = 1/2 period of tone. 
  @ calculate with (1/f)/(1/48000)*44739/2
  @ ldr r0, =#1220161
  @ r1 = desired time (in Killoticks 45 = 44739 ticks = 1/48000 seconds)
  @ caltulate with (t/(1/48000))*45
  @ ldr r1, =#2080000
  @ r2 = total timer for period 
  mov r2, 0
  @ r3 = timer for tone up 
  mov r3, 0
  @ r4 = timer for tone down
  mov r4, 0


  @ Push all the registers and the link register onto the stack so
  @   they can be restored when the play_note function is finished
  @ Set r2 to zero , r3 and r4 to 1/2 period of tone (r0)
    main_loop:
      @ increment r2 by 45 Killoticks, if r2 > r1 branch to play_note_return
      add r2, 45
      cmp r1, r2
      blt play_note_return

      up_tone:
      @ if r3 > 0 play Up tone and branch to play_tone else branch to down_tone:
      cmp r3, #0
      blt down_tone
      push {r0}
      ldr r0, =#44739
      sub r3, r0
      push {r1, r2, r3, r4, lr}
      mov r0, 0x7FFF
      bl BSP_AUDIO_OUT_Play_Sample @play the audio sample
      pop  {r1, r2, r3, r4, lr}
      pop {r0}
      b main_loop

      down_tone:
      @ if r4 > 0 play Down tone and branch to play_tone else add r0 to r3 & r4
      cmp r4, #0
      blt set_periods
      push {r0}
      ldr r0, =#44739
      sub r4, r0
      push {r1, r2, r3, r4, lr}
      mov r0, 0x8000
      bl BSP_AUDIO_OUT_Play_Sample @play the audio sample
      pop  {r1, r2, r3, r4, lr}
      pop {r0}    
      b main_loop

      set_periods:
      add r3, r0
      add r4, r0
      b main_loop
      
    play_note_return:
    pop {r2, r3, r4, pc}

.data
harry_potter_start:
.word 3656267, 1440000, 2739122, 2160000, 2303364, 720000, 2440309, 1440000, 2739122, 3240000, 1828165, 720000, 2052052, 4680000, 2440309, 4320000, 2739122, 2160000, 2303364, 720000, 2440309, 1440000, 2902068, 2880000, 2585447, 1440000, 3656267, 720000, 3656267, 1440000, 2739122, 1440000, 2303364, 720000, 2440309, 1440000, 2739122, 2880000, 1828165, 1440000, 1537291, 2160000, 1628699, 1440000, 1725570, 2880000, 2174083, 1440000, 1725570, 2160000, 1828165, 720000, 1936858, 1440000, 3873786, 2880000, 2303364, 1440000, 2739122, 3600000, 2303364, 1440000, 1828165, 2880000, 2303364, 1440000, 1828165, 2880000, 2303364, 1440000, 1725570, 2880000, 1828165, 1440000, 1936858, 720000, 2440309, 1440000, 2303364, 2160000, 1828165, 720000, 1936858, 1440000, 3873786, 1440000, 3656267, 1440000, 1828165, 6480000, 2303364, 1440000, 1828165, 2880000, 2303364, 1440000, 1828165, 2880000, 2303364, 1440000, 1537291, 2880000, 1628699, 1440000, 1725570, 2880000, 2174083, 720000, 1725570, 2160000, 1828165, 720000, 1936858, 1440000, 3873786, 2880000, 2303364, 1440000, 2739122, 9360000
harry_potter_end:
nop
```
