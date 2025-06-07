---
nav_order: 4
parent: Lab 9 - The C - Assembly Interaction
---

# Task: Corrupt Stack Frame Debugging

Navigate to `tasks/stack-frame/support` and open `main.c`.
There you will find a program that displays the string *"Hello world!"*.
The first part of the message is printed by calling the `print_hello()` function
(implemented in assembly).

Compile and run the program.
What do you notice?
The printed message is not as expected because the assembly code is missing an
instruction.

Use GDB to inspect the address at the top of the stack before executing the
`ret` statement in the `print_hello()` function.
What does it point to?

Track the values of the `RBP` and `RSP` registers during the execution of this
function.
What should be at the top of the stack after execution of the `leave` statement?

Find the missing instruction and rerun the program.
The output should be *"Hello world!"* instead of simply *"Hello!"*.

> **TIP:** In order to restore the stack to its state at the start of the
           current function, the `leave` statement relies on the function's
           pointer frame having been set.

If you're having difficulties solving this exercise, go through
[this relevant section](../../reading/calling-convention.md) of the reading
material.
