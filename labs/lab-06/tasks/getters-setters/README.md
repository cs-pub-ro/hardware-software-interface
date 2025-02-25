---
nav_order: 3
parent: Lab 6 - Structures, Vectors and Strings
---

# Task: Getter-Setter

Write in the `getter_setter_printf.asm` file the instructions needed to display the values of the `int_x`, `char_y`, and `string_s` fields from the `sample_obj` object.

The program's output after a correct solution should be:

```Assembly
int_x: 1000
char_y: a
string_s: My string is better than yours
```

Next, overwrite the values of the `int_x`, `char_y`, `string_s` fields in the `sample_obj` object with the values from the `new_int`, `new_char`, and `new_string` variables.

Validate the results using the display sequence written earlier. After a correct solution, the program's output is:

```Assembly
int_x: 2000
char_y: b
string_s: Are you sure?
```

Follow the comments marked with **TODO**.

To test the implementation, enter the `tests/` directory and run:

```console
make check
```

In case of a correct solution, you will get an output such as:

```text
./run_all_tests

test_getter_setter_printf        ........................ passed ... 100

========================================================================

Total:                                                           100/100
```

If you're having difficulties solving this exercise, go through [this](../../reading/structures.md) reading material.
