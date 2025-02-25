---
nav_order: 4
parent: Lab 6 - Structures, Vectors and Strings
---

# Task: Finding a Substring in a String

Find all occurrences of the `substring` substring in the `source_text` string in the `find_substring.asm` file.

Display the results as follows:

```text
Substring found at index: <N>
```

**IMPORTANT**: You cannot use the `strstr` library function (or similar) for this subtask.

**TIP**: For display, you can use both the `PRINTF32` macro and the `printf` function, as in previous exercises. The steps for display using `printf` are as follows:

> - push the value you want to display onto the stack (the position where the substring was found)
> - push the address of the `print_format` string onto the stack
> - call the `printf` function
> - clean up the parameters added earlier from the stack by adding the value 8 to the `esp` register (each parameter is 4 bytes).

To test the implementation, enter the `tests/` directory and run:

```console
make check
```

In case of a correct solution, you will get an output such as:

```text
./run_all_tests.sh

test_find_substring_sample       ........................ passed ...  25
test_find_substring_no_occurence ........................ passed ...  25
test_find_substring_small        ........................ passed ...  25
test_find_substring_large        ........................ passed ...  25

========================================================================

Total:                                                           100/100
```

If you're having difficulties solving this exercise, go through [this](../../reading/arrays.md) reading material.
