---
nav_order: 5
parent: Lab 6 - Structures, Vectors and Strings
---

# Task: Mul-arrays

You will solve the exercises starting from the `mul_arrays.asm` file located in the `tasks/mul-arrays` directory.
Write the Assembly instructions through which, for each pair of one-byte elements with identical indexes from `array1` and `array2`, their product is saved in `array3`.
Then print `array3`.

The program's output after a correct solution should be:

```Assembly
The array that results from the product of the corresponding elements in array1 and array2 is:
405 1330 2024 280 289 957 2886 14872 17820 1984
```

Follow the comments marked with **TODO**.

**IMPORTANT**: The product should be computed between two one-byte numbers.
Therefore, the result is stored on two bytes.

To test the implementation, enter the `tests/` directory and run:

```console
make check
```

In case of a correct solution, you will get an output such as:

```text
./run_all_tests

test_mul_arrays                  ........................ passed ... 100

========================================================================

Total:                                                           100/100
```

If you're having difficulties solving this exercise, go through [this](../../reading/arrays.md) reading material.
