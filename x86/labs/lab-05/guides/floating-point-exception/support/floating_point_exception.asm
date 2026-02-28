; SPDX-License-Identifier: BSD-3-Clause

%include "printf32.asm"

section .text

extern printf
global main
main:
    push ebp
    mov ebp, esp
    xor eax, eax
    xor ebx, ebx

    ; using 8 bit unsigned division, the result/quotient needs to be in the range [0, 255]
    ; 22891 / 2 = 11445, thus we will have an overflow, causing a floating point exception

    ; Tip:  1) find out what is the minimum value for `bl` such that it does not overflow
    ;       2) change the register sizes such that the division does not overflow

    mov ax, 22891
    mov bl, 2
    div bl

    ; qutoient is stored in al
    PRINTF32 `Result is: %hhu\n\0`, eax

    ; remainder is stored in ah, thus we need to shift it to the right by 8 bits
    shr eax, 8
    PRINTF32 `Result is: %hhu\n\0`, eax

    leave
    ret

