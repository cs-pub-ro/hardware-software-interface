; SPDX-License-Identifier: BSD-3-Clause

%include "printf64.asm"

section .text
    global main
    extern printf

main:
    push rbp
    mov rbp, rsp

    mov rax, zone2
    jmp rax                     ; unconditional jump to the address stored
                                ; in the eax register
zone1:
    mov rax, 1
    mov r10, 2
    add rax, r10
    PRINTF64 `%d\n\x0`, rax
jump1:
    jmp exit

zone2:
    mov rax, 7
    mov r10, 8
    add rax, r10
    PRINTF64 `%d\n\x0`, rax
jump2:
    jmp $-0x82                 ; relative jump with a negative offset
                               ; to the address of the previous instruction

exit:
    leave
    ret
