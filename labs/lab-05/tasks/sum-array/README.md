---
nav_order: 4
parent: Lab 5 - Registers and Memory Addressing
---

# Task: Sum of Elements in an Array

## Introduction

You will solve this exercise starting from the `sum-array.asm` file located in the `tasks/sum-array/support` directory.

In the `sum-array.asm` file the sum of elements in an array of bytes (8-bit representation) is calculated.

Follow the code, observe the constructions and registers specific for working with bytes.
Run the code.

> **IMPORTANT**: Proceed to the next step only after thoroughly understanding what the code does.
It will be difficult for you to complete the following exercises if you have difficulty understanding the current exercise.

## Sum of Elements in an Array of types word and dword

In the `TODO` section of the `sum-array.asm` file, complete the code to calculate the sum of arrays with elements of type word (16 bits) and dword (32 bits);
namely, the `word_array` and `dword_array`.

> **TIP**: When calculating the address of an element in an array, you will use a construction like:
>
> `base + size * index`
>
> In the construction above:
>
> - base is the address of the array (i.e., `word_array` or `dword_array`)
> - size is the length of the array element (i.e., 2 for a word array (16 bits, 2 bytes) and 4 for a dword array (32 bits, 4 bytes))
> - index is the current index within the array
>
> **NOTE**: The sum of elements in the three arrays should be:
>
> - `sum(byte_array): 575`
> - `sum(word_array): 65799`
> - `sum(dword_array): 74758117`

## Sum of Squares of Elements in an Array

Starting from the program in the previous exercise, calculate the sum of squares of elements in an array.

> **NOTE**: You can use the `dword_array2` array, ensuring that the sum of squares of the contained elements can be represented in 32 bits.
>
> **NOTE**: If you use the construction below (array with 10 elements)
>
> ```Assembly
> dword_array dd 1392, 12544, 7992, 6992, 7202, 27187, 28789, 17897, 12988, 17992
> ```
>
> the sum of squares will be 2704560839.

## 64 Bits Sum of Squares

Compute the sum of squares of the elements from `big_numbers_array`.

> **NOTE**: The sum of the array can be represented on 64 bits, but we only have 32 bits registers.
>
> **HINT**: Split the sum in 2 variables (the mul operator for 32 bits multiplication).
>
> the sum of squares will be 1610691026282151079.

## Testing

To test the implementation, enter the tests/ directory and run:

```console
make check
```

In case of a correct solution, you will get an output such as:

```text
first_test                       ........................ passed ...  20
second_test                      ........................ passed ...  20
third_test                       ........................ passed ...  30
fourth_test                      ........................ passed ...  30

========================================================================

Total:                                                           100/100
```

If you're having difficulties solving this exercise, go through [this](/reading/memory-addressing.md) reading material.
