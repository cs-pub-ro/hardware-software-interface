---
nav_order: 1
parent: Lab 5 - Registers and Memory Addressing
---

# Task: Division of Two Numbers

You will solve this exercise starting from the `divide.asm` file located in the `tasks/div/support` directory.

In the `divide.asm` program, the quotient and remainder of two numbers represented as bytes are calculated.
Update the area marked with `TODO` to perform divisions `dividend2 / divisor2` (word-type divisor) and `dividend3 / divisor3` (dword-type divisor).

Similar to the `mul` instruction, the registers where the dividend is placed vary depending on the representation size of the divisor.
The divisor is passed as an argument to the `div` mnemonic.

> **TIP**: If the divisor is of type `byte` (8 bits), the components are arranged as follows:
>
> - the dividend is placed in the `ax` register
> - the argument of the `div` instruction is 8 bits and can be represented by a register or an immediate value
> - the quotient is placed in `al`
> - the remainder is placed in `ah`
>
> If the divisor is of type `word` (16 bits), the components are arranged as follows:
>
> - the dividend is arranged in the `dx:ax` pair, meaning its `high` part is in the `dx` register, and the `low` part is in `ax`
> - the argument of the `div` instruction is 16 bits and can be represented by a register or an immediate value
> - the quotient is placed in `ax`
> - the remainder is placed in `dx`
>
> If the divisor is of type `dword` (32 bits), the components are arranged as follows:
>
> - the dividend is arranged in the `edx:eax` pair, meaning its `high` part is in the `edx` register, and the `low` part is in `eax`
> - the argument of the `div` instruction is 32 bits and can be represented by a register or an immediate value
> - the quotient is placed in `eax`
> - the remainder is placed in `edx`
>
> **TIP**: If the program gives you a `SIGFPE`.
Arithmetic exception," you most likely forgot to initialize the upper part of the dividend (`ah`, `dx`, or `edx`).

## Testing

To test the implementation, enter the `tests/` directory and run:

```console
make check
```

In case of a correct solution, you will get an output such as:

```text
test_first_div                   ........................ passed ...  33
test_second_div                  ........................ passed ...  33
test_third_div                   ........................ passed ...  34

========================================================================

Total:                                                           100/100
```

If you're having difficulties solving this exercise, go through [this](../../reading/registers.md) reading material.
