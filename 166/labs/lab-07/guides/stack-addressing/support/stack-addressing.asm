%include "printf64.asm"

section .text

extern printf
global main
main:
    push rbp
    mov rbp, rsp

    push qword 10
    push qword 11
    push qword 12
    push qword 13

    mov rax, rbp
print_stack:
    PRINTF64 `%p: %p\n\x0`, rax, qword [rax]

    sub rax, 8
    cmp rax, rsp
    jge print_stack

    xor rax, rax
    leave
    ret
