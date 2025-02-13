---
parent: Lab 4 - Introduction to Assembly Language
nav_order: 10
---

# Guide: Discovering Assembly

To follow this guide, you will need to navigate to the `guides/discovering-assembly/support` directory.

1. Open the `ex1.asm` file and read the comments.
Assemble it by using the `make` utility and run it.
Using gdb, go through the program line by line (the `start` command followed by `next`) and observe the changes in register values after executing the `mov` and `add` instructions.
Ignore the sequence of `PRINTF32` instructions.

1. Open the `ex2.asm` file and read the comments.
Assemble it by using the `make` utility and run it.
Using gdb, observe the change in the `eip` register when executing the `jmp` instruction.
To skip the `PRINTF32` instructions, add a breakpoint at the `jump_incoming` label (the `break` command followed by `run`).

1. Open the `ex3.asm` file and read the comments.
Assemble it by using the `make` utility and run it.
Using gdb, navigate through the program using breakpoints.
Follow the program flow.
Why is `15` displayed first and then `3`?
Because of the jump at line 9.
Where does the jump at line 25 point to?
To the `zone1` label.

1. Open the `ex4.asm` file and read the comments.
Assemble it by using the `make` utility and run it.
Using gdb, go through the program.
Why isn't the jump at line 12 taken?
Because the `je` instruction jumps if the `ZF` bit in the `FLAGS` register is set.
This bit is set by the `cmp` instruction, which calculates the difference between the values of the `eax` and `ebx` registers without storing the result.
However, the `add` instruction at line 11 clears this flag because the result of the operation is different from 0.
