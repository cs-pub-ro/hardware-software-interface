---
parent: Lab 4 - Introduction to Assembly Language
nav_order: 1
---

# Task: Conditional Jumps

You will solve the exercises starting from the `hello_world.asm` file located in the `tasks/conditional-jumps` directory.

1. Modify the program so that the message is displayed only if the content of the `eax` register is greater than that of `ebx`.
Also, modify the values of the registers to continue displaying the message `"Hello, World!"`.

1. Modify the program to also display `"Goodbye, World!"` at the end.

1. Using jump instructions, modify the program to display `"Hello, World!"` N times, where N is given through the `ecx` register.
Avoid infinite looping.

> **TIP**: After successful completion, the program should display:
>
> ```c
> Hello, World!
> Hello, World!
> Hello, World!
> Hello, World!
> Hello, World!
> Hello, World!
> Goodbye, World!
> ```

If you're having difficulties solving this exercise, go through [this](../../reading/x86-architecture-family.md) reading material.
