; SPDX-License-Identifier: BSD-3-Clause

%include "printf64.asm"

section .data
    N dq 9 ; DO NOT MOFIDY THIS LINE EXCEPT FOR THE VALUE OF N!
           ; compute the sum of the first N fibonacci numbers
    sum_print_format db "Sum first %d fibonacci numbers is %d", 10, 0

section .text
extern printf
global main
main:
    push rbp
    mov rbp, rsp

    ; TODO: calculate the sum of first N fibonacci numbers
    ;       (f(0) = 0, f(1) = 1)
    xor rax, rax     ;store the sum in rax

    ; Use the loop instruction

    mov rdx, rax
    mov rsi, qword [N]
    mov rdi, sum_print_format
    call printf

    xor rax, rax
    leave
    ret
