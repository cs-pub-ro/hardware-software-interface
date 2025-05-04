section .data
    before_format db "before %s", 13, 10, 0
    after_format db "after %s", 13, 10, 0
    mystring db "abcdefghij", 0

section .text

extern printf
extern to_upper
global main

main:
    push rbp
    mov rbp, rsp

    mov rdi, before_format
    mov rsi, mystring
    call printf

    mov rdi, mystring
    call to_upper

    mov rdi, after_format
    mov rsi, mystring
    call printf

    leave
    ret
