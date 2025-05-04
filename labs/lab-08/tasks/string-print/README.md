---
nav_order: 2
parent: Lab 8 - Functions
---

# Task: Displaying a String

Navigate to `tasks/string-print/support/`.

To display a string, we can use the internal macro `PRINTF64`.
Alternatively, we can use a function such as `puts()`.
In the file `print_string.asm`, displaying a string using the `PRINTF64` macro is implemented.

Following the example of the `hello_world.asm` file, implement string display using `puts` as well.

If you're having difficulties solving this exercise, take a peek at [hello_world.asm](../../guides/hello_world/).

After you consider your implementation complete, it is recommended to first run it `manually` in order to assess its correctness.
In order to do so, enter the `support/` directory and run:

```console
make
```

If your code successfully compiled, you can then run the binary like so:

```console
./print_string
```

To fully test the implementation, enter the `tests/` directory and run:

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
