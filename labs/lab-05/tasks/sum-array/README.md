---
nav_order: 4
parent: Lab 5 - Registers and Memory Addressing
---

# Task: Sum of Elements in an Array

## Introduction

You will solve this exercise starting from the `sum_array.asm` file located in the `tasks/sum-array/support` directory.

In the `sum_array.asm` file, the sum of elements in arrays of different data types is calculated.

Follow the code, observe the constructions and registers specific for working with different data types in 64-bit mode.
Run the code.

> **IMPORTANT**: Proceed to the next step only after thoroughly understanding what the code does.
It will be difficult for you to complete the following exercises if you have difficulty understanding the current exercise.

## Working with Arrays of Different Sizes

In the `TODO` section of the `sum-array.asm` file, complete the code to calculate the sum of:

1. `word_array` (16-bit elements)
1. `dword_array` (32-bit elements)
1. `qword_array` (64-bit elements)

> **TIP**: When calculating the address of an element in an array, you will use a construction like:
>
> `base + size * index`
>
> In the construction above:
>
> - base is the address of the array (i.e., `word_array`, `dword_array` etc.)
> - size is the length of the array element (i.e., 2 for a word array (16 bits, 2 bytes) and 4 for a dword array (32 bits, 4 bytes))
> - index is the current index within the array
>
> **NOTE**: The expected sums for each array are:
>
> - `sum(byte_array): 575`
> - `sum(word_array): 65799`
> - `sum(dword_array): 140975`
> - `sum(qword_array): 49782475293`

## 128-bit Addition Exercise

The final part of this lab requires you to implement a 128-bit addition operation.

You need to add three very large 64-bit values stored in the `big_qword_array`:

```assembly
big_qword_array dq 9223372036854775800, 8223372036854775800, 7223372036854775800
```

> **NOTE**: When adding these values, the sum will exceed the capacity of a single 64-bit register (rax).
> You will also have to track and handle the carry bits.
>
> **NOTE**: The expected result of adding these three values is: `0x1565ddbe509d3ffe8`.

## Testing

To test the implementation, enter the tests/ directory and run:

```console
make check
```

In case of a correct solution, you will get an output such as:

```text
word_sum_test                    ........................ passed ...  20
dword_sum_test                   ........................ passed ...  20
qword_sum_test                   ........................ passed ...  30
big_sum_test                     ........................ passed ...  30

========================================================================

Total:                                                           100/100
```

## Additional Resources

If you're having difficulties solving this exercise, go through [this](/reading/memory-addressing.md) reading material.
