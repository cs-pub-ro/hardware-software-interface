---
nav_order: 1
parent: 'Task: Buffer Overflow for Program Written in C'
---

# Writeup

In `do_overflow.asm`:

- `line 37` -> `sexy_var` is at `ebp - 16`
- `line 47` -> start reading buffer at `ebp - 89`
- 89 - 16 = 73 of `'A'`s
- and `0x5541494D` written in little-endian encoding

For exercise **Stack Canary**, when running `objdump` in `main()`, look carefully at the instruction at the addresses `4dc`, as well as the code around it.
