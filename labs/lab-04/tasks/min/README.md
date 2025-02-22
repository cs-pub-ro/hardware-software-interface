---
parent: Lab 4 - Introduction to Assembly Language
nav_order: 4
---

# Task: Min

You will solve this exercise starting from the `min.asm` file located in the `tasks/min` directory.

Calculate the minimum of the numbers in 2 registers (`eax` and `ebx`) using a comparison instruction, a jump instruction, and the `xchg` instruction.

To test the implementation, enter the `tests/` directory and run:

```console
./run_all_tests.sh

test_use_compare                 ........................ passed ...  10
test_use_jump                    ........................ passed ...  10
test_use_xchg                    ........................ passed ...  10
test_check_result                ........................ passed ...  70

========================================================================

Total:                                                           100/100
```

> **NOTE** : If you wish to test for various values of the two numbers, just change their values at line `6` and `7` respectively  in `support/min.asm` to whatever you desire (that whatever should fit in 4 bytes, of course :-) ).

If you're having difficulties solving this exercise, go through [this](../../reading/x86-architecture-family.md) reading material.
