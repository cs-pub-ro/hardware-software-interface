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

    ; The two sets can be found in the registers rax and rbx
    mov rax, QWORD [FIRST_SET]
    mov rbx, QWORD [SECOND_SET]
    PRINTF64 `%u\n\x0`, rax ; print the first set
    PRINTF64 `%u\n\x0`, rbx ; print the second set

    ; TODO1: reunion of the two sets
    mov rdx, rax
    or rdx, rbx
    PRINTF64 `%u\n\x0`, rdx

    ; TODO2: adding an element to a set
    or rax, 0x300   ; We will add the elements 8 and 9 to the set
                    ; 0x300 <==> ...11|0000|0000
    PRINTF64 `%u\n\x0`, rax

    ; TODO3: intersection of the two sets
    mov rdx, rax
    and rdx, rbx
    PRINTF64 `%u\n\x0`, rdx

    ; TODO4: the complement of a set
    mov rdx, rax
    not rdx
    PRINTF64 `%u\n\x0`, rdx

    ; TODO5: removal of an element from a set
    ; We will remove the 3rd element from the set
    mov rdx, 1
    shl rdx, 3
    not rdx
    and rax, rdx
    PRINTF64 `%u\n\x0`, rax

    ; TODO6: difference of two sets
    not rbx
    and rax, rbx
    PRINTF64 `%u\n\x0`, rax

    xor rax, rax

    leave
    ret
