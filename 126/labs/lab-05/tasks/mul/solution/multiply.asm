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
    ; NOTE: The `%hx` format specifier tells printf to print only the lower half
    ; (lower 16 bits) of rax - i.e., the ax register - by treating the value as
    ; a 16-bit unsigned short.
    PRINTF64 `Result is: 0x%hx\n\x0`, rax


    ; Multiplication for dw
    mov ax, word [num1_w]
    mov bx, word [num2_w]
    mul bx

    ; Print result in hexa
    ; NOTE: The `%hx` format specifier is used in the same way as in the
    ; previous PRINTF64 statement, only now for both dx and ax registers
    PRINTF64 `Result is: 0x%hx%hx\n\x0`, rdx, rax


    ; Multiplication for dd
    mov eax, dword [num1_d]
    mov ebx, dword [num2_d]
    mul ebx

    ; Print result in hexa
    PRINTF64 `Result is: 0x%x%x\n\x0`, rdx, rax


    ; Multiplication for dq
    mov rax, qword [num1_q]
    mov rbx, qword [num2_q]
    mul rbx

    ; Print result in hexa
    ; NOTE: For 64-bit multiplication, the 128-bit result is stored in rdx:rax
    ; We use %lx format specifier for 64-bit long values
    PRINTF64 `Result is: 0x%lx%016lx\n\x0`, rdx, rax

    leave
    ret