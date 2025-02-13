---
nav_order: 1
parent: 'Task: Reading Data from Standard Input'
---

# Writeup

- There are 64 characters of `'A'` and 4 more in `F, L, O, W`.
- The 64 `'A'`s will fill the data buffer.
- And `F,L,O,W` will fill the stack addresses where the variable is stored (4 bytes).
- Carefully watch the little-endian writing.
