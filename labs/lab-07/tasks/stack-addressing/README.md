---
nav_order: 3
parent: Lab 7 - The Stack
---

# Task: Stack Addressing

The `stack-addressing.asm` program in the lab's archive allocates and initializes two local variables on the stack:

- an array of natural numbers from 1 to `NUM`
- a string "Bob has corn".

1. Replace each `push` instruction with an equivalent sequence of instructions.
1. Print the addresses and values on the stack in the interval `[esp, ebp]` (from low addresses to high addresses) byte by byte.
1. Print the string allocated on the stack byte by byte and explain how it looks in memory.
Think about where you should start displaying and when you should stop.
1. Print the vector allocated on the stack element by element.
Think about where you should start displaying and what size each element has.

> **NOTE:** After a successful implementation, the program should display something similar to the following output (it won't be exactly the same, stack memory addresses may differ):
>
>```c
>0xffcf071b: 65
>0xffcf071c: 110
>0xffcf071d: 97
>0xffcf071e: 32
>0xffcf071f: 97
>...
>0xffcf0734: 4
>0xffcf0735: 0
>0xffcf0736: 0
>0xffcf0737: 0
>0xffcf0738: 5
>0xffcf0739: 0
>0xffcf073a: 0
>0xffcf073b: 0
>Bob has corn
>1 2 3 4 5
>```
>
> Explain the significance of each byte.
> Why are they arranged in that particular order?
> Why are some bytes 0?
>
> **TIP:** Remember that ASCII character codes are represented as decimal values.
Remember the order in which the bytes of a larger number are stored: review the section **Order of representation of numbers larger than one byte** from Lab 01.

If you're having difficulties solving this exercise, go through [this](../../reading/stack.md) reading material
