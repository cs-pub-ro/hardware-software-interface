---
nav_order: 2
parent: Lab 11 - Linking
---

# Task: Linking Multiple Files

Access the directory `tasks/multiple-link/support/example/`.
We want to follow the linking commands from multiple C source files: `main.c`, `add.c`, `sub.c`.

As in the previous exercises, there are three subdirectories for three different scenarios:

* `a-no-header/`: external function declarations are made directly in the C source file (`main.c`)
* `b-header/`: external function declarations are made in a separate header file (`ops.h`)
* `c-lib/`: external function declarations are made in a separate header file, and linking is done using a static library

In each subdirectory, we use the `make` command to compile the executable file `main`.

Access the directory `tasks/multiple-link/support/diy/`.
We want to compile and link the source files in each subdirectory, following the model of the previous exercise.

Copy the `Makefile` files and update them in each subdirectory to obtain the executable file.

**Checker**: To test the implementation, enter the tests/ directory and run:

```console
./run_all_tests.sh
```

In case of a correct solution, you will get this output:

```console
./run_all_tests.sh

test_a-no-header                 ........................ passed ...  100
test_b-header                    ........................ passed ...  100
test_c-lib                       ........................ passed ...  100

========================================================================

Total:                                                             100/100
```

If you're having difficulties solving this exercise, go through [this](../../reading/linking.md) reading material.
