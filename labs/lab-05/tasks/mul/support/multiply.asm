; SPDX-License-Identifier: BSD-3-Clause

%include "printf64.asm"

; https://en.wikibooks.org/wiki/X86_Assembly/Arithmetic

section .data
    num1 db 43
    num2 db 39
    num1_w dw 1349
    num2_w dw 9949
    num1_d dd 134932
    num2_d dd 994912
    num1_q dq 9223372036854775800
    num2_q dq 12345678

section .text
extern printf
global main
main:
    push rbp
    mov rbp, rsp

    ; Multiplication for db
    mov al, byte [num1]
    mov bl, byte [num2]
    mul bl

    ; Print result in hexa
    PRINTF64 `Result is: 0x%hx\n\x0`, rax


      ; TODO: Implement multiplication for dw, dd and dq data types.


    leave
    ret
