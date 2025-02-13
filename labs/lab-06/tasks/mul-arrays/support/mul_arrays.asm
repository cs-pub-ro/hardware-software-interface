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
    ; TODO: Traversing array1 and array2 and putting the result in array3
    PRINTF32 `The array that results from the product of the corresponding elements in array1 and array2 is:\n\x0`
    ; TODO: Traversing array3 and displaying its elements
    PRINTF32 `\n\x0`
    leave
    ret
