---
nav_order: 2
parent: Lab 5 - Registers and Memory Addressing
---

# Task: Multiplying Two Numbers

## Multiplying Two Numbers of Different Sizes

You will solve this exercise starting from the `multiply.asm` file located in the `tasks/mul/support` directory.

Go through, run, and test the code from the file `multiply.asm`.
In this program, we multiply two numbers defined as bytes.
To access them, we use a construction like `byte [register]`.

When performing multiplication, the process is as follows, as described [here](https://en.wikibooks.org/wiki/X86_Assembly/Arithmetic):

1. We place the multiplicand in the multiplicand register, meaning:
    - if we're operating on a byte (8 bits, one byte), we place the multiplicand in the `al` register;
    - if we're operating on a word (16 bits, 2 bytes), we place the multiplicand in the `ax` register;
    - if we're operating on a double word (32 bits, 4 bytes), we place the multiplicand in the `eax` register.
    - if we're operating on a quad word (64 bits, 8 bytes), we place the multiplicand in the `rax` register.
1. The multiplier is passed as an argument to the `mul` mnemonic.
The multiplier must have the same size as the multiplicand.
1. The result is placed in two registers (the high part and the low part).

## Implementing Multiplication for Different Data Types

The file `multiply.asm` already contains the code for multiplying bytes.
Update the area marked with `TODO` to implement multiplication for word (16-bit), double word (32-bit), and quad word (64-bit) numbers.

You'll need to multiply:

- `num1_w` with `num2_w` (word)
- `num1_d` with `num2_d` (double word)
- `num1_q` with `num2_q` (quad word)

> **TIP**: For each data type, the components are arranged as follows:
>
> **For word (16-bit) multiplication:**
>
> - Place the multiplicand in the `ax` register.
> - The multiplier should be 16 bits (e.g., `bx`).
> - The result will be in `dx:ax` (high part in `dx`, low part in `ax`).
>
> **For double word (32-bit) multiplication:**
>
> - Place the multiplicand in the `eax` register.
> - The multiplier should be 32 bits (e.g., `ebx`).
> - The result will be in `edx:eax` (high part in `edx`, low part in `eax`).
>
> **For quad word (64-bit) multiplication:**
>
> - Place the multiplicand in the `rax` register.
> - The multiplier should be 64 bits (e.g., `rbx`).
> - The result will be in `rdx:rax` (high part in `rdx`, low part in `rax`).
>
> **NOTE**: When displaying the results, use the appropriate format specifiers with the PRINTF64 macro:
>
> - For word multiplication: `PRINTF64 \`Result is: 0x%hx%hx\n\x0\`, rdx, rax`
> - For double word multiplication: `PRINTF64 \`Result is: 0x%x%x\n\x0\`, rdx, rax`
> - For quad word multiplication: `PRINTF64 \`Result is: 0x%lx%016lx\n\x0\`, rdx, rax`

## Testing

To test the implementation, enter the tests/ directory and run:

```console
make check
```

In case of a correct solution, you will get an output such as:

```text
test_byte_mul                    ........................ passed ...  25
test_short_mul                    ........................ passed ...  25
test_int_mul                   ........................ passed ...  25
test_long_mul                   ........................ passed ...  25

========================================================================

Total:                                                           100/100
```

If you're having difficulties solving this exercise, go through [this](../../reading/registers.md) reading material.
