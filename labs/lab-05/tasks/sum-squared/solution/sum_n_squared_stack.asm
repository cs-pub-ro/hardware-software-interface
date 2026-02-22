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
    push rax           ; Save current sum on stack
    mov rax, rcx       ; Move counter to rax
    mul rax            ; Square the value (rax = rax * rax)
    mov rdx, rax       ; Move squared value to rdx
    pop rax            ; Restore sum from stack
    add rax, rdx       ; Add squared value to sum
    loop add_to_sum    ; Decrement rcx. If not zero, continue.

    mov rcx, [num]
    PRINTF64 `Sum of squares(%lu): %lu\n\x0`, rcx, rax

    leave
    ret
