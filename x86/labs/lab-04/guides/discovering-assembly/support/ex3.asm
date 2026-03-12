; SPDX-License-Identifier: BSD-3-Clause

%include "printf32.asm"

section .text
    global main
    extern printf

main:
    mov eax, zone2
    jmp eax                     ; unconditional jump to the address stored
                                ; in the eax register
zone1:
    mov eax, 1
    mov ebx, 2
    add eax, ebx
    PRINTF32 `%d\n\x0`, eax
jump1:
    jmp exit

zone2:
    mov eax, 7
    mov ebx, 8
    add eax, ebx
    PRINTF32 `%d\n\x0`, eax
jump2:
    jmp $-0x4A                 ; relative jump with a negative offset
                               ; to the address of the previous instruction

exit:
    ret
