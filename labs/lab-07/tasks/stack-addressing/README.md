---
nav_order: 3
parent: Lab 7 - The Stack
---

# Task: Stack Addressing

The `stack-addressing.asm` program in the lab's archive allocates and initializes two local variables on the stack:

- an array of natural numbers from 1 to `NUM`
- a string "Bob has corn".

1. Replace each `push` instruction with an equivalent sequence of instructions.
1. Print the addresses and values on the stack in the interval `[rsp, rbp]` (from high addresses to low addresses) qword by qword.
1. Print the string allocated on the stack byte by byte and explain how it looks in memory.
Think about where you should start displaying and when you should stop.
1. Print the vector allocated on the stack element by element.
Think about where you should start displaying and what size each element has.

After a successful implementation, the program should display something similar to the following output (it won't be exactly the same, stack memory addresses may differ):
>
>```c
>Anthony is very handsome
>0x10dcdff8: 0x6182a1ca
>0x10dcdff0: 0x5
>0x10dcdfe8: 0x4
>0x10dcdfe0: 0x3
>0x10dcdfd8: 0x2
>0x10dcdfd0: 0x1
>0x10dcdfc8: 0x0
>0x10dcdfc0: 0x646e6168
>0x10dcdfb8: 0x76207369
>0x10dcdfb0: 0x68746e41
>Anthony is very handsome
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
