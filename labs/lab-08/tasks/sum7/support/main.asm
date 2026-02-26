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

    ; To Do

    mov rdi, fmt
    mov rsi, rax
    call printf

    leave
    ret
