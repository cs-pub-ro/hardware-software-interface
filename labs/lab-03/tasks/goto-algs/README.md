---
parent: Lab 3 - Toolchain. GOTO
nav_order: 1
---

# Task: C - GOTOs

For the algorithms below, write C code without using:

- function definitions/calls (except for `scanf()` and `printf()`)
- `else`
- `for`
- `while`
- `do {} while`
- `if` constructs containing return
- nested `if` statements

The only permitted statement within an `if` construct is `goto`.

In other words, all the code must be written inside the `main` function, and the control flow modification (jumping to another code area) is done only through sequences like `if (condition) goto label;` or `goto label;`.

1. Implement an algorithm for finding the largest element of an array using C code and the above constraints.
The skeleton for the code is in `support/vector_max/vector_max.c`.
1. Implement binary search using C code and the above constraints.
The skeleton for the code is in `support/binary_search/binary_search.c`.

> **WARNING**: We reiterate that the use cases of the goto statement are limited.
> These exercises have educational value to get you accustomed to jump instructions that we will use in assembly language development.

If you're having difficulties solving this exercise, go through [this](../../reading/c-goto-statements.md) reading material.
