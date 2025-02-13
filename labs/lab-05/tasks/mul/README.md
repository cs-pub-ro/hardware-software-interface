---
nav_order: 2
parent: Lab 5 - Registers and Memory Addressing
---

# Task: Multiplying Two Numbers

## Multiplying Two Numbers represented as Bytes

You will solve this exercise starting from the `multiply.asm` file located in the `tasks/mul/support` directory.

Go through, run, and test the code from the file `multiply.asm`.
In this program, we multiply two numbers defined as bytes.
To access them, we use a construction like `byte [register]`.

When performing multiplication, the process is as follows, as described [here](https://en.wikibooks.org/wiki/X86_Assembly/Arithmetic):

1. We place the multiplicand in the multiplicand register, meaning:
    - if we're operating on a byte (8 bits, one byte), we place the multiplicand in the `al` register;
    - if we're operating on a word (16 bits, 2 bytes), we place the multiplicand in the `ax` register;
    - if we're operating on a double word (32 bits, 4 bytes), we place the multiplicand in the `eax` register.
1. The multiplier is passed as an argument to the `mul` mnemonic.
The multiplier must have the same size as the multiplicand.
1. The result is placed in two registers (the high part and the low part).

## Multiplying Two Numbers represented as Words / Double Words

Update the area marked with `TODO` in the file `multiply.asm` to allow multiplication of `word` and `dword` numbers, namely `num1_dw` with `num2_dw`, and `num1_dd` with `num2_dd`.

> **TIP**: For multiplying word numbers (16 bits), the components are arranged as follows:
>
> - Place the multiplicand in the `ax` register.
> - The argument of the `mul` instruction, the multiplier (possibly another register), is 16 bits (either a value or a register such as `bx`, `cx`, `dx`).
> - The result of the multiplication is arranged in the pair `dx:ax`, where the high part of the result is in the `dx` register, and the low part of the result is in the `ax` register.
>
> For multiplying `dword` numbers (32 bits), the components are arranged as follows:
>
> - Place the multiplicand in the `eax` register.
> - The argument of the `mul` instruction, the multiplier (possibly another register), is 32 bits (either a value or a register such as `ebx`, `ecx`, `edx`).
> - The result of the multiplication is arranged in the pair `edx:eax`, where the high part of the result is in the `edx` register, and the low part of the result is in the `eax` register.
>
> **NOTE**: When displaying the result, use the `PRINTF32` macro to display the two registers containing the result:
>
> - Registers `dx` and `ax` for multiplying word numbers.
> - Registers `edx` and `eax` for multiplying dword numbers.

If you're having difficulties solving this exercise, go through [this](../../reading/registers.md) reading material.
