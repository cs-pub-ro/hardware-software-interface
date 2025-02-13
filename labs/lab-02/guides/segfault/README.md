---
parent: Lab 2 - Memory Operations. Introduction to GDB
nav_order: 10
---

# Guide: GDB Tutorial - Debugging a Segfault

To follow this guide, you'll need to use the `segfault.c` file located in the `guides/segfault/support` directory.

Compile and run the source code from the skeleton (if you are not using the Makefile, make sure to compile with the -g flag).
In short, the program takes a number n, allocates a vector of size n, and initializes it with the first n numbers from the Fibonacci sequence.
However, after running the program, you see: Segmentation fault (core dumped).

Start GDB with the executable:

```bash
gdb ./segfault
```

Once you have started GDB, all interaction happens through the GDB prompt.
Run the program using the `run` command.
What do you notice?
GDB hangs at the input reads.

Set a breakpoint at `main` using the `break main` command.
You will see the message in the prompt:

```c
Breakpoint 1 at 0x7d3: file segfault.c, line 21  /* The memory address should not be the same */
```

Next, we will step through the instructions one by one.
To do this, use the `next` or `n` command (watch the GDB cursor to see the current instruction and repeat the process).
You will notice that GDB hangs at `scanf`, so input a value for `n` and continue stepping through.
If you have entered a large value for `n` and want to skip the iteration, use the `continue` command.
Eventually, you will reach the line `v[423433] = 3;`, and GDB will display:

```bash
Program received signal SIGSEGV, Segmentation fault
```

Inspect the memory at `v[423433]` using `x &v[423433]` and you will receive the message:

```c
Cannot access memory at address 0x5555558f3e94  /* The memory address should not be the same */
```

What happened?
We accessed a memory area with restricted access.
