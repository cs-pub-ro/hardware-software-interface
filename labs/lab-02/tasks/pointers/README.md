---
parent: Lab 2 - Memory Operations. Introduction to GDB
nav_order: 5
---

# Task: Pointers

You will solve this exercise starting from the `pointers.c` file located in the `tasks/pointers/support` directory.

Implement the functions [`memcpy()`](http://www.cplusplus.com/reference/cstring/memcpy/), [`strcpy()`](http://www.cplusplus.com/reference/cstring/strcpy/), and [`strcmp()`](http://www.cplusplus.com/reference/cstring/strcmp/) using pointer operations.

To test the implementation, enter the `tests/` directory and run:

```console
make check
```

In case of a correct solution, you will get an output such as:

```text
test_strcmp_equal                ........................ passed ...  10
test_strcmp_diff                 ........................ passed ...  10
test_strcmp_diff2                ........................ passed ...  10
test_memcpy_basic                ........................ passed ...  10
test_memcpy_partial              ........................ passed ...  10
test_memcpy_struct               ........................ passed ...  10
test_memcpy_overlap              ........................ passed ...  10
test_strcpy_basic                ........................ passed ...  10
test_strcpy_empty                ........................ passed ...  10
test_strcpy_long_string          ........................ passed ...  10

Total:                                                           100/100
```

If you're having difficulties solving this exercise, go through [this](../../reading/memory-operations.md) reading material.
