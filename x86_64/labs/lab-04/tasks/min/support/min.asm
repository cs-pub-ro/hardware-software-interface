; SPDX-License-Identifier: BSD-3-Clause

%include "printf64.asm"

section .data
    FIRST_NUMBER dq 4  ; The first number
    SECOND_NUMBER dq 1 ; The second number

section .text
    global main
    extern printf

main:
    push rbp
    mov rbp, rsp

    ; The two numbers can be found in the registers r9 and r10
    mov r9, QWORD [FIRST_NUMBER]  ; The first number
    mov r10, QWORD [SECOND_NUMBER] ; The second number
    PRINTF64 `%d\n\x0`, r9 ; print the first number
                            ; DO NOT REMOVE/MODIFY THIS LINE
    PRINTF64 `%d\n\x0`, r10 ; print the second number
                            ; DO NOT REMOVE/MODIFY THIS LINE

    ; TODO: find the minimum of the two numbers and store it in r9
    PRINTF64 `%d\n\x0`, r9 ; print the minimum
    xor rax, rax

    leave
    ret
