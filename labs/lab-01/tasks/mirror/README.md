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
> mirror("AnaAreMere") = "ereMerAanA"
>
> mirror("asdfghjl") = "ljhgfdsa"
>
> mirror("qwerty") = "ytrewq"
> ```

If you're having difficulties solving this exercise, go through [this](../../reading/c-pointers.md) reading material.
