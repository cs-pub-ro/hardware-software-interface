# ROP

`rop/support/rop` is a 64-bit binary with a simple buffer overflow.
However, it has NX enabled, so normal shellcode will not work.
Find a way to create a working exploit.

> **TIP:** On x86_64, function arguments are no longer found on the stack but in registers.

If you're having trouble with this exercise, you may use [this](https://www.ired.team/offensive-security/code-injection-process-injection/binary-exploitation/rop-chaining-return-oriented-programming).
Keep in mind that `peda`'s functionality may be a bit different from that of the provided setup, but you should have [this](https://github.com/JonathanSalwan/ROPgadget).
In `pwndbg`, you can use something like `rop --grep "pop rsi"`.
