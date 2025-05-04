---
nav_order: 1
parent: Lab 8 - Functions
---

# Task: Computing the sum of 7 numbers

Navigate to `tasks/sum7/support/`.

Similarly to what was described in the reading section of this lab, for this task, you will have to compute the sum of 7 numbers, all received as arguments to the `sum7` function.

Be careful as not all of the arguments are stored in registers.

The function's signature is the following: `long sum7(long a, long b, long c, long d, long e, long f, long g)`.

After you consider your implementation complete, it is recommended to first run it `manually` in order to assess its correctness.
In order to do so, enter the `support/` directory and run:

```console
make
```

If your code successfully compiled, you can then run the binary like so:

```console
./sum7
```

To fully test the implementation, enter the `tests/` directory and run:

```console
make check
```

In case of a correct solution, you will get an output such as:

```text
./run_all_tests.sh
test_sum_byte                    ........................ passed ...  15
test_sum_word                    ........................ passed ...  20
test_sum_dword                   ........................ passed ...  30
test_sum_qword                   ........................ passed ...  35

Total:                                                           100/100
```

If you're having trouble solving this exercise, go through [this](../../reading/functions.md) reading material.
