---
parent: Lab 1 - Number Representation
nav_order: 3
---

# Task: Binary Even and Hexadecimal Odd

You will solve the exercise starting from the file `odd_even.c` located in the directory `tasks/odd-even/`.

Traverse an array of 32-bit integers using pointer operations and display the even numbers in binary and the odd numbers in hexadecimal.

>**NOTE**: Use bitwise operations wherever possible in your solution!
>
>**NOTE**: For the array `[214, 71, 84, 134, 86]`, the program will display:
>
> ```text
> 0b11010110
> 0x00000047
> 0b01010100
> 0b10000110
> 0b01010110
> ```

To test the implementation, enter the `tests/` directory and run:

```console
make check
```

In case of a correct solution, you will get an output such as:

```text
./run_all_tests.sh
test_small_array              ........................ passed ...  33
test_medium_array             ........................ passed ...  33
test_big_array                ........................ passed ...  34

Total:                                                           100/100
```

If you're having difficulties solving this exercise, go through [this](../../reading/binary-hex.md) reading material.
