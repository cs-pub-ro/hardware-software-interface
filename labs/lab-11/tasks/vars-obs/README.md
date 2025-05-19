---
nav_order: 4
parent: Lab 11 - Linking
---

# Task: Using Variables

Access the directory `tasks/vars-obs/support/`.
We want to track the use of global variables, both exported and non-exported.

In the `hidden.c` file, we have the static (non-exported) variable `hidden_value`.
This variable is modified and accessed using non-exported functions: `init()`, `get()`, `set()`.

In the `plain.c` file, we have the exported variable `age`.
This variable can be modified and accessed directly.

These variables are used directly (`age`) or indirectly (`hidden_value`) in the `main.c` file.
To use them, the functions and variables are declared in the `ops.h` file.
A function is declared by specifying the header.
A variable is declared by prefixing it with `extern`.

Modify `main.c` such that `hidden_value` is set to 10 and `age` is set to 33.

**Checker**: To test the implementation, enter the tests/ directory and run:

```console
./run_all_tests.sh
```

In case of a correct solution, you will get this output:

```console
./run_all_tests.sh

test_vars-obs                    ........................ passed ...  100

========================================================================

Total:                                                             100/100
```

If you're having difficulties solving this exercise, go through [this](../../reading/linking.md) reading material.
