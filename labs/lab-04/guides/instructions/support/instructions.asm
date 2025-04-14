; SPDX-License-Identifier: BSD-3-Clause


%include "printf64.asm"

section .text
    global main
    extern printf

main:
    push rbp
    mov rbp, rsp

    push 0
    popf

    mov r9, 0
    test r9, r9

    push 0
    popf

    mov rbx, 0xffffffffffffffff
    test rbx, rbx

    push 0
    popf

    mov r9b, 250
    mov bl, 10
    add r9b, bl

    push 0
    popf

    mov r9b, 0
    mov bl, 1
    sub r9b, bl

    push 0
    popf

    mov r9b, 120
    mov bl, 120
    add r9b, bl

    push 0
    popf

    mov r9b, 129
    mov bl, 129
    add r9b, bl


    PRINTF64 `%d\n\x0`, r9

    leave
    ret
