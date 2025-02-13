---
nav_order: 1
parent: Lab 9 - The C - Assembly Interaction
---

# Task: Maximum Calculation in Assembly with Call from C

Navigate to `tasks/max-c-calls/support` and open `main.c`

In this subdirectory you can find an implementation of calculating the maximum of a number where the `main()` function is defined in C from which the `get_max()` function defined in assembly language is called.

Trace the code in the two files and how the function arguments and return value are passed.

Compile and run the program.
To compile it run the command:

```bash
make
```

Then run the resulting executable:

```bash
./mainmax
```

> **IMPORTANT:**
> Pay attention to understanding the code before proceeding to the next exercise.
>
> **IMPORTANT:**
> The return value of a function is placed in the `eax` register.

## Maximum Computation Extension in Assembly with Call from C

Extend the program from the previous exercise (in assembly language and C) so that the `get_max()` function now has the signature `unsigned int get_max(unsigned int *arr, unsigned int len, unsigned int *pos)`.
The third argument to the function is the address where the position in the vector on which the maximum is found will be held.

The position in the vector on which the maximum is found will also be displayed on display.

> **TIP:**
> To hold the position, it is best to define a local variable `pos` in the `main()` function in the C file (`main.c`) in the form
>
> ```C
> unsigned int pos;
> ```
>
> and call the `get_max()` function in the form:
>
> ```C
> max = get_max(arr, 10, &pos);
> ```

If you're having difficulties solving this exercise, go through [this relevant section](../../readiing/stack-c-asm.md) reading material.
