; SPDX-License-Identifier: BSD-3-Clause

section .text

global get_max

get_max:
    push rbp
    mov rbp, rsp

    ; [rbp+16] is array pointer
    ; [rbp+24] is array length

    mov rbx, [rbp+16]
    mov rcx, [rbp+24]
    xor rax, rax

compare:
    cmp eax, [rbx+rcx*4-4]
    jge check_end
    mov rax, [rbx+rcx*4-4]
check_end:
    loopnz compare

    leave
    ret
