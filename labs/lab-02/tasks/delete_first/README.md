---
parent: Lab 2 - Memory Operations. Introduction to GDB
nav_order: 2
---

# Task: Deleting the First Occurrence of a Pattern from a String

You will solve this exercise starting from the `delete-first.c` file located in the `tasks/delete-first/support` directory.

Given a string and a pattern, implement the `delete_first(char *s, char *pattern)` function that returns the string obtained by removing the first occurrence of the pattern in `s`.

> **NOTE:** For `s = "Ana are mere"` and `pattern = "re"`, the function should return the string "Ana a mere".
>
> **IMPORTANT:** Warning
>
> ```c
> char *s = "Ana are mere"; // allocates the string in a read-only memory area (immutable content)
> char s[] = "Ana are mere"; // allocates the string in a read-write memory area (modifiable content)
> ```

To test the implementation, enter the `tests/` directory and run:

```console
make check
```

In case of a correct solution, you will get an output such as:

```text
test_no_appearances              ........................ passed ...  33
test_one_appearance              ........................ passed ...  33
test_multiple_appearances        ........................ passed ...  34

Total:                                                           100/100
```

If you're having difficulties solving this exercise, go through [this](../../reading/memory-operations.md) reading material.
