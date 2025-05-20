; SPDX-License-Identifier: BSD-3-Clause

section .text

global get_max

get_max:
    push rbp
    mov rbp, rsp

    mov rbx, rdi ; first argument
	mov rcx, rsi ; second argument

    xor rax, rax

compare:
    cmp eax, [rbx+rcx*4-4]
    jge check_end
    mov rax, [rbx+rcx*4-4]
check_end:
    loopnz compare

    leave
    ret
