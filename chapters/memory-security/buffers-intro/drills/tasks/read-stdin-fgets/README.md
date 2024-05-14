# Buffer Overflow with Data from Standard Input and `fgets()`

As mentioned in the [**Read Using gets** task](../read-stdin-gets/README.md), the `gets()` function is prohibited in current programs.
Instead, the `fgets()` function can be used.
Open the source code file `read_stdin_fgets.asm` from the `drills/tasks/read-stdin-fgets/support/`.
In the `read_stdin_fgets.asm` source file, follow **TODO 1** and change the `gets()` function call to the `fgets()` function call.

For the `fgets()` call, read from standard input.
As an argument for the third parameter of `fgets()` (of type `FILE *`) you will use standard input.
To specify standard input, use the `stdin` stream.
You will need to mark it as external using, at the beginning of the assembly language file, the construction:

> ```Assembly
> extern stdin
> ```

`stdin` is an address; to call `fgets()` with standard input,
it is sufficient to pass on the stack the value from the `stdin` address, i.e., using the construction:

```Assembly
push dword [stdin]
```

> **HINT** Follow the manual page of the [`fgets()`](https://man7.org/linux/man-pages/man3/fgets.3.html) function to find out what parameters it receives.
> **TIP** Since the `fgets()` function has 3 parameters (which occupy `3 × 4 = 12` bytes) you will need to use `add esp, 12` after the function call,
> in restoring the stack, instead of `add esp, 4` as in the case of the program above that used `gets()`.
> **IMPORTANT** Do not modify the assembly language code. Transmit the input string in the appropriate format to the standard input
> to generate a buffer overflow and to obtain the required result.

Follow **TODO 2** in code and call *fgets()* instead of gets, but keep in mind that you will have to push a value big enough for the buffer size in order to produce an overflow.
The result should be the same like in the *read_stdin_gets* task.

> **TIP** As above, to transmit the input string for the program, it is recommended to write it in a file
> and then redirect that file to the corresponding program command.
> Redirecting the `payload` file to the program is done using a command like:

```Bash
./read_stdin_fgets < payload
```

What happens if you push *buffer_length - 1*, instead of *buffer_length*.
Why *var is 0x004F4C46* now?

If you're having difficulties solving this exercise, go through [this](../../../reading/README.md#How-to-make-a-Buffer-Overflow?) reading material.
