---
nav_order: 7
parent: Lab 12 - CTF
has_children: true
---

# Task: Feeling Chained

Follow the sequence of operations in the functions of the binary at `feeling-chained/support/buff-ovf3`.
Identify the necessary ones and... you already know how to call them.

If you cannot find your way through this exercise, look for variables that you need to overwrite with specific values in order to finish the exploit, and think of their positioning on the stack.
The previously mentioned [online example](https://medium.com/@0x-Singularity/exploit-tutorial-understanding-buffer-overflows-d017108edc85) is still highly relevant.

## Checker

To test the implementation, enter the `tests/` directory and run:

```console
make check
```

In case of a correct solution, you will get an output such as:

```text
test_payload                     ........................ passed ... 100

Total:                                                           100/100
```
