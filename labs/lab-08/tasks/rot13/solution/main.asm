section .data
    mystring db "lorem", 0, "ipsum", 0, "dolor", 0
    length   dd ($ - mystring)

    after_fmt  db "After:  %s", 10, 0

section .text
extern printf
extern rot13
global main

main:
    push rbp
    mov rbp, rsp

    mov rax, [length]

    sub rsp, 8          ; align the stack
    push mystring
    mov rdi, mystring
    mov rsi, rax
    call rot13
    add rsp, 8

    mov rdi, after_fmt
    mov rsi, mystring
    call printf

    leave
    ret
