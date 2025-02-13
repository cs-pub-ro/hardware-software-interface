---
nav_order: 8
parent: Lab 7 - The Stack
---

# Guide: Stack Addressing

The `stack_addressing.asm` file demonstrates how data is stored on the stack, and especially in what order.

Here's what an usual output for the compiled program would be:

```c
0xff99fba8: 0xf7f46020
0xff99fba4: 0xa
0xff99fba0: 0xb
0xff99fb9c: 0xc
0xff99fb98: 0xd
```

> **Note:** The last 4 values are the ones we pushed on stack.
> What is the first one?
>
> **Answer:** It is the old EBP we push at the start of the function.

For convenience, here's the contents of the file.
To play around with it, download the lab locally.

```assembly
%include "printf32.asm"

section .text

extern printf
global main
main:
    push ebp
    mov ebp, esp

    push dword 10
    push dword 11
    push dword 12
    push dword 13

    mov eax, ebp
print_stack:
    PRINTF32 `0x\x0`
    PRINTF32 `%x\x0`, eax
    PRINTF32 `: 0x\x0`
    PRINTF32 `%x\n\x0`, [eax]

    sub eax, 4
    cmp eax, esp
    jge print_stack

    xor eax, eax
    leave
    ret
```
