# Count Array Elements

## Count Negative and Positive Numbers from Array

You will solve this exercise starting from the `count_pos_neg.asm` file located in the `drills/tasks/vec-count-if/support` directory.

Your program should display the number of positive and negative values from the array.

> **NOTE**: Define a vector that contains both negative and positive numbers.
>
> **TIP**: Use the `cmp` instruction and conditional jump mnemonics. See details [here](https://en.wikipedia.org/wiki/X86_instruction_listings).
>
> **TIP**: The `inc` instruction followed by a register increments the value stored in that register.

## Count Odd and Even Numbers from Array

Create a new file called `count_even_odd.asm` file located in the `drills/tasks/vec-count-if/support` directory.

Your program should display the number of even and odd values from an array.

> **TIP**: You can use the `div` instruction to divide a number by 2 and then compare the remainder of the division with 0.
>
> **NOTE**: For testing, use an array containing only positive numbers.

For negative numbers, sign extension should be performed; it would work without it because we are only interested in the remainder, but let's be rigorous :-)

If you're having difficulties solving this exercise, go through [this](/reading/memory-addressing.md) reading material.
