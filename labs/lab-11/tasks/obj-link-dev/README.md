---
nav_order: 8
parent: Lab 11 - Linking
---

# Task: Linking an Object File (without Source Code)

Access the directory `tasks/obj-link-dev/support/`.
The file `shop.o` exposes an interface (functions and variables) that allows displaying messages.
Edit the `main.c` file to properly call the exposed interface and display the messages:

```bash
price is 21
quantity is 42
```

Explore the interface and the content of the functions in the `shop.o` file using `nm` and `objdump`.

**Checker**: To test the implementation, enter the tests/ directory and run:

```console
./run_all_tests.sh
```

In case of a correct solution, you will get this output:

```console
./run_all_tests.sh

test_linking-object-file         ........................ passed ...  100

========================================================================

Total:                                                             100/100
```

If you're having difficulties solving this exercise, go through [this](../../reading/linking.md) reading material.
