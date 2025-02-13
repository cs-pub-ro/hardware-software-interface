; SPDX-License-Identifier: BSD-3-Clause

%include "printf32.asm"

section .data
    myString: db "Hello, World!", 0

section .text
    global main
    extern printf

main:
    mov ecx, 6                      ; N = the value stored in ecx
    mov eax, 1
    mov ebx, 1
    cmp eax, ebx
    je print                        ; TODO1: eax > ebx?
    ret

print:
    PRINTF32 `%s\n\x0`, myString
                                    ; TODO2.2: print "Hello, World!" N times
                                    ; TODO2.1: print "Goodbye, World!"

    ret
