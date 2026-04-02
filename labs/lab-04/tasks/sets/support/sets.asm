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
    mov rdx, rax
    or rdx, rbx
    PRINTF64 `%u\n\x0`, rdx;

    ; TODO2: adding an element to a set
    or rax, 6
    or rax, 7
    PRINTF64 `%u\n\x0`, rax;

    ; TODO3: intersection of the two sets
    mov rdx, rax
    and rdx, rbx
    PRINTF64 `%u\n\x0`, rdx;

    ; TODO4: the complement of a set
    mov rdx, rax
    not rdx
    PRINTF64 `%u\n\x0`, rdx;

    ; TODO5: removal of an element from a set
    shl rax, 4
    not rdx
    and rax, rdx
    PRINTF64 `%u\n\x0`, rax


    ; TODO6: difference of two sets
    not rbx
    and rax, rbx
    PRINTF64 `%u\n\x0`, rax;

    xor rax, rax

    leave
    ret
