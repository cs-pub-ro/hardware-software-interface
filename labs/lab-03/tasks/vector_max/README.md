---
parent: Lab 3 - Toolchain. GOTO
nav_order: 1
---

# Task: Vector Max

For the algorithm below, write C code without using:

- function definitions/calls (except for `scanf()` and `printf()`)
- `else`
- `for`
- `while`
- `do {} while`
- `if` constructs containing return
- nested `if` statements

The only permitted statement within an `if` construct is `goto`.

In other words, all the code must be written inside the `vector_max` function, and the control flow modification (jumping to another code area) is done only through sequences like `if (condition) goto label;` or `goto label;`.

Implement an algorithm for finding the largest element of an array using C code and the above constraints.
The skeleton for the code is in `vector_max/support/vector_max.c`.

> **WARNING**: We reiterate that the use cases of the goto statement are limited.
> This exercise has educational value to get you accustomed to jump instructions that we will use in assembly language development.

To test the implementation, enter the `tests/` directory and run:

```console
make check
```

In case of a correct solution, you will get an output such as:

```text
test_max_middle_of_array         ........................ passed ...  33
test_max_end_of_array            ........................ passed ...  33
test_max_beginning_of_array      ........................ passed ...  34

Total:                                                           100/100
```

If you're having difficulties solving this exercise, go through [this](../../reading/c-goto-statements.md) reading material.
