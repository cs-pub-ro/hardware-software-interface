; SPDX-License-Identifier: BSD-3-Clause

%include "printf64.asm"

section .text

extern printf
global main
main:
    push rbp
    mov rbp, rsp

    ; rdx:rax = rax * r/m64, where r/m64 is a 64-bit register or memory location
    mov rax, 10
    mov rbx, 30
    mul rbx

    PRINTF64 `Result is: %u\n\x0`, rax

    ; make sure to always clear the rdx register before performing a division
    ; there might be leftover data from previous operations
    xor rdx, rdx

    ; qutotient: rax = rdx:rax / r/m64
    ; remainder: rdx = rdx:rax % r/m64
    ; both operations are performed at the same time, using the div instruction:w
    ; in this case the divisor is stored in rbx
    mov rax, 10
    mov rbx, 3
    div rbx

    PRINTF64 `Quotient is: %u\n\x0`, rax
    PRINTF64 `Remainder is: %u\n\x0`, rdx

    leave
    ret
