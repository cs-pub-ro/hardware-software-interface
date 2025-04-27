---
nav_order: 6
parent: Lab 12 - CTF
has_children: true
---

# Task: RIP My Buffers Off

The `rip-my-buffers-off/support/buff-ovf2` binary does not use the `get_flag()` function, but it offers an opportunity to call it.
> **TIP:** Where can a function address be overwritten?

[This example](https://medium.com/@0x-Singularity/exploit-tutorial-understanding-buffer-overflows-d017108edc85), albeit also linked in the previous exercise, is still a great resource to help you solve this exercise.

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
