section .data
    print_format db "String length is %d", 10, 0

section .text

extern printf
global print_string_length

print_string_length:
    push ebp
    mov ebp, esp
    push ebx                ; preserve ebx as required by cdecl

    mov ecx, [ebp + 8]      ; get the string length from the stack

    push ecx
    push print_format
    call printf
    add esp, 8

    pop ebx
    leave
    ret
