; SPDX-License-Identifier: BSD-3-Clause

global main
extern printf
extern double_array

section .data
    myarray dd 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
    myarray_len equ 10

    format_string db "%d ", 0
    newline db 13, 10, 0

section .text

; RDI = array pointer
; RSI = array length
print_reverse_array:
    push rbp
    mov rbp, rsp

    ; save RBX in callee
    push rbx

    ; store copy of RDI; initialize counter register
    mov rbx, rdi
    mov rcx, rsi

next:
    ; TODO1: uncomment the following two lines
    ; push rcx
    xor rax, rax
    mov esi, [rbx + 4*rcx - 4]
    mov rdi, format_string
    call printf
    ; pop rcx
    loop next

    xor rax, rax
    mov rdi, newline
    call printf

    ; restore preserved register
    pop rbx

    leave
    ret


main:
    push rbp
    mov rbp, rsp

    mov rdi, myarray
    mov rsi, myarray_len

    ; TODO2: Uncomment this function call
    ; call double_array

    call print_reverse_array

    leave
    ret
