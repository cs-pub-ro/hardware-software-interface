---
nav_order: 8
parent: Lab 9 - The C - Assembly Interaction
---

# Task: Maximum Calculation in C with Call from Assembly - 64 Bits

Enter the directory `tasks/max-assembly-calls-x64/support` and implement the maximum calculation in C with a call from Assembly language on a 64-bit system.
Start from the program used in `tasks/max-assembly-calls`, ensuring it runs on a 64-bit system.
Follow the instructions from the previous exercise and pay attention to the order of parameters.

After finishing the exercise and testing it manually, run the checker script to validate the result:

```console
make check
```

The format of your output should be `"max: <max value> on position: <position>\n"`
In case of a correct solution, you will get an output such as:

```text
test_max_asm_calls_x86_64    ........................ passed ...  100

Total:                                                           100/100
```
