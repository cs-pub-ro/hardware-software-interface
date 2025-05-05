---
nav_order: 2
parent: Lab 9 - The C - Assembly Interaction
---

# Task: Corrupt Stack Frame Debugging

Navigate to `tasks/stack-frame/support` and open `main.c`

In current subdirectory of the lab's task archive you can find a C program that implements the display of the string `Hello world!` by a call to the `print_hello()` function defined in the assembly for the first part of the message, followed by two calls to the `printf()` function directly from the C code.

Compile and run the program.
What do you notice?
The printed message is not as expected because the assembly code is missing an instruction.

Use GDB to inspect the address at the top of the stack before executing the `ret` statement in the `print_hello()` function.
What does it point to?
Track the values of the `ebp` and `esp` registers during the execution of this function.
What should be at the top of the stack after execution of the `leave` statement?

Find the missing instruction and rerun the executable.

> **TIP:**
> In order to restore the stack to its state at the start of the current function, the `leave` statement relies on the function's pointer frame having been set.

If you're having difficulties solving this exercise, go through [this relevant section](../../reading/stack-c-asm.md) reading material.
