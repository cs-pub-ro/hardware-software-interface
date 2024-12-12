# Deleting the First Occurrence of a Pattern from a String

You will solve this exercise starting from the `delete-first.c` file located in the `drills/tasks/delete-first/support` directory.

Given a string and a pattern, implement the `delete_first(char *s, char *pattern)` function that returns the string obtained by removing the first occurrence of the pattern in `s`.

> **NOTE:** For `s = "Ana are mere"` and `pattern = "re"`, the function should return the string "Ana a mere".
>
> **IMPORTANT:** Warning
>
> ```c
> char *s = "Ana are mere"; // allocates the string in a read-only memory area (immutable content)
> char s[] = "Ana are mere"; // allocates the string in a read-write memory area (modifiable content)
> ```

If you're having difficulties solving this exercise, go through [this](../../../reading/memory-operations.md) reading material.
