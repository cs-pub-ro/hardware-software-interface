---
nav_order: 2
parent: Lab 7 - The Stack
---

# Task: Reverse Array

Building on the `reverse-array.asm` exercise, implement the `TODO`s without using the `mov` instruction when working with arrays, so that at the end of the program, the `output` array contains the `input` array in reverse order.

> **NOTE:** After a correct solution, the program should print:
>
>```c
> Reversed array:
> 911
> 845
> 263
> 242
> 199
> 184
> 122
>```

If you're having difficulties solving this exercise, go through [this](../../reading/stack.md) reading material

## Checker

To run the checker, go into the `tests` directory located in `src`, then type `make check`.
A successful output of the checker should look like this :

```console
student@os:~/.../lab-07/tasks/reverse-array/tests$ make && make check
test_reverse_array            ........................... passed ... 100

========================================================================

Total:                                                           100/100
```
