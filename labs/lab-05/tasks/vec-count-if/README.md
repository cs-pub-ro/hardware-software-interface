---
nav_order: 5
parent: Lab 5 - Registers and Memory Addressing
---

# Task: Count Array Elements

## Count Negative and Positive Numbers from Array

You will solve this exercise starting from the `count_pos_neg.asm` file located in the `tasks/vec-count-if/support` directory.

Your program should display the number of positive and negative values from the array.

> **NOTE**: Define a vector that contains both negative and positive numbers.
>
> **TIP**: Use the `cmp` instruction and conditional jump mnemonics. See details [here](https://en.wikipedia.org/wiki/X86_instruction_listings).
>
> **TIP**: The `inc` instruction followed by a register increments the value stored in that register.

## Count Odd and Even Numbers from Array

Create a new file called `count_even_odd.asm` file located in the `tasks/vec-count-if/support` directory.

Your program should display the number of even and odd values from this array: {1392, 12544, 7991, 6992, 7202, 27187, 28789, 17897, 12988, 17992}.

> **TIP**: You can use the `div` instruction to divide a number by 2 and then compare the remainder of the division with 0.
>
> **NOTE**: For testing, use an array containing only positive numbers.

For negative numbers, sign extension should be performed; it would work without it because we are only interested in the remainder, but let's be rigorous :-)

## Testing

To test the implementation, enter the `tests/` directory and run:

```console
make check
```

In order to get the points, you should have a single line of output with
the positive and negative number ordered in this way:

```text
gibberish (text) number_of_positives gibberish (text / spaces) number_of_negatives
```

The same rule ^ is applied for even and odd.

In case of a correct solution, you will get an output such as:

```text
test_pos                         ........................ passed ...  25
test_neg                         ........................ passed ...  25
test_even                        ........................ passed ...  25
test_odd                         ........................ passed ...  25

========================================================================

Total:                                                           100/100
```

If you're having difficulties solving this exercise, go through [this](/reading/memory-addressing.md) reading material.
