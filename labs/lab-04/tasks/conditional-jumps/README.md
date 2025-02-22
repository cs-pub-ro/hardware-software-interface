---
parent: Lab 4 - Introduction to Assembly Language
nav_order: 1
---

# Task: Conditional Jumps

You will solve the exercises starting from the `hello_world.asm` file located in the `tasks/conditional-jumps` directory.

1. Modify the program so that the message is displayed only if the content of the `eax` register is greater than that of `ebx`.
Also, modify the values of the registers to continue displaying the message `"Hello, World!"`.

1. Modify the program to also display `"Goodbye, World!"` at the end.

1. Using jump instructions, modify the program to display `"Hello, World!"` N times, where N is given through the `ecx` register.
Avoid infinite looping.

> **TIP**: After a successful completion (with `N = 6`), the program should display:
>
> ```c
> 6
> Hello, World!
> Hello, World!
> Hello, World!
> Hello, World!
> Hello, World!
> Hello, World!
> Goodbye, World!
> ```

To test the implementation, enter the `tests/` directory and run:

```console
make check
```

In case of a correct solution, you will get an output such as:

```text
./run_all_tests.sh

test_one_hello                   ........................ passed ...  10
test_N_hellos                    ........................ passed ...  60
test_N_hellos_and_one_goodbye    ........................ passed ...  30

========================================================================

Total:                                                           100/100
```

> **NOTE(1)** : If you wish to test for various values of N, just change its value at line `7`  in `support/hello_world.asm` to whatever you desire (that whatever should fit in 4 bytes, of course :-) ).\
> **NOTE(2)** : Please use the strings provided in the exercise exactly as they are.

If you're having difficulties solving this exercise, go through [this](../../reading/x86-architecture-family.md) reading material.
