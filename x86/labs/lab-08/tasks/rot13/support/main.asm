section .data
    mystring db "lorem", 0, "ipsum", 0, "dolor", 0
    length   dd ($ - mystring)

    after_fmt  db "After:  %s", 10, 0

section .text
extern printf
extern rot13
global main

main:
    push ebp
    mov ebp, esp

    mov eax, [length]
    push eax
    push mystring
    call rot13
    add esp, 8

    push mystring
    push after_fmt
    call printf
    add esp, 8

    leave
    ret
