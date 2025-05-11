---
nav_order: 1
parent: Lab 5 - Registers and Memory Addressing
---

# Task: Division of Two Numbers

You will solve this exercise starting from the `divide_64.asm` file located in the `tasks/div/support` directory.

In the `divide.asm` program, you'll implement division operations for various data sizes.
Update the area marked with `TODO` in the code to perform the division of the numbers mentioned in the comments.

Similar to the `mul` instruction, the registers where the dividend is placed vary depending on the representation size of the divisor.
The divisor is passed as an argument to the `div` mnemonic.

> **TIP**: The division operation works as follows for different sizes:
>
> **For byte (8-bit) division:**
>
> - The dividend is placed in the `ax` register
> - The divisor is 8 bits (e.g., `bl`)
> - The quotient is placed in `al`
> - The remainder is placed in `ah`
>
> **For word (16-bit) division:**
>
> - The dividend is arranged in the `dx:ax` pair (high part in `dx`, low part in `ax`)
> - The divisor is 16 bits (e.g., `bx`)
> - The quotient is placed in `ax`
> - The remainder is placed in `dx`
>
> **For double word (32-bit) division:**
>
> - The dividend is arranged in the `edx:eax` pair (high part in `edx`, low part in `eax`)
> - The divisor is 32 bits (e.g., `ebx`)
> - The quotient is placed in `eax`
> - The remainder is placed in `edx`
>
> **For quad word (64-bit) division:**
>
> - The dividend is arranged in the `rdx:rax` pair (high part in `rdx`, low part in `rax`)
> - The divisor is 64 bits (e.g., `rbx`)
> - The quotient is placed in `rax`
> - The remainder is placed in `rdx`
>
> **TIP**: If the program gives you a `SIGFPE`.
Arithmetic exception," you most likely forgot to initialize the upper part of the dividend (`ah`, `dx`, `edx`, `rdx`).

## Testing

To test the implementation, enter the `tests/` directory and run:

```console
make check
```

In case of a correct solution, you will get an output such as:

```text
test_first_div                   ........................ passed ...  25
test_second_div                  ........................ passed ...  25
test_third_div                   ........................ passed ...  25
test_fourth_div                  ........................ passed ...  25

========================================================================

Total:                                                           100/100
```

If you're having difficulties solving this exercise, go through [this](../../reading/registers.md) reading material.
