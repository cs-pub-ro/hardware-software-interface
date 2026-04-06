---
nav_order: 4
parent: Lab 6 - Structures, Vectors and Strings
---

# Task: Finding a Substring in a String

You will solve the exercises starting from the `find_substring.asm` file located in the `tasks/find-substring/support` directory.

Find all occurrences of the `substring` substring in the `source_text` string in the `find_substring.asm` file.

Display the results as follows:

```text
Substring found at index: <N>
```

**IMPORTANT**: You cannot use the `strstr` library function (or similar) for this subtask.

**TIP**: For display, you can use both the `PRINTF64` macro and the `printf` function, as in previous exercises. Use the x86_64 calling convention when calling `printf`:

> - place the value you want to display in the `rsi` register (the position where the substring was found)
> - place the address of the `print_format` string in the `rdi` register
> - call the `printf` function

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
