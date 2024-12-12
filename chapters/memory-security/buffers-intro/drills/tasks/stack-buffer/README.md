# Buffer on the Stack

Access the `drills/tasks/stack-buffer/support/` directory from the lab resource archive and consult the `stack_buffer.asm` file.
This file contains a program that populates a buffer with information and then displays it.
It is similar to the one above, but now the buffer is allocated on the stack.

The task will contain 3 parts.

## Part 1

Carefully review the program, then compile it using the command:

```Bash
make
```

then run it using the command:

```Bash
./stack_buffer
```

Observe the behavior of the program according to its code.

In addition to the buffer, we have also allocated a local variable of 4 bytes, accessible at the address `ebp - 4`.
It is initialized to the value `0xCAFEBABE`.
This variable will be important later on.
What is relevant now is to know that this variable is in memory **immediately after the buffer**: when the buffer limit is exceeded, you reach this variable.

What is the difference between the two programs inspected so far?

## Part 2

Now that we have seen what the buffer looks like in memory and where the variable is placed,
update the `stack_buffer.asm` program so that the buffer display sequence
(Look for **TODO 1**) also leads to the display of the variable's bytes.
It is a case of read buffer overflow, with the objective of **information leak**: finding out information from memory.

> **HINT** It's not complicated, you just need to "instruct" the display sequence to use a different limit for display,
> not the current limit of 64 bytes.

Follow **TODO 2** and display other information beyond the local variable.
What information comes on the stack after the local variable (the next 4 bytes)?
And the next 4 bytes after?

## Part 3

Based on the experience above, make changes so that the variable's value is `0xDEADBEEF`
(instead of `0xCAFEBABE` as it is initially) without, however, explicitly modifying the variable's value.
Look for **TODO 3** and use the buffer modification and the `ebx` register in which we stored the start address of the buffer.

> **TIP** Again, it's not complicated.
> You need to use the `ebx` value and an offset to write the `0xDEADBEEF` value at that address.
> That is, use a construction like:

```Assembly
mov byte [ebx + TODO], TODO
```

> Do this after the buffer initialization sequence (after the `jl fill_byte` instruction).

With a correct solution to this exercise, the program will display the `0xDEADBEEF` value for the local variable.

If you're having difficulties solving this exercise, go through [this](../../../reading/buffers-intro.md) reading material.
