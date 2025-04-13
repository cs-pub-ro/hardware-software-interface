---
nav_order: 3
parent: Lab 7 - The Stack
---

# Task: Stack Addressing

The `stack-addressing.asm` program in the lab's archive allocates and initializes two local variables on the stack:

- an array of natural numbers from 1 to `NUM`
- a string "Bob has corn".

1. Replace each `push` instruction with an equivalent sequence of instructions.
1. Print the addresses and values on the stack in the interval `[esp, ebp]` (from high addresses to low addresses) dword by dword.
1. Print the string allocated on the stack byte by byte and explain how it looks in memory.
Think about where you should start displaying and when you should stop.
1. Print the vector allocated on the stack element by element.
Think about where you should start displaying and what size each element has.

After a successful implementation, the program should display something similar to the following output (it won't be exactly the same, stack memory addresses may differ):
>
>```c
>Bob has corn
>0xffe804cc: 0xf7d91519
>0xffe804c8: 0x5
>0xffe804c4: 0x4
>0xffe804c0: 0x3
>0xffe804bc: 0x2
>0xffe804b8: 0x1
>0xffe804b4: 0x0
>0xffe804b0: 0x6e726f63
>0xffe804ac: 0x20736168
>0xffe804a8: 0x20626f42
>Bob has corn
>1 2 3 4 5
>```
>
> Explain the significance of each byte.
> Why are they arranged in that particular order?
>
> **TIP:** Remember that ASCII character codes are represented as decimal values.
Remember the order in which the bytes of a larger number are stored: review the section **Order of representation of numbers larger than one byte** from Lab 01.

If you're having difficulties solving this exercise, go through [this](../../reading/stack.md) reading material

## Checker

To run the checker, go into the `tests` directory located in `src`, then type `make check`.
A successful output of the checker should look like this :

```console
student@os:~/.../lab-07/tasks/reverse-array/tests$ make && make check
test_stack_addresing           .......................... passed ... 100

========================================================================

Total:                                                           100/100
```
