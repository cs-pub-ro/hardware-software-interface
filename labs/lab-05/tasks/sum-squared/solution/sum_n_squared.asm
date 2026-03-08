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

    mov rcx, [num]     ; Use rcx as counter.
    xor rbx, rbx       ; Use rbx to store the sum of squares. Start from 0.

add_square_to_sum:
    mov rax, rcx       ; Move current number to rax for multiplication
    mul rax            ; Square the number (rax = rax * rax)
    add rbx, rax       ; Add the square to our sum
    loop add_square_to_sum    ; Decrement rcx. If not zero, continue.

    mov rcx, [num]
    PRINTF64 `Sum of squares(%lu): %lu\n\x0`, rcx, rbx

    leave
    ret
