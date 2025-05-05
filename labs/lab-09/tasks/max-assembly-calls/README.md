---
nav_order: 3
parent: Lab 9 - The C - Assembly Interaction
---

# Task: Maximum Calculation in C with Call from Assembly

Navigate to `tasks/max-assembly-calls/support/` and open `main.asm`

In this directory you can find an implementation of calculating the maximum of a number where the `main()` function is defined in assembly language from which the `get_max()` function defined in C is called.

Trace the code in the two files and how the function arguments and return value are passed.

Compile and run the program.

> **IMPORTANT:**
> Pay attention to understanding the code before proceeding to the next exercise.

## Extending Maximum Computation in C with Call from Assembly

Extend the program from the previous exercise (in assembly language and C) so that the `get_max()` function now has the signature `unsigned int get_max(unsigned int *arr, unsigned int len, unsigned int *pos)`.
The third argument to the function is the address where the position in the vector on which the maximum is found will be held.

The position in the vector on which the maximum is found will also be displayed on display.

> **TIP:**
> To hold the position, it is best to define a global variable in the assembly file (`main.asm`) in the `.data` section, of the form
>
> ```Assembly
> pos: dd 0
> ```
>
> This variable you will pass (by address) to the `get_max()` call and by value to the `printf()` call for display.
>
> For display modify the `print_format` string and the `printf()` call in the assembly file (`main.asm`) to allow two values to be displayed: maximum and position.
>

If you're having difficulties solving this exercise, go through [this relevant section](../../reading/stack-c-asm.md) reading material.
