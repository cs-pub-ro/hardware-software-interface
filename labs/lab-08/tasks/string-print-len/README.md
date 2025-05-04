---
nav_order: 3
parent: Lab 8 - Functions
---

# Task: Displaying the Length of a String

Navigate to `tasks/string-print-len/support/`.

The program `print_string_len.asm` displays the length of a string using the `PRINTF64` macro.
The calculation of the length of the `mystring` string occurs within the program (it is already implemented).

Implement the program to display the length of the string using the `printf` function.

At the end, you will have the length of the string displayed twice: initially with the `PRINTF64` macro and then with the external function call `printf`.

> **NOTE:**  Consider that the `printf` call is of the form `printf("String length is %u\n", len);`.
> You need to construct the stack for this call.
>
> The steps to follow are:
>
> 1. Mark the symbol `printf` as external.
> 1. Define the format string `"String length is %u", 10, 0`.
> 1. Make the function call to `printf`, i.e.:
>     1. Put the two arguments into the corresponding registers (`rdi` and `rsi`, in this order)
>     1. Call `printf` using `call`.
>
> The length of the string is found in the `rcx` register.

After you consider your implementation complete, it is recommended to first run it `manually` in order to assess its correctness.
In order to do so, enter the `support/` directory and run:

```console
make
```

If your code successfully compiled, you can then run the binary like so:

```console
./print_string_length
```

To fully test the implementation, enter the `tests/` directory and run:

```console
make check
```

In case of a correct solution, you will get an output such as:

```text
./run_all_tests.sh
test_length_zero                 ........................ passed ...  20
test_length_small                ........................ passed ...  40
test_length_large                ........................ passed ...  40

Total:                                                           100/100
```

If you're having trouble solving this exercise, go through [this](../../reading/functions.md) reading material.
