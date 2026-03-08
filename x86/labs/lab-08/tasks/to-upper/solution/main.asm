section .data
    before_format db "before %s", 13, 10, 0
    after_format db "after %s", 13, 10, 0
    mystring db "abcdefghij", 0

section .text

extern printf
extern to_upper
global main

main:
    push ebp
    mov ebp, esp

    push mystring
    push before_format
    call printf
    add esp, 8

    push mystring
    call to_upper
    add esp, 4

    push mystring
    push after_format
    call printf
    add esp, 8

    leave
    ret
