; SPDX-License-Identifier: BSD-3-Clause

%include "printf32.asm"

section .text
    global main
    extern printf

main:
    mov eax, 7                  ; load the eax register with the value 7
    mov ebx, 8                  ; load the ebx register with the value 8
    add eax, ebx                ; add the value from ebx to the value from eax
                                ; and store the result in eax
    PRINTF32 `%d\n\x0`, eax     ; print the value from the eax register
