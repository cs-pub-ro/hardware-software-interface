# Displaying the Length of a String

Navigate to `chapters/stack/functions/drills/tasks/string-print-len/support/`.

The program `print_string_len.asm` displays the length of a string using the `PRINTF32` macro.
The calculation of the length of the `mystring` string occurs within the program (it is already implemented).

Implement the program to display the length of the string using the `printf` function.

At the end, you will have the length of the string displayed twice: initially with the `PRINTF32` macro and then with the external function call `printf`.

> **NOTE:**  Consider that the `printf` call is of the form `printf("String length is %u\n", len);`.
> You need to construct the stack for this call.
>
> The steps to follow are:
>
> 1. Mark the symbol `printf` as external.
> 1. Define the format string `"String length is %u", 10, 0`.
> 1. Make the function call to `printf`, i.e.:
>     1. Put the two arguments on the stack: the format string and the length.
>     1. Call `printf` using `call`.
>     1. Restore the stack.
>
> The length of the string is found in the `ecx` register.

If you're having trouble solving this exercise, go through [this](../../../reading/functions.md) reading material.
