---
nav_order: 4
parent: Lab 9 - The C - Assembly Interaction
---

# Task: Keeping Records

Navigate to `tasks/regs-preserve/support` and open `main.asm`

In this subdirectory of the lab's task repository you will find the `print_reverse_array()` function implemented by a simple loop that makes repeated calls of the `printf()` function.

Follow the code in the `main.asm` file, compile and run the program.
What happened?
The program runs indefinitely.
This is because the `printf()` function does not preserve the value in the `ecx` register, used here as a counter.

Uncomment the lines marked `TODO1` and rerun the program.

## Troubleshooting SEGFAULT

Decompose the lines marked `TODO2` in the assembly file from the previous exercise.
The code sequence makes a call to the `double_array()` function, implemented in C, just before displaying the vector using the function seen earlier.

Compile and run the program.
To debug the segfault you can use the `objdump` utility to trace the assembly language code corresponding to the `double_array()` function.
Notice which of the registers used before and after the call are modified by this function.

Add the instructions for preserving and restoring the required registers to the assembly file.

After finishing the exercise and testing it manually, run the checker script in the `regs-preserve/tests/` folder to validate the result:

```console
make check
```

In case of a correct solution, you will get an output such as:

```text
test_regs_preserve    ........................ passed ...  100

Total:                                                           100/100
```

If you're having difficulties solving this exercise, go through [this relevant section](../../reading/memory-layout-c-asm.md) reading material.
