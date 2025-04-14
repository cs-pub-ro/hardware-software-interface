; SPDX-License-Identifier: BSD-3-Clause

%include "printf64.asm"

section .text
    global main
    extern printf

main:
    push rbp
    mov rbp, rsp

    mov r9, 4
    PRINTF64 `%d\n\x0`, r9

jump_incoming:
    jmp exit                    ; unconditional jump to the "exit" label

    mov r9, 7                  ; this code is unreachable, therefore not executed
    mov rbx, 8
    add r9, rbx
    PRINTF64 `%d\n\x0`, r9

exit:
    leave
    ret
