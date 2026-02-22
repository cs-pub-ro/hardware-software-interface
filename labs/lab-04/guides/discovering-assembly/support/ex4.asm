; SPDX-License-Identifier: BSD-3-Clause

%include "printf64.asm"

section .text
    global main
    extern printf

main:
    push rbp
    mov rbp, rsp

    mov rax, 1
    mov rbx, 1
    cmp rax, rbx
    add r15, 1                  ; Comment out this line
    je print

    leave
    ret

print:
    PRINTF64 `%d\n\x0`, rax

    leave
    ret
