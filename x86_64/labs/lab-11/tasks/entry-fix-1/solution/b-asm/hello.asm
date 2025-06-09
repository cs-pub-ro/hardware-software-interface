; SPDX-License-Identifier: BSD-3-Clause

extern puts
global main

section .rodata

    hi_str db "Hi!", 0
    bye_str db "Bye!", 0

section .text

hi:
    push rbp
    mov rbp, rsp

    mov rdi, hi_str
    call puts

    leave
    ret

bye:
    push rbp
    mov rbp, rsp

    mov rdi, bye_str
    call puts

    leave
    ret

main:
    push rbp
    mov rbp, rsp

    call hi
    call bye

    leave
    ret
