; SPDX-License-Identifier: BSD-3-Clause

%include "printf64.asm"

section .data
    num dq 100000

section .text
extern printf
global main
main:
    push rbp
    mov rbp, rsp

    mov rcx, [num]     ; Use rcx as counter for computing the sum.
    xor rax, rax       ; Use rax to store the sum. Start from 0.

add_to_sum:
    add rax, rcx
    loop add_to_sum    ; Decrement rcx. If not zero, add it to sum.

    mov rcx, [num]
    PRINTF64 `Sum(%lu): %lu\n\x0`, rcx, rax

    leave
    ret
