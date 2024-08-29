# Solution

In a nature similar to that of the previous exercise, we take a close look at the `objdump` disassembly output of the binary using the `objdump -D -M intel link2` command, specifically focusing on the `helper()` function:

```asm
0000012b <helper>:
(...)
137: 83 7d 08 2a                   cmp     dword ptr [ebp + 8], 42
13b: 75 0d                         jne     0x14a <helper+0x1f>
13d: 80 7d f4 58                   cmp     byte ptr [ebp - 12], 88
141: 75 07                         jne     0x14a <helper+0x1f>
143: e8 b8 fe ff ff                call    0x0 <get_flag>
```

The first `cmp` instruction at `0x137` compares the value at `[ebp + 8]` with `42`.
This implies that the first argument passed to the helper() function is expected to be `42`.
The second `cmp` instruction at `0x13d` compares the value at `[ebp - 12]` with `88`.
Since it's comparing a single byte (`byte ptr`), we can infer that this corresponds to a `char` argument.
Although it appears to be a local variable, if we look around a bit, we will notice why that is:

```asm
131: 8b 45 0c                      mov     eax, dword ptr [ebp + 12]
134: 88 45 f4                      mov     byte ptr [ebp - 12], al
```

The value at `[ebp + 12]` is moved into the `eax` register - this corresponds to the second argument passed to the `helper` function.
The lower byte of `eax`, `al`, the `char` that we are interested in, is then moved into a local variable.

If both of the aforementioned comparisons are successful, the `get_flag()` function is called.
Hence, we can infer that we need to call the `helper()` function using the two arguments above - the integer `44`, and the char `X`, which is `88` in decimal.
