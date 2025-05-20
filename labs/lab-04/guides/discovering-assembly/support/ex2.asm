; SPDX-License-Identifier: BSD-3-Clause

%include "printf32.asm"

section .text
    global main
    extern printf

main:
    mov eax, 4
    PRINTF32 `%d\n\x0`, eax

jump_incoming:
    jmp exit                    ; unconditional jump to the "exit" label

    mov eax, 7                  ; this code is unreachable, therefore not executed
    mov ebx, 8
    add eax, ebx
    PRINTF32 `%d\n\x0`, eax

exit:
    ret
