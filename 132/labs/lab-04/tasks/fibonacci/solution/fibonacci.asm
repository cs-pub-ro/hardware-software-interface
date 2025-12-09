; SPDX-License-Identifier: BSD-3-Clause

%include "printf32.asm"

section .data
    N: dd 7          ; N-th fibonacci number to calculate

section .text
    global main
    extern printf

main:
    mov ecx, DWORD [N]       ; we want to find the N-th fibonacci number; N = ECX = 7
    ; TODO: calculate the N-th fibonacci number (f(0) = 0, f(1) = 1)
    PRINTF32 `%d\n\x0`, ecx  ; DO NOT REMOVE/MODIFY THIS LINE

    mov eax, 0
    mov ebx, 1

fibonacci:
    dec ecx
    test ecx, ecx
    je print
    add eax, ebx
    xchg eax, ebx
    jmp fibonacci

print:
    PRINTF32 `%d\n\x0`, ebx
    xor eax, eax
    ret
