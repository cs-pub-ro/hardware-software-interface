---
parent: Lab 4 - Introduction to Assembly Language
nav_order: 5
---

# Task: Fibonacci

You will solve this exercise starting from the `fibonacci.asm` file located in the `tasks/fibonacci` directory.

Calculate the Nth Fibonacci number, where N is given through the `eax` register.

>**NOTE**: The Nth Fibonacci number is `F[N]` for our chosen N.
> By definition, `F[0] = 0` and `F[1] = F[2] = 1`.
> Each following value is calculated with the formula `F[i] = F[i - 1] + F[i - 2]`.
>
>**TIP**: For example, if the value stored in `ecx` is equal to `5`, a correct solution will display `5` and for `7`, it will display `13`.

To test the implementation, enter the `tests/` directory and run:

```console
make check
```

In case of a correct solution, you will get an output such as:

```text
./run_all_tests.sh

test_fibonacci                   ........................ passed ... 100

========================================================================

Total:                                                           100/100
```

> **NOTE** : If you wish to test for various values of N, just change its value at line `6`  in `support/fibonacci.asm` to whatever you desire (that whatever should fit in 4 bytes, of course :-) ).

If you're having difficulties solving this exercise, go through [this](../../reading/x86-architecture-family.md) reading material.
