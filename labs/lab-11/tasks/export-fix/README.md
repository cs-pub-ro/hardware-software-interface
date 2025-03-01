---
nav_order: 6
parent: Lab 11 - Linking
---

# Task: Fixing Export Issues

Access the directory `tasks/export-fix/support/`.
Each subdirectory (`a-func/`, `b-var/`, `c-var-2/`) contains a problem related to the export of symbols (functions or variables).
In each subdirectory, run the `make` command, identify the issue, and edit the necessary files to resolve it.

**Checker**: To test the implementation, enter the tests/ directory and run:

```console
./run_all_tests.sh
```

In case of a correct solution, you will get this output:

```console
./run_all_tests.sh

test_a-func                      ........................ passed ...  30
test_b-var                       ........................ passed ...  30
test_c-var-2                     ........................ passed ...  40

========================================================================

Total:                                                             100/100
```

If you're having difficulties solving this exercise, go through [this](../../reading/linking.md) reading material.
