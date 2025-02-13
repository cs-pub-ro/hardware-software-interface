---
nav_order: 1
parent: 'Task: Hook at Him Go'
---

# Solution

Run the executable with GDB, ideally with `gef`, `pwndbg`, or `peda`.
As you step through, you will notice that the flag will appear in fragments in the display of the register contents (the flag string contains null characters placed specifically so that it would not be displayed all at once).

```asm
$eax   : 0x0804d625  →  "_out,"
$ebx   : 0x0804d22e  →  "_out,"
$ecx   : 0x0804d62a  →  0x00000000
$edx   : 0x0804d625  →  "_out,"
```

You may also see fragments in the memory dump, at times:

```asm
0xffffd4b8│+0x0008: 0xf7fb9000  →  0x001ead6c
0xffffd4bc│+0x000c: 0x0804d600  →  0x00000000
0xffffd4c0│+0x0010: 0x0804d210  →  0x00495348 ("HSI"?)
```
