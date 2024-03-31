# Loop

To follow this guide, you'll need to use the `loop.asm` file located in the `guides/loop/support` directory.

This program illustrates how to use the `loop` instruction, as well as how to index an array of `dwords`.

>**Note**: The `loop` instruction jumps to the given label when the `count` register is not equal to 0.
In the case of `x86` the `count` register is `ecx`.
>
>**Note**: For a detailed description of the `loop` instruction check out the [documentation](https://www.felixcloutier.com/x86/loop:loopcc).
