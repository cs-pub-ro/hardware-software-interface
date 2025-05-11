---
nav_order: 1
parent: 'Task: Hidden in Plain Sight 2'
---

# Solution

In a nature similar to that of the previous exercise, we take a close look at the `objdump` disassembly output of the binary using the `objdump -D -M intel link2` command, specifically focusing on the `helper()` function:

```asm
0000012b <helper>:
(...)
149:   83 7d fc 2a             cmp    DWORD PTR [rbp-0x4],0x2a
14d:   75 0d                   jne    15c <helper+0x27>
14f:   80 7d f8 58             cmp    BYTE PTR [rbp-0x8],0x58
153:   75 07                   jne    15c <helper+0x27>
155:   e8 a6 fe ff ff          call   0 <get_flag>
```

The first 'cmp' instruction at '0x149' compares the value at '[rbp - 0x4]' with '0x2a'.
This implies that the first argument passed to the helper() function is expected to be '0x2a'.
The second 'cmp' instruction at '0x14f' compares the value at '[rbp - 0x8]' with '0x58'.
Since it's comparing a single byte ('byte ptr'), we can infer that this corresponds to a 'char' argument.

If both of the aforementioned comparisons are successful, the `get_flag()` function is called.
Hence, we can infer that we need to call the `helper()` function using the two arguments above - the integer `44`, and the char `X`, which is `88` in decimal.
