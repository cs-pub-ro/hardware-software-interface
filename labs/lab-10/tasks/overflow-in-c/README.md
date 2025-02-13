---
nav_order: 5
parent: Lab 10 - Buffer Management. Buffer Overflow
---

# Task: Buffer Overflow for Program Written in C

Most often, we will identify buffer overflow vulnerabilities in programs written in C.
There we need to see what buffers are and what is the distance from the buffer to the desired variable to be able to overwrite it.

> **IMPORTANT** It is important to consider that the distance between a buffer and another variable in C may not correspond to the "real-world" distance;
> the compiler can make updates, reorders, may leave free spaces between variables, etc.

## Overwrite Variable Using a Buffer

For the current exercise, access the `tasks/overflow-in-c/support/` directory from the lab resource archive and observe the corresponding C source code.
For the case where you do not want to compile the code yourself, you have in the archive the equivalent assembly language file and the executable file.

Discover the difference between the buffer's address and the variable's address, create an input file (also called `payload`) with which to trigger the overflow and make it so that the message *Full of win* is displayed.

It is recommended to first take a look at the assembly file, then understand the offsets.

> **HINT** To see the "real-world" reality, i.e., to find out what the difference is between the buffer and the variable we want to overwrite,
> consult the equivalent assembly language file (`do_overflow.asm`), obtained by assembling the C code.
> In this file, you can find the relative address of the buffer to `ebp` and the variable to `ebp`;
> follow the sequence between lines `36` and `47`;
> you have a mapping between the variable name and the relative offset to `ebp`.
> With this information, you can create the string to transmit as a payload to the standard input of the program.
> **NOTE** If you want to recompile the files run:

```Bash
make clean && make
```

> **HINT** As above, to transmit the input string for the program, it is recommended to write it in a file
> and then redirect that file to the corresponding program command.
> Redirecting the payload file to the program is done using a command like:

```Bash
./do_overflow < payload
```

> **HINT** If you are confused about the value in the C code:

```C
if (sexy_var == 0x5541494D)
```

> You can use this [site](https://www.rapidtables.com/convert/number/hex-to-ascii.html) to convert from hexadecimal to ASCII.

## BONUS: Stack Canary

Now that you displayed *Full of win!*, let's take a look at the Makefile

> ```Bash
> cat Makefile
> ```

Carefully analyze the compilation options.
What do you notice?

As observed above, despite exceeding the buffer size and overwriting another variable in the program, it terminated normally.
This is undesirable when working with buffers because they are a potential source of easy attacks.
Use `objdump` to inspect the `main` function of the executable.

> **HINT** To inspect the source, use the following command:

```Bash
objdump -M intel -d do_overflow
```

Now, go into the `Makefile` and modify the `CFLAGS` parameters by replacing `-fno-stack-protector` with `-fstack-protector`.
Recompile the program and run it.
What do you observe?

> **NOTE** With the `-fstack-protector` option or flag, we instructed the compiler to enable *Stack Smashing Protection* for our executable.
> Therefore, any buffer overflow attack will be detected in the code, and the program execution will terminate with an error.

Inspect the recompiled executable again with the new flag using `objdump`.
What has changed?

> **NOTE** The compiler introduced a randomly generated value called a **canary** onto the stack, which it checks before exiting the current function's execution.
> Through buffer overflow, this canary was overwritten upon exceeding the buffer's size, resulting in a mismatch between the initial canary value and the one at the end of the function execution.

Recompile the files and run:

```Bash
make clean && make
```

If you try the same payload, it will not work because of the **canary** generated. You will most likely see a message like this:

```Bash
Not quite there. Try again!
*** stack smashing detected ***: terminated
Aborted (core dumped)
```

If you're having difficulties solving this exercise, go through [this](../../reading/overflow-vuln.md) reading material.
