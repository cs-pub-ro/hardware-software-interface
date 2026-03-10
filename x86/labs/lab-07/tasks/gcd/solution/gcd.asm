;  SPDX-License-Identifier: BSD-3-Clause

%include "../utils/printf32.asm"

section .text

extern printf
global main
main:
    ; Input values (eax, edx) : the 2 numbers to compute the gcd for.
    mov eax, 49
    mov edx, 28

    push eax
    push edx

gcd:
    neg eax
    je gcd_end

swap_values:
    neg eax
    push eax
    push edx
    pop eax
    pop edx

subtract_values:
    sub eax,edx
    jg subtract_values
    jne swap_values

gcd_end:
    add eax,edx
    jne print
    inc eax

print:
    pop edx
    pop ebx

    PRINTF32 `gcd(%d, %d) = %d\n\x0`, ebx, edx, eax  ; eax = greatest common divisor

    xor eax, eax
    ret
