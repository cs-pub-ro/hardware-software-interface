---
nav_order: 1
parent: Lab 9 - The C - Assembly Interaction
---

# Task: Maximum Calculation in Assembly with Call from C

Navigate to `tasks/max-c-calls/support` and open `main.c`.
The `get_max()` function that it invokes in order to find the maximum value in
an array is implemented in `max.asm`.

Trace the code in both files and notice how the generated assembly code from
`main()` performs the function call.
Specifically, look at how the arguments are passed and how the return value is
interpreted.

> **IMPORTANT:** Pay attention and understand the code before proceeding to the
                 next exercise.

## Maximum Computation Extension in Assembly with Call from C

Extend the program from the previous exercise (in assembly language and C) so
that the `get_max()` function now has the signature
`unsigned int get_max(unsigned int *arr, unsigned int len, unsigned int *pos)`.
The third argument to the function is a reference to a variable where the
maximum's position should be stored.

The position in the vector on which the maximum is found should also be
displayed to `stdout`.

If you're having difficulties solving this exercise, go through
[this relevant section](../../reading/calling-convention.md) of the reading
material.
