;  SPDX-License-Identifier: BSD-3-Clause

%include "../utils/printf64.asm"

section .text

extern printf
global main
main:
    sub rsp, 8  ;; Necessary for stack alignment

    ; Input values (rax, rdx) : the 2 numbers to compute the gcd for.
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
    pop rdx
    pop rbx

    PRINTF64 `gcd(%ld, %ld) = %ld\n\x0`, rbx, rdx, rax  ; rax = greatest common divisor

    xor rax, rax

    add rsp, 8  ;; Necessary for stack alignment
    ret
