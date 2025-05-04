%include "../utils/printf64.asm"

section .data
    mystring db "This is my string", 0

section .text

extern printf
extern print_string
global main
main:
    push rbp
    mov rbp, rsp

    PRINTF64 `[PRINTF64]: %s\n[PUTS]: \x0`, mystring

    mov rdi, mystring
    call print_string

    leave
    ret
