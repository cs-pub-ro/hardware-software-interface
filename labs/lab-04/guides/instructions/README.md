---
parent: Lab 4 - Introduction to Assembly Language
nav_order: 9
---

# Guide: First Look at Assembly Instructions

To follow this guide, you will need to use the `instructions.asm` file located in the `guides/instructions/support` directory.

Diving right into the demo, we can see one of the most important instructions that helps us, programmers, work with the stack and that is `push`.
We discussed what the `push` instruction does in the [reading section](../../reading/x86-architecture-family.md).
Considering its call, we can understand that it takes the `0` value(as a `DWORD`, a number stored on `4` bytes) and moves it onto the "top" of the stack.

That `push` is followed by a new instruction:

```assembly
popf
```

> **IMPORTANT**: The `popf` instruction is used for setting, depending on how many bytes we pop from the stack(in our case, 4 bytes), the `EFLAGS` register(setting the entire register when popping 4 bytes and only the 2 lower bytes of the register when popping 2 bytes).
> You can read more about the `popf` instruction [here](https://www.felixcloutier.com/x86/popf:popfd:popfq) and [here](https://en.wikipedia.org/wiki/FLAGS_register).

![EFLAGS Representation](../../media/eflags-representation.svg)

Having in mind what the `popf` instruction does, try to guess what would adding the following line of code at line 15 and the `mystery_label` label at the line(of the current file, before adding the instruction) 53 would make the program do.

```assembly
jnc mystery_label
```

Moving on, we can see that the `0` value is set to the `eax` register using the `mov` instruction.
Can you give example of another two ways of setting the value in `eax` to `0` without using `mov` ?
> **HINT**: Think about the [logical operators](../../reading/x86-architecture-family.md).

Next, by using the `test` instruction we can set the `flags` based on the output of the `logical and` between `eax` and itself.

After resetting the flags, we store `0xffffffff` in the `ebx` register(which is actually the largest number it can store before setting the carry flag) and then use the `test` instruction yet again.
Similarly, what do you think adding the following line of code after the `test` instruction would produce ?

```assembly
jnz mystery_label
```

We reset the flags once again and now we take a look at working with the smaller portions of the `eax` register.
Can you guess the output of the following command, put right under the `add al, bl` instruction ?
What about the flags ?
Which flag has been set ?

```assembly
PRINTF32 `%d\n\x0`, eax
```

Similarly, try to answer the same questions from above, but considering the next portions of the code.

After thoroughly inspecting this example, you should have a vague idea about how setting the flags works.
