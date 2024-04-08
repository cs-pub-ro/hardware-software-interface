; SPDX-License-Identifier: BSD-3-Clause

%include "printf32.asm"

section .bss
    array3: resw 10

section .data
    array1: db 27, 35, 46, 14, 17, 29, 37, 104, 135
    array2: db 15, 38, 44, 20, 17, 33, 78, 143, 132

section .text
extern printf
global main

main:
    push ebp
    mov ebp, esp

    xor ecx, ecx
iterate_arrays:
    xor eax, eax
    xor ebx, ebx
    xor edx, edx
    mov al, byte[array1 + ecx]
    mov bl, byte[array2 + ecx]
    mul bl
    mov word[array3 + ecx * 2], ax
    inc ecx
    cmp ecx, 10
    jl iterate_arrays

    PRINTF32 `The array that results from the product of the corresponding elements in array1 and array2 is:\n\x0`

    xor ecx, ecx
    xor eax, eax
display:
    mov ax, word[array3 + ecx]
    PRINTF32 `%hu \x0`, eax
    inc ecx
    cmp ecx, 10
    jl display

    PRINTF32 `\n\x0`

    leave
    ret
