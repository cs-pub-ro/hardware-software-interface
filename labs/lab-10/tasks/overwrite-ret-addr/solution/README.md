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
- We will set `n` to a large enough value: `100`
- `magic_function()` starts at address `0x080491d6`
- We see that the buffer passed where `fgets()` reads starts at `ebp - 0x58`.
- At the address pointed by `ebp` we find the saved `ebp` which we must skip, followed by the return address that we need to overwrite.
- So we must use `0x58 + 4 = 92` dummy characters `A` and then the address of `magic_function()` in little-endian encoding.

We can find the address of the `magic_function()` using this command:

```console
student@hsi:/.../overwrite-ret-addr/support$ nm break_this | grep magic_function
080491d6 T magic_function
```

``` Bash
python2.7 -c 'print "100\n" + "A" * 92 + "\xd6\x91\x04\x08"' > payload
```
