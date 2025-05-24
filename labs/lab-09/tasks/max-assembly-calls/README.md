---
nav_order: 2
parent: Lab 9 - The C - Assembly Interaction
---

# Task: Maximum Calculation in C with Call from Assembly

Enter the directory `tasks/max-assembly-calls/support`.
Here, you have the `get_max()` function implemented in `max.c` that returns
the maximum value inside an array of `uint32_t` elements.
This function is invoked in `main.asm` and the result is printed to the standard
output.

Modify the `get_max()` in such way that it also stores the index at which the
element was found.
Make the necessary changes in `main.asm` and display both the maximum value
*and* its position.

> **NOTE:** Yes, this is the previous exercise in reverse.

If you're having difficulties solving this exercise, go through
[this relevant section](../../reading/calling-convention.md) of the reading
material.
