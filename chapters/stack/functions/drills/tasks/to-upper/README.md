# Implementing the `toupper()` Function

Navigate to `chapters/stack/functions/drills/tasks/to-upper/support/`.

We aim to implement the `toupper()` function, which converts lowercase letters to uppercase.
To do this, start with the `to_upper.asm` file from the lab exercises archive and complete the body of the `toupper()` function.

The string used is `mystring`, and we assume it is a valid string.
This string is passed as an argument to the `toupper()` function when called.

Perform the transformation in place;
there is no need for another string.

> **NOTE_**  To convert a lowercase letter to uppercase, you need to **subtract** `0x20` from its value.
> This is the difference between lowercase and uppercase letters;
> for example, `a` is `0x61`, and `A` is `0x41`.
> You can see this in the [ASCII manual page](http://man7.org/linux/man-pages/man7/ascii.7.html).
>
> To read or write byte by byte, use the `byte [reg]` construction as seen in the implementation of determining the length of a string in the `print_string_length.asm` file, where `[reg]` is the pointer register storing the address of the string at that point.
>
> Stop when you reach the value `0` (`NULL` byte).
> For checking, you can use `test` as seen in the implementation of determining the length of a string in the `print-string-length.asm` file.

## Bonus: `toupper()` Only for Lowercase Letters

Implement the `toupper()` function so that the transformation occurs only for lowercase characters, not uppercase letters or other types of characters.

If you're having trouble solving this exercise, go through [this](../../../reading/functions.md) reading material.
