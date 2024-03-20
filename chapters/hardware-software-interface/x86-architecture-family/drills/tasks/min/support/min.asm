; SPDX-License-Identifier: BSD-3-Clause

%include "printf32.asm"

section .text
    global main
    extern printf

main:
    ; The two numbers can be found in the registers eax and ebx
    mov eax, 4
    mov ebx, 1
    ; TODO: find the minimum of the two numbers and store it in eax
    PRINTF32 `%d\n\x0`, eax ; print the minimum

    ret
