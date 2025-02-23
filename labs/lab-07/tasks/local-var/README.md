---
nav_order: 4
parent: Lab 7 - The Stack
---

# Task: Local Var

The program `local-var.asm` in the laboratory archive combines two sorted arrays (`array_1` and `array_2`) by placing the resulting array in `array_output` defined in the `.data` section.

Modify the program so that `array_1`, `array_2`, and `array_output` are allocated on the stack.
The array allocation is done using the `sub` instruction.
For the copies of arrays `array_1` and `array_2`, you will need to copy their elements from the `.data` section to the stack before using them.

If you're having difficulties solving this exercise, go through [this](../../reading/stack.md) reading material

## Checker

To run the checker, go into the `tests` directory located in `src`, then type `make check`.
A successful output of the checker should look like this :

```console
student@os:~/.../lab-07/tasks/local-var/tests$ make && make check
test_local_var              ............................. passed ... 100

========================================================================

Total:                                                           100/100
```
