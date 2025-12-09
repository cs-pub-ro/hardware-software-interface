---
nav_order: 1
parent: 'Task: Hidden in Plain Sight 2'
---

# Solution

In a nature similar to that of the previous exercise, we take a close look at the `objdump` disassembly output of the binary using the `objdump -D -M intel link2` command, specifically focusing on the `helper()` function.

In x86-64, the first two integer arguments are passed in `rdi` and `rsi` registers (not on the stack as in 32-bit).

Looking at the disassembly, you'll find comparisons like:

- The first argument (in `rdi` or saved to stack) is compared with `42`
- The second argument (a `char` in `sil` - lower byte of `rsi`) is compared with `88` (ASCII 'X')

If both comparisons are successful, the `get_flag()` function is called.

Hence, we need to call the `helper()` function with two arguments: the integer `42`, and the char `'X'` (88 in decimal).

Compile and link:

```bash
gcc -g -m64 -fno-PIC -c main.c
gcc -no-pie -m64 link2 main.o -o a.out
./a.out
```
