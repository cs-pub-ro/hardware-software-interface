%include "printf64.asm"

section .text

extern printf
global main
main:
    sub rsp, 8  ;; Necessary for stack alignment

    ; input values (rax, rdx): the 2 numbers to compute the gcd for
    mov rax, 49
    mov rdx, 28

    push rax
    push rdx

gcd:
    neg rax
    je gcd_end

swap_values:
    neg rax
    push rax
    push rdx
    pop rax
    pop rdx

subtract_values:
    sub rax,rdx
    jg subtract_values
    jne swap_values

gcd_end:
    add rax,rdx
    jne print
    inc rax

print:

    ; TODO 1: solve the 'Segmentation fault!' error

    ; TODO 2: print the result in the form of: "gdc(rax, rdx)=7" with PRINTF64 macro
    ; output value in rax

    xor rax, rax

    add rsp, 8  ;; Necessary for stack alignment
    ret
