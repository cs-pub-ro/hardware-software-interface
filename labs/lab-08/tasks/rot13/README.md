---
nav_order: 5
parent: Lab 8 - Functions
---

# Task: Bonus: Rot13

Navigate to `tasks/rot13/support/`.

Create and use a function that performs [rot13](https://rot13.com/) translation of a string.

## Bonus: Rot13++

Implement `rot13` on an array of strings: the strings are contiguous in memory separated by the string terminator (`NULL`-byte, `0`).
For example, `lorem\0ipsum\0dolor\0` is an array of three strings.

Apply `rot13` to alphabetical characters and replace the string terminator with a space (`' '`, blank, character `32`, or `0x20`).
Thus, the initial string `lorem\0ipsum\0dolor\0` will translate to `yberz vcfhz qbybe`.

> **NOTE:** To define the array of strings containing the string terminator, use a construction like:
>
> ```Assembly
> mystring db "lorem", 0, "ipsum", 0, "dolor", 0
> ```
>
> **NOTE:** You will need to know when to stop traversing the array of strings. The simplest way is to define a length variable in the `.data` section, like so:
>
> ```Assembly
> len dd 10
> ```
>
> where you either store the total length of the string (from the beginning to the last `NULL` byte) or the number of strings in the array.

If you're having trouble solving this exercise, go through [this](../../reading/functions.md) reading material.
