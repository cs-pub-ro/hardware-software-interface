%include "../utils/printf64.asm"

section .text

extern printf
global main
main:
    push rbp
    mov rbp, rsp

    ; Numbers are placed in these two registers.
    mov rax, 1
    mov rbx, 4

    cmp rax, rbx
    ja print_max
    push rax
    push rbx
    pop rax
    pop rbx

print_max:
    PRINTF64 `Max value is: %d\n\x0`, rax

    leave
    ret
