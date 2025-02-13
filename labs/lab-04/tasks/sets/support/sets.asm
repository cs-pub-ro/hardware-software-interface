; SPDX-License-Identifier: BSD-3-Clause

%include "printf32.asm"

section .text
    global main
    extern printf

main:
    ; The two sets can be found in the registers eax and ebx
    mov eax, 139
    mov ebx, 169
    PRINTF32 `%u\n\x0`, eax ; print the first set
    PRINTF32 `%u\n\x0`, ebx ; print the second set

    ; TODO1: reunion of the two sets


    ; TODO2: adding an element to a set


    ; TODO3: intersection of the two sets


    ; TODO4: the complement of a set


    ; TODO5: removal of an element from a set


    ; TODO6: difference of two sets


    xor eax, eax
    ret
