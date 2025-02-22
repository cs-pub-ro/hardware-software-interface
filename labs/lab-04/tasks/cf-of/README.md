---
parent: Lab 4 - Introduction to Assembly Language
nav_order: 6
---

# Task: Carry Flag - Overflow Flag

You will solve these exercises starting from the `of.asm`, `cf.asm` and `cf_of.asm` files located in the `tasks/cf-of` directory.

Using the `add` instruction on the `al` register:

1. Set the `OF` flag

1. Set the `CF` flag

1. Set both flags simultaneously.

To test the implementation, enter the `tests/` directory and run:

```console
make check
```

In case of a correct solution, you will get an output such as:

```text
./run_all_tests.sh

test_overflow_flag               ........................ passed ...  25
test_carry_flag                  ........................ passed ...  25
test_carry_and_overflow_flag     ........................ passed ...  50

========================================================================

Total:                                                           100/100
```

If you're having difficulties solving this exercise, go through [this](../../reading/x86-architecture-family.md) reading material.
