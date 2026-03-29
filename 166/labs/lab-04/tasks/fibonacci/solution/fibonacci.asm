; SPDX-License-Identifier: BSD-3-Clause

%include "printf64.asm"

section .data
    N: dq 7          ; N-th fibonacci number to calculate

section .text
    global main
    extern printf

main:
    push rbp
    mov rbp, rsp

    mov rcx, QWORD [N]       ; we want to find the N-th fibonacci number; N = RCX = 7
    ; TODO: calculate the N-th fibonacci number (f(0) = 0, f(1) = 1)
    PRINTF64 `%d\n\x0`, rcx  ; DO NOT REMOVE/MODIFY THIS LINE

    mov rax, 0
    mov r9, 1

fibonacci:
    dec rcx
    test rcx, rcx
    je print
    add rax, r9
    xchg rax, r9
    jmp fibonacci

print:
    PRINTF64 `%d\n\x0`, r9
    xor rax, rax

    leave
    ret
