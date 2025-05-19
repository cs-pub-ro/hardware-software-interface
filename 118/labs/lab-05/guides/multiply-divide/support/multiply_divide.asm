; SPDX-License-Identifier: BSD-3-Clause

%include "printf32.asm"

section .text

extern printf
global main
main:
    push ebp
    mov ebp, esp

    ; edx:eax = eax * r/m32, where r/m32 is a 32-bit register or memory location
    mov eax, 10
    mov ebx, 30
    mul ebx

    PRINTF32 `Result is: %u\n\x0`, eax

    ; make sure to always clear the edx register before performing a division
    ; there might be leftover data from previous operations
    xor edx, edx

    ; qutotient: eax = edx:eax / r/m32
    ; remainder: edx = edx:eax % r/m32
    ; both operations are performed at the same time, using the div instruction:w
    ; in this case the divisor is stored in ebx
    mov eax, 10
    mov ebx, 3
    div ebx

    PRINTF32 `Quotient is: %u\n\x0`, eax
    PRINTF32 `Remainder is: %u\n\x0`, edx

    leave
    ret
