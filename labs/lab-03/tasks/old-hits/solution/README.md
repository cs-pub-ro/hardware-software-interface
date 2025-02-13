---
parent: 'Task: Reverse - Old Hits'
nav_order: 1
---

# Writeup

The exercise requires finding a randomly generated value in the `main` function using `gdb` for data extraction and Ghidra for understanding the code (it is designed to be solved before the assembly language labs).

Upon completion, the code displays a link to a randomly chosen video from a list.
The list of encrypted and base64-encoded links is stored in the variable `enc_b64`, and the list of links is stored in the variable `links`.

The plaintext list is defined only if the macro `REENCRYPT` is defined.
For solving the exercises, the macro is not defined, and the list is not visible.
