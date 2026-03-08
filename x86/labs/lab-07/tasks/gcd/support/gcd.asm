%include "printf32.asm"

section .text

extern printf
global main
main:
    ; input values (eax, edx): the 2 numbers to compute the gcd for
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

    ; TODO 1: solve the 'Segmentation fault!' error

    ; TODO 2: print the result in the form of: "gdc(eax, edx)=7" with PRINTF32 macro
    ; output value in eax

    xor eax, eax
    ret
