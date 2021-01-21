---
title: "Writing an Operating System for the STM32l476xx"
categories:
excerpt: "An Operating System I wrote in ARMv7 for the STM32l476 Disco Board"
tags:
  - nasm
  - ARMv7
  - comp2300
  - assembly
---
<figure>
	<a href="/assets/images/discoboardOS.jpg"><img src="/assets/images/discoboardOS.jpg"></a>
</figure>
I wrote this dinky little operating system for the final lab (11) of [comp2300](https://web.archive.org/web/20190404050858/https://cs.anu.edu.au/courses/comp2300/). It allows the existence of multiple processes sharing a single CPU and having their own individual stack. All other features of an OS (such as paging, useful syscalls, a file system, etc.) are missing. It is useful in illustrating the complexity of achieving something as simple as this, and thus the importance of abstraction in complex systems.

Here is the code:
```nasm
.syntax unified
.global main

.include "libcomp2300/macros.S"

.type main, %function
main:
  
  ldr r0, =0xDEADBEEF @ marking r0 in memory
  mov r1, #1
  mov r2, #2
  mov r3, #3
  mov r12, #4
  mov lr, #5

  bl create_process_red_led
  bl create_process_green_led

  @ enable SYSCFG clock so that our changes to the SysTick control registers
  @ take effect

  RCC_APB2ENR_set 0
  @ enable SysTick, set interrupt trigger, and set processor as clock source
  @ by setting the three least-significant bits in the SysTick Control and Status
  @ Register (SYST_CSR), Section B3.3.3 on p677 of the ARMv7-M reference manual

  ldr r0, =0xE000E010 @the address of the SysTick timer controll and status register
  ldr r1, =#7
  ldr r2, [r0]
  orr r2, r1          @changing the bits
  str r2, [r0]        @sending them back

  ldr r0, =0xE000E014 @the address of the SysTick reload value register
  ldr r1, =#4000000      @have an interupt every second ish
  str r1, [r0]        @send this info back

loop:
  nop
  b loop

.size main, .-main

.global SysTick_Handler
.type SysTick_Handler, %function
SysTick_Handler:
  @ save the current process onto it's we' stack:
  @ this is done automatically by the CPU during the interupt? Nope, not permanantely.
  nop
  
  @ change the index to reflect the change to the new process
  ldr r0, =process_table
  ldr r1, [r0] @ index of currently-operating process
  add r1, #1   @ increment it such as to scroll through all of them
  ldr r2, =#2  @ the total number of processes
  cmp r1, r2   @ compare the two
  ble load_new_process
  mov r1, #1 @ reset to the base address if process number is out of bounds
  @ load the new process off it's stack and continue
  load_new_process:

  ldr r0, =process_table
  str r1, [r0] @updating the process table
  lsl r1, #2   @multiply r1 by 4 such as to turn it into a byte offset
  add r0, r1   @ add the offset to the base address
  ldr r0, [r0] @ load the stack address into r0
  mov r11, sp
  mov sp, r0
  
  sub sp, #4
  pop {r0}
  msr apsr_nzcvq, r0       @ cPSR

  @ sub sp, #12
  @ pop {lr}                 @ LR
  @ add sp, #8

  sub sp, #16
  pop {r12}                @ r12
  add sp, #12

  sub sp, #20
  pop {r3}                 @ r3
  add sp, #16

  sub sp, #24
  pop {r2}                 @ r2
  add sp, #20

  sub sp, #28
  pop {r1}                 @ r1
  add sp, #24

  sub sp, #32
  pop {r0}                 @ r0
  add sp, #28

  sub sp, #8
  pop {r11}                @ pc
  add sp, #4

  @ldr r10, =0x0000000f
  @orr r11, r10

  @ ldr r0, =0xE000E010 @the address of the SysTick timer controll and status register
  @ ldr r1, =#7
  @ ldr r2, [r0]
  @ orr r2, r1          @changing the bits
  @ str r2, [r0]        @sending them back

  bx lr

  @ mov sp, r0   @ change the stack pointer to the new one 
  @ bx lr @ the values will now get automatically loaded into position

  @ @ get things moving again by applying bx to the special value 0xFFFFFFF9
  @ @ <your code goes here>
.size SysTick_Handler, .-SysTick_Handler

.data
process_table:
.word 0 @ index of currently-operating process
.word 0x20008000 @ stack pointer 1
.word 0x20007000 @ stack pointer 2
.text

.global create_process_red_led
.type create_process_red_led, %function
@ stores:
@ cPSR, PC, lr, r12, r3, r2, r1, r0
@ these get put on in the order: r0, r1, r2, r3, r12, lr, pc, cPSR
create_process_red_led:
  ldr sp, =0x20008000
  ldr r0, =0x01000000      @ cPSR
  @ldr r0, =0xAAAAAAAA
  push {r0}  
  ldr r0, =red_blink       @ PC
  @ldr r0, =0xBBBBBBBB
  push {r0}   
  @push {lr}               @ LR
  ldr r0, =0xCCCCCCCC
  push {r0}
  @push {r12}              @ r12
  ldr r0, =0xDDDDDDDD
  push {r0}
  @push {r3}               @ r3
  ldr r0, =0xEEEEEEEE
  push {r0}
  @push {r2}               @ r2
  ldr r0, =0xFFFFFFFF
  push {r0}
  @push {r1}               @ r1
  ldr r0, =0x11111111
  push {r0}
  @push {r0}               @ r0
  ldr r0, =0x22222222
  push {r0}
  @ resetting stack
  ldr sp, =0x20018000
  bx lr
.size create_process_red_led, .-create_process_red_led

.global create_process_green_led
.type create_process_green_led, %function
@ stores:
@ cPSR, PC, lr, r12, r3, r2, r1, r0
@ these get put on in the order: r0, r1, r2, r3, r12, lr, pc, cPSR
create_process_green_led:
  ldr sp, =0x20007000
  ldr r0, =0x01000000      @ cPSR
  @ldr r0, =0xAAAAAAAA
  push {r0}  
  ldr r0, =green_blink       @ PC
  @ldr r0, =0xBBBBBBBB
  push {r0}   
  @push {lr}               @ LR
  ldr r0, =0xCCCCCCCC
  push {r0}
  @push {r12}              @ r12
  ldr r0, =0xDDDDDDDD
  push {r0}
  @push {r3}               @ r3
  ldr r0, =0xEEEEEEEE
  push {r0}
  @push {r2}               @ r2
  ldr r0, =0xFFFFFFFF
  push {r0}
  @push {r1}               @ r1
  ldr r0, =0x11111111
  push {r0}
  @push {r0}               @ r0
  ldr r0, =0x22222222
  push {r0}
  @ resetting stack
  ldr sp, =0x20018000
  bx lr
.size create_process_green_led, .-create_process_green_led

.global green_blink
.type green_blink, %function
green_blink:
  bl green_led_init
  blink_green:
    bl green_led_toggle
    mov r0, #0
    ldr r1, =#400000
    wait_a_while1:
      add r0, #1
      cmp r1, r0
      blt blink_green
      b wait_a_while1
.size green_blink, .-green_blink

.global red_blink
.type red_blink, %function
red_blink:
  bl red_led_init
  blink_red:
    bl red_led_toggle
    mov r0, #0
    ldr r1, =#400000
    wait_a_while:
      add r0, #1
      cmp r1, r0
      blt blink_red
      b wait_a_while
.size red_blink, .-red_blink
```