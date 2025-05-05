---
nav_order: 6
parent: Lab 9 - The C - Assembly Interaction
---

# Task: Repair Export Problems

Navigate to `tasks/export-fix/support/`.

Each subdirectory (`support/a-func/`, `suppoer/b-var/`, `support/c-var-2/`) contains a problem related to exporting some symbols (functions or variables).
In each subdirectory, run the `make` command, identify the problem and edit the files needed to fix the problem.

After finishing the exercise and testing it manually, run the checker script in `export-fix/tests/` to validate the result:

```console
make check
```

In case of a correct solution, you will get an output such as:

```text
test_a_func            ........................ passed ...  33
test_b_var             ........................ passed ...  33
test_c_var_2           ........................ passed ...  34

Total:                                                           100/100
```

If you're having difficulties solving this exercise, go through [this relevant section](../../reading/memory-layout-c-asm.md) reading material.
