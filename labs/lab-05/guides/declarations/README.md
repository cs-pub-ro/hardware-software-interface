---
nav_order: 11
parent: Lab 5 - Registers and Memory Addressing
---

# Guide: Declarations

To follow this guide, you'll need to use the `declarations.asm` file located in the `guides/declarations/support` directory.

The program declares multiple variables of different sizes in the `.bss` and `.data` sections.

>**Note**: When defining strings, make sure to add a zero byte at the end, in order to mark the end of the string.
>
>```Assembly
>decimal_point   db ".",0
>```

For a complete set of the pseudo-instruction check out the `nasm` [documentation](https://nasm.us/doc/nasmdoc3.html).
