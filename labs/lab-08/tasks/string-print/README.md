---
nav_order: 1
parent: Lab 8 - Functions
---

# Task: Displaying a String

Navigate to `tasks/string-print/support/`.

To display a string, we can use the internal macro `PRINTF32`.
Alternatively, we can use a function such as `puts()`.
In the file `print_string.asm`, displaying a string using the `PRINTF32` macro is implemented.

Following the example of the `hello_world.asm` file, implement string display using `puts` as well.

If you're having difficulties solving this exercise, take a peek at [hello_world.asm](../../guides/hello_world/).

To test the implementation, enter the `tests/` directory and run:

```console
make check
```

In case of a correct solution, you will get an output such as:

```text
./run_all_tests.sh
test_print_simple                ........................ passed ...  33
test_print_special               ........................ passed ...  33
test_print_long                  ........................ passed ...  34

Total:                                                           100/100
```

If you're having trouble solving this exercise, go through [this](../../reading/functions.md) reading material.
