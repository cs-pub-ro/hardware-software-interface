; SPDX-License-Identifier: BSD-3-Clause

%include "printf64.asm"

section .text
    global main
    extern printf

main:
    push rbp
    mov rbp, rsp

    mov rax, 7                  ; load the eax register with the value 7
    mov r8, 8                  ; load the ebx register with the value 8
    add rax, r8                ; add the value from ebx to the value from eax
                                ; and store the result in eax
    PRINTF64 `%d\n\x0`, rax     ; print the value from the eax register

    leave
    ret
