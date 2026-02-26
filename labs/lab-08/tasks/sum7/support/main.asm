%include "../utils/printf64.asm"

section .data
    fmt db "sum = %d", 10, 0

section .text

extern printf
extern sum7
global main
main:
    push rbp
    mov rbp, rsp

    sub rsp, 8      ; align stack
    mov rdi, 1
    mov rsi, 2
    mov rdx, 3
    mov rcx, 4
    mov r8, 5
    mov r9, 6
    mov r10, 7
    push r10
    call sum7
    pop r10
    add rsp, 8      ; restore stack

    mov rdi, fmt
    mov rsi, rax
    call printf

    leave
    ret
