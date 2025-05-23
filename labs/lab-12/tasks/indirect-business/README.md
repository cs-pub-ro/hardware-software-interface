---
nav_order: 5
parent: Lab 12 - CTF
has_children: true
---

# Task: Indirect Business

The `indirect-business/support/buff-ovf` binary contains a classic vulnerability.
Use the input to alter the data in your favor.

If you experience a neural buffer overflow, take a look at the [relevant lab](https://cs-pub-ro.github.io/hardware-software-interface/Lab%2011%20-%20Buffer%20Management.%20Buffer%20Overflow/) and at [online examples](https://medium.com/@0x-Singularity/exploit-tutorial-understanding-buffer-overflows-d017108edc85).

If that still doesn't work, keep in mind that the great cybersecurity expert named Sun Tzu was a big proponent of bruteforce attacks.

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
