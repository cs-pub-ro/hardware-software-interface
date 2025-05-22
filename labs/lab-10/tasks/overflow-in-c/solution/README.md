---
nav_order: 1
parent: 'Task: Buffer Overflow for Program Written in C'
---

# Writeup

In `do_overflow.asm`:

- `line 29` -> `sexy_var` is at `ebp - 12`
- `line 35` -> start reading buffer at `ebp - 96`
- 96 - 12 = 84 of `'A'`s
- and `0x5541494D` written in little-endian encoding

For exercise **Stack Canary**, when running `objdump` in `main()`, look carefully at the instruction at the addresses `128b`, as well as the code around it.
