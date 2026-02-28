section .data
    print_format db "String length is %d", 10, 0

section .text

extern printf
global print_string_length

print_string_length:
    push ebp
    mov ebp, esp
    push ebx                ; preserve ebx as required by cdecl

    ; TODO: print the string length

    pop ebx
    leave
    ret
