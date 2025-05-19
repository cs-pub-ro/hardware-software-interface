---
nav_order: 3
parent: Lab 11 - Linking
---

# Task: Warning (not an Error)

Access the directory `tasks/include-fix/support/`.
Run the `make` command.
A warning appears, but it is from the preprocessing/compilation process.
Resolve this warning by editing the `hello.c` file.

**Bonus**: Fix the warning without using the `#include` directive.

**Checker**: To test the implementation, enter the tests/ directory and run:

```console
./run_all_tests.sh
```

In case of a correct solution, you will get this output:

```console
./run_all_tests.sh

test_warning                     ........................ passed ...  100

========================================================================

Total:                                                             100/100
```

If you're having difficulties solving this exercise, go through [this](../../reading/linking.md) reading material.
