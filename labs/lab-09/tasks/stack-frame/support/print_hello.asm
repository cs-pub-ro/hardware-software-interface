; SPDX-License-Identifier: BSD-3-Clause

global print_hello
extern printf

section .data
    message db "Hello", 0

section .text

;   TODO: Add the missing instruction
print_hello:
    push rbp

    xor rax, rax
    mov rdi, message
    call printf

    leave
    ret
