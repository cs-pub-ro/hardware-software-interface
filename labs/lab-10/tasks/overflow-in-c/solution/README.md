---
nav_order: 1
parent: 'Task: Buffer Overflow for Program Written in C'
---

# Writeup

In `do_overflow.asm`:

- `sexy_var` is at `rbp - 12` (may be written as `-12[rbp])
- start reading buffer at `rbp - 128`
- 128 - 12 = 116 of `'A'`s
- and `0x5541494D` written in little-endian encoding

For exercise **Stack Canary**, when running `objdump` in `main()`, look carefully at the first five instructions.
What do they mean?
What is `fs:0xXX`?
