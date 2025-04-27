---
nav_order: 1
parent: 'Task: ROP'
---

# Solution

Idea: The function that needs to be called is `special_function()` with arguments 6 and 9.
The binary is a 64-bits ELF, therefore the parameters are no longer taken from the stack - they are taken from registers `esi` and `edi` in this order;
in order to set these registers, you need to execute 2 gadgets.
By using commands like `rop --grep "pop rsi"` and `rop --grep "pop rdi"` in `pwndbg`, you will find gadgets `pop rsi; pop r15; ret` and `pop rdi; ret`.
We first need to overwrite the return address with the address of the first gadget, followed by 2 8-byte values (`rsi` and `r15`, which are not relevant);
the value of rsi needs to be the value of the second argument;
these values are followed by the address of the second gadget and the value of rdi - the first argument of the function.
Finally, we jump to the address of `special_function()`, which you can find by using `gdb` and `print special_function`.

The command below might need to be modified.

```sh
python3 -c 'import sys; sys.stdout.buffer.write(b"A"*24 + b"\x6f\x13\x40\x00\x00\x00\x00\x00" + b"\x09\x00\x00\x00\x00\x00\x00\x00" + b"\x00\x00\x00\x00\x00\x00\x00\x00" + b"\x71\x13\x40\x00\x00\x00\x00\x00" + b"\x06\x00\x00\x00\x00\x00\x00\x00" + b"\xc6\x12\x40\x00\x00\x00\x00\x00")' | ./rop
```

Note: if you recompile the binary, if an address ends up having `0a` as its least significant byte, you may have to increment it in order to prevent `fgets()` from reading it as a newline character - `\n`.
