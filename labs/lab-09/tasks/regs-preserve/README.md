---
nav_order: 5
parent: Lab 9 - The C - Assembly Interaction
---

# Task: Keeping Records

Navigate to `tasks/regs-preserve/support` and open `main.asm`.
Here, you will find the  `print_reverse_array()` function that loops over the elements of an array and calls `printf()` for each one.

Analyze the code in `main.asm`, then compile and run the program.

What happened?
The program runs indefinitely.
That's because the `printf()` function does not preserve the value in the `RCX` register, used here as a counter.

Uncomment the lines marked `TODO1` and rerun the program.

## Troubleshooting

Uncomment the lines marked `TODO2` in the assembly file from the previous exercise.
The code sequence makes a call to the `double_array()` function, implemented in C, just before displaying the vector using the function seen earlier.
The `double_array()` function should double each element of the original array.

Compile and run the program.
Is the output as expected?
Do you get a SEGFAULT?
Investigate with GDB and take note of the Parameter Registers at the time of each function call.
One you find the problem, fix it.

> **NOTE:** We compiled `double_array.c` with -O2 optimization level to increase the probability of RDI and RSI registers being used in calculations.
> With `-O0`, the generated assembly code is much simpler and the parameter registers are most likely never used for anything other than holding the function argument values.
> In this case, the bug in `main.asm` could pass unnoticed, but the implementation would still be incorrect.

If you're having difficulties solving this exercise, go through [this relevant section](../../reading/calling-convention.md) of the reading material.
