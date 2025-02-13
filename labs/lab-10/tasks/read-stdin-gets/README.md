---
nav_order: 3
parent: Lab 10 - Buffer Management. Buffer Overflow
---

# Task: Reading Data from Standard Input

Access the `tasks/read-stdin-gets/support/` directory from the lab resource archive and consult the `read_stdin.asm` file.
In this file, there is a program that uses the `gets` call to read information from standard input into a buffer on the stack.
As in the previous case, we have allocated a local variable of 4 bytes immediately after the stack buffer.

Carefully review the program, then compile it using the command:

```Bash
make
```

then run it using the command:

```Bash
./read_stdin
```

Observe the behavior of the program depending on the received input.

## Buffer Overflow with Data from Standard Input

The [gets](https://man7.org/linux/man-pages/man3/gets.3.html) function is practically prohibited in C programs because of its high vulnerability:
it does not check the limits of the buffer where the reading is done, and can easily be used for buffer overflow.

For this, transmit the corresponding input string so that the displayed value for the local variable is not `0xCAFEBABE`, but `0x574F4C46` (the ASCII hexadecimal values for `FLOW`).

> **IMPORTANT** Do not modify the assembly language code.
> Transmit the input string in the appropriate format to the standard input to generate a buffer overflow and to obtain the required result.
> **WARNING** Do not write the string `"574F4C46"`.
This is a string that occupies `8` bytes.
> You must write the ASCII representation of the number `0x574F4C46`, which is `FLOW`:
> `0x57` is `W`, `0x4F` is `O`, `0x4C` is `L`, and `0x46` is `F`.
> **HINT** x86 is a **little endian** architecture.
> That means the string `"FLOW"`, having the character-ASCII code correspondence. If it seems unclear, check out this [link](https://www.geeksforgeeks.org/little-and-big-endian-mystery/)
> `F`: `0x46`, `L`: `0x4C`, `O`: `0x4F`, `W`: `0x57` will be stored in memory on `4` bytes as `0x574F4C46`.
> So at the bigger address we will have `W`, while at the lower address there will be `F`.
> **HINT** To transmit the input string, it is recommended to write it in a file and then redirect that file to the corresponding program command.
> You can use an editor such as `gedit` or `vim` to edit the file.
> The advantage is that they also display the column you are on, and you can know how many characters you have written in the file.
> Alternatively, you can use python to more easily generate your payload.
> For example, to generate a payload that overwrites a value in the code with the value `0xDEADBEEF`, you can execute the following command:

```python
python2.7 -c 'print "A" * 32 + "\xEF\xBE\xAD\xDE"' > payload
```

> **NOTE** number `32` is only an example and it represents the size of buffer that needs to be bypassed.
> It is recommended to name the file `payload`. Redirecting the `payload` file to the program is done using a command like:

```Bash
./read_stdin < payload
```

If done correctly, you will see:

```Bash
var is 0x574F4C46
```

If you're having difficulties solving this exercise, go through [this](../../reading/buffers-intro.md) reading material.
