---
parent: Lab 2 - Memory Operations. Introduction to GDB
nav_order: 4
---

# Task: Find Maximum in Array

You will solve this exercise starting from the `find-max.c` file located in the `tasks/find-max/support` directory.

Implement the following functions:

```c
find_max(void *arr, int n, int element_size, int (*compare)(const void *, const void *))
```

which calculates the maximum element from an array based on a given comparison function:

```c
compare(const void *a, const void *b)
```

To test the implementation, enter the `tests/` directory and run:

```console
make check
```

In case of a correct solution, you will get an output such as:

```text
test_compare                     ........................ passed ...  30
test_find_max                    ........................ passed ...  70

Total:                                                           100/100
```

If you're having difficulties solving this exercise, go through [this](../../reading/memory-operations.md) reading material.
