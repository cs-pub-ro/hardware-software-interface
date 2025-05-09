---
nav_order: 3
parent: Lab 11 - Linking
---

# Task: Fixing the Entry Point 1

Access the directory `tasks/entry-fix-1/support/`.
We want to track issues with defining the `main()` function.

Go to the subdirectory `a-c/`.
Run the `make` command, interpret the encountered error, and resolve it by editing the `hello.c` file.

Go to the subdirectory `b-asm/`.
Run the `make` command, interpret the encountered error, and resolve it by editing the `hello.asm` file.

**Bonus**: In the subdirectories `c-extra-nolibc/` and `d-extra-libc/`, find solutions that do not modify the source code of `hello.c`.
These solutions instead modify the build system to use a different function, other than `main()`, as the program's entry point.

**Checker**: To test the implementation, enter the tests/ directory and run:

```console
./run_all_tests.sh
```

In case of a correct solution, you will get this output:

```console
./run_all_tests.sh

test_a-c                         ........................ passed ...  25
test_b-asm                       ........................ passed ...  25
test_c-extra-nolibc              ........................ passed ...  25
test_d-extra-libc                ........................ passed ...  25

========================================================================

Total:                                                            100/100
```

If you're having difficulties solving this exercise, go through [this](../../reading/linking.md) reading material.
