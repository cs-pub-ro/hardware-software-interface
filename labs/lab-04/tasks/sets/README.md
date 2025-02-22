---
parent: Lab 4 - Introduction to Assembly Language
nav_order: 3
---

# Task: Sets

You will solve the exercises starting from the `sets.asm` file located in the `tasks/sets` directory.

You need to implement operations on sets that can contain elements between 0 and 31.
An efficient way to do this (both in terms of space and speed) would be to represent sets so that a register represents a set.
Each bit in the register represents an element in the set (if bit i is set, then the set contains element i).

> **TIP**: For example: if `eax` contains the representation of the set `{0, 2, 4}`, the register value would be `2^0 + 2^2 + 2^4 = 1 + 4 + 16 = 21`.
> Educate yourself about the available instructions on the [x86 architecture](http://www.cs.virginia.edu/~evans/cs216/guides/x86.html).

- You have two defined sets.
What values do they contain?
You do not need to make the code print the actual values stored in the sets.
Perform the union of the two sets.

- Use the `or` instruction to add two new elements to the first set (the set stored in the `eax` register).

> **NOTE**: Do not reset the `eax` register after this exercise.
> Its new value will be the one used by the checker for further evaluation.
>
> **TIP**: Take advantage of the fact that the current sets, although they have "space" for 32 bits, only use 8 bits.
> If you `or` with a number greater than 255 (`0xff`, `2^8-1`) which has two active bits, you will effectively add two new elements to the set.

- Perform the intersection of the two sets.

- Determine the elements missing from the `eax` set for it to be complete.

> **TIP**: You need to take the complement of the number using the `not` instruction.

- Remove an element from the first set (the set stored in the `eax` register).

> **NOTE**: Do not reset the `eax` register after this exercise.
> Its new value will be the one used by the checker for further evaluation.

- Find the difference between the sets.

> **NOTE**: In order for the checker to be able to check your results, you should be displaying the values in the order they are stated here.

To test the implementation, enter the `tests/` directory and run:

```console
./run_all_tests.sh

test_reunion                     ........................ passed ...  10
test_add_value_in_first_set      ........................ passed ...  20
test_intersection                ........................ passed ...  10
test_missing_elements_first_set  ........................ passed ...  20
test_remove_element_first_set    ........................ passed ...  20
test_difference                  ........................ passed ...  20

========================================================================

Total:                                                           100/100
```

> **NOTE** : If you wish to test for various sets, just change their values at line `6` and `7` respectively  in `support/sets.asm` to whatever you desire (that whatever should fit in 4 bytes, of course :-) ).

If you're having difficulties solving this exercise, go through [this](../../reading/x86-architecture-family.md) reading material.
