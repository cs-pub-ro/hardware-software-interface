---
parent: Lab 4 - Introduction to Assembly Language
nav_order: 2
---

# Task: Grumpy Jumps

You will solve the exercises starting from the `grumpy_jumps.asm` file located in the `tasks/grumpy-jumps` directory.

1. Modify the values of the `eax` and `ebx` registers so that when the program is run, the message `Well done!` is displayed.
Follow the `TODO` comments.

1. Why does the wrong message still appear?
Modify the source so that the wrong message is not displayed anymore.

> **TIP**: To determine the necessary values for the `eax` and `ebx` registers, we recommend using GDB.

To test the implementation, enter the `tests/` directory and run:

```console
./run_all_tests.sh

test_display_right               ........................ passed ...  50
test_display_only_right          ........................ passed ...  50

========================================================================

Total:                                                           100/100
```

If you're having difficulties solving this exercise, go through [this](../../reading/x86-architecture-family.md) reading material.
