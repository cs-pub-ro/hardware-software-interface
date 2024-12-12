# Sets

You will solve the exercises starting from the `sets.asm` file located in the `drills/tasks/sets` directory.

You need to implement operations on sets that can contain elements between 0 and 31.
An efficient way to do this (both in terms of space and speed) would be to represent sets so that a register represents a set.
Each bit in the register represents an element in the set (if bit i is set, then the set contains element i).

> **TIP**: For example: if `eax` contains the representation of the set `{0,2,4}`, the register value would be `2^0 + 2^2 + 2^4 = 1 + 4 + 16 = 21`.
> Educate yourself about the available instructions on the [x86 architecture](http://www.cs.virginia.edu/~evans/cs216/guides/x86.html).

- You have two defined sets.
What values do they contain?
Perform the union of the two sets.

- Use the `or` instruction to add two new elements to the set.

> **TIP**: Take advantage of the fact that the current sets, although they have "space" for 32 bits, only use 8 bits.
> If you `or` with a number greater than 255 (`0xff`, `2^8-1`) which has two active bits, you will effectively add two new elements to the set.

- Perform the intersection of the two sets.

- Determine the elements missing from the `eax` set for it to be complete.

> **TIP**: You need to take the complement of the number using the `not` instruction.

- Remove an element from the first set.

- Find the difference between the sets.

> **NOTE**: In order to display the answer, you can use the `PRINTF32` macro.
> For example:
>
> ```assembly
> PRINTF32 `The union is: \x0`
> PRINTF32 `%u\n\x0`, `EAX`
> ```

If you're having difficulties solving this exercise, go through [this](../../../reading/x86-architecture-family.md) reading material.
