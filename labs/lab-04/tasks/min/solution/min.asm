; SPDX-License-Identifier: BSD-3-Clause

%include "printf32.asm"

section .data
    FIRST_NUMBER dd 4  ; The first number
    SECOND_NUMBER dd 1 ; The second number

section .text
    global main
    extern printf

main:
    ; The two numbers can be found in the registers eax and ebx
    mov eax, DWORD [FIRST_NUMBER]  ; The first number
    mov ebx, DWORD [SECOND_NUMBER] ; The second number
    PRINTF32 `%d\n\x0`, eax ; print the first number
    PRINTF32 `%d\n\x0`, ebx ; print the second number

    ; TODO: find the minimum of the two numbers and store it in eax
    cmp eax, ebx
    jl print_min
    xchg eax, ebx
print_min:
    PRINTF32 `%d\n\x0`, eax ; print the minimum number
    xor eax, eax
    ret
