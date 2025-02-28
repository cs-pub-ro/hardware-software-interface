---
parent: Lab 1 - Number Representation
nav_order: 5
---

# Task: Reversing a String

You will solve the exercise starting from the file `mirror.c` located in the directory `tasks/mirror/support/`.

Using pointer operations, implement a C program that reverses a string of characters.
The `mirror` function should perform an **in-place** reversal of the characters in the string (upon exiting the function, the input string will contain the reversed string).

> **NOTE**: Do not access string elements using the form `s[i]`.
>
> **TIP**:
>
> ```c
> mirror("LoremIpsum") = "muspImeroL"
>
> mirror("asdfghjl") = "ljhgfdsa"
>
> mirror("qwerty") = "ytrewq"
> ```

To test the implementation, enter the `tests/` directory and run:

```console
make check
```

In case of a correct solution, you will get an output such as:

```text
./run_all_tests.sh
test_small_string             ........................ passed ...  33
test_medium_string            ........................ passed ...  33
test_big_string               ........................ passed ...  34

Total:                                                           100/100
```

If you're having difficulties solving this exercise, go through [this](../../reading/c-pointers.md) reading material.
