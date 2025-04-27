; SPDX-License-Identifier: BSD-3-Clause

%include "printf64.asm"

section .bss
    array3: resw 10

section .data
    array1: db 27, 35, 46, 14, 17, 29, 37, 104, 135, 124
    array2: db 15, 38, 44, 20, 17, 33, 78, 143, 132, 16

section .text
extern printf
global main

main:
    push rbp
    mov rbp, rsp

    xor rcx, rcx
iterate_arrays:
    xor rax, rax
    xor rbx, rbx
    xor rdx, rdx
    mov al, [array1 + rcx]
    mov bl, [array2 + rcx]
    mul bl
    mov word[array3 + rcx * 2], ax
    inc rcx
    cmp rcx, 10
    jl iterate_arrays

    PRINTF64 `The array that results from the product of the corresponding elements in array1 and array2 is:\n\x0`

    xor rcx, rcx
    xor rax, rax
display:
    PRINTF64 `%hu \x0`, qword [array3 + rcx * 2]
    inc rcx
    cmp rcx, 10
    jl display

    PRINTF64 `\n\x0`

    leave
    ret
