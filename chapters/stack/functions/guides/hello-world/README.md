# Hello, World

Navigate to `chapters/stack/functions/guides/hello-world/support/`.

Open the `hello_world.asm` file, assemble it, and run it.
Notice the display of the message *Hello, world!*

Note that:

- The `hello_world.asm` program uses the `puts()` function call (an external function of the current module) to perform the display.
For this, it puts the argument on the stack and calls the function.
- The `msg` variable in the `hello_world.asm` program contains the byte `10`.
This symbolizes the *line feed* character (`\n`), used to add a new line on Linux.

Ending with `\n` is generally useful for displaying strings.
The `puts()` function automatically adds a new line after the displayed string, but this must be explicitly added when using the `printf()` function.
