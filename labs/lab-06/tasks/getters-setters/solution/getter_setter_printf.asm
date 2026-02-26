; SPDX-License-Identifier: BSD-3-Clause

%include "printf64.asm"

struc my_struct
    int_x: resb 4
    char_y: resb 1
    string_s: resb 32
endstruc

section .data
    sample_obj:
        istruc my_struct
            at int_x, dd 1000
            at char_y, db 'a'
            at string_s, db 'My string is better than yours', 0
        iend

    new_int dd 2000
    new_char db 'b'
    new_string db 'Are you sure?', 0

section .text
extern printf
global main

main:
    push rbp
    mov rbp, rsp

    PRINTF64 `int_x: %d\n\x0`, qword [sample_obj + int_x]
    PRINTF64 `char_y: %c\n\x0`, qword [sample_obj + char_y]
    lea rax, [sample_obj + string_s]
    PRINTF64 `string_s: %s\n\x0`, rax

    mov rax, [new_int]
    mov [sample_obj + int_x], rax

    mov al, [new_char]
    mov [sample_obj + char_y], al

    mov rcx, 0
copy:
    mov bl, [new_string + rcx]
    mov [sample_obj + string_s + rcx], bl
    inc rcx
    cmp bl, 0
    jnz copy

    PRINTF64 `int_x: %d\n\x0`, qword [sample_obj + int_x]
    PRINTF64 `char_y: %c\n\x0`, qword [sample_obj + char_y]
    lea rax, [sample_obj + string_s]
    PRINTF64 `string_s: %s\n\x0`, rax

    xor rax, rax
    leave
    ret
