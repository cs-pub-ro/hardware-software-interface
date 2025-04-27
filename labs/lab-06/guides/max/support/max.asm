; SPDX-License-Identifier: BSD-3-Clause

%include "../utils/printf64.asm"

section .data
    array dw 10, 20, 30, 17, 277, 127, 17792, 1781, 2891, 2129
    len equ 10

section .text
extern printf
global main

main:
    push rbp
    mov rbp, rsp

    ; rcx -> iterator through vector (rcx -> 0..9)
    xor rcx, rcx

    ; rdx -> store max
    xor rdx, rdx

again:
    cmp dx, [array + 2*rcx]
    ja noaction

    ; Load new value in rdx (max).
    mov dx, [array + 2*rcx]

noaction:
    inc rcx
    cmp rcx, len
    jb again

    PRINTF64 `%lu\n\x0`, rdx

    xor rax, rax
    leave
    ret
