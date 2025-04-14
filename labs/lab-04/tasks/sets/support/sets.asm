; SPDX-License-Identifier: BSD-3-Clause

%include "printf64.asm"

section .data
    FIRST_SET: dq 139   ; The first set
    SECOND_SET: dq 169  ; The second set

section .text
    global main
    extern printf

main:
    push rbp
    mov rbp, rsp

    ; The two sets can be found in the FIRST_SET and SECOND_SET variables
    mov rax, QWORD [FIRST_SET]
    mov rbx, QWORD [SECOND_SET]
    PRINTF64 `%u\n\x0`, rax ; print the first set
    PRINTF64 `%u\n\x0`, rbx ; print the second set

    ; TODO1: reunion of the two sets


    ; TODO2: adding an element to a set


    ; TODO3: intersection of the two sets


    ; TODO4: the complement of a set


    ; TODO5: removal of an element from a set


    ; TODO6: difference of two sets

    xor rax, rax

    leave
    ret
