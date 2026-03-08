%include "printf64.asm"

section .text

extern printf
global main
main:
    push rbp
    mov rbp, rsp

    ; numbers are placed in these two registers
    mov rax, 1
    mov rbx, 4

    ; TODO: get maximum value. You are only allowed to use one conditional jump and push/pop instructions.

    PRINTF64 `Max value is: %ld\n\x0`, rax ; print maximum value

    mov rsp, rbp
    pop rbp
    ret
