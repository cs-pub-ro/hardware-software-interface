---
nav_order: 5
parent: Lab 7 - The Stack
---

# Task: GCD - Greatest Common Divisor

Open `gcd.asm` and run the program.
The code calculates the greatest common divisor (GCD) of two numbers given as parameters using the `eax` and `edx` registers, and then stores the calculated value back in the `eax` register.

1. Make the necessary modifications so that the error message - `Segmentation fault (core dumped)` - no longer appears.
1. Within the `print` label, display the result in the following format:

```c
gcd(49, 28) = 7
```

If you're having difficulties solving this exercise, go through [this](../../reading/stack.md) reading material

## Checker

To run the checker, go into the `tests` directory, then type `make check`.
A successful output of the checker should look like this :

```console
student@os:~/.../lab-07/tasks/gcd/tests$ make && make check
test_segfault         .................................... passed ... 50
test_gcd              .................................... passed ... 50

========================================================================

Total:                                                           100/100
```
