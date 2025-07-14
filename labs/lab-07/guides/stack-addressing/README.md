---
nav_order: 8
parent: Lab 7 - The Stack
---

# Guide: Stack Addressing

The `stack_addressing.asm` file demonstrates how data is stored on the stack, and especially in what order.

Here's what an usual output for the compiled program would be:

```c
0x7fff124f4830: 0x7fff124f48d0
0x7fff124f4828: 0xa
0x7fff124f4820: 0xb
0x7fff124f4818: 0xc
0x7fff124f4810: 0xd
```

> **Note:** The last 4 values are the ones we pushed on stack.
> What is the first one?
>
> **Answer:** It is the old RBP we push at the start of the function.

For convenience, here's the contents of the file.
To play around with it, download the lab locally.

```assembly
%include "printf64.asm"

section .text

extern printf
global main
main:
    push rbp
    mov rbp, rsp

    push qword 10
    push qword 11
    push qword 12
    push qword 13

    mov rax, rbp
print_stack:
    PRINTF64 `%p: %p\n\x0`, rax, [rax]

    sub rax, 8
    cmp rax, rsp
    jge print_stack

    xor rax, rax
    leave
    ret
```
