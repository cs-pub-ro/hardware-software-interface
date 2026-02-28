section .text

extern puts
global print_string

print_string:
    push ebp
    mov ebp, esp
    push ebx                ; preserve ebx as required by cdecl

    ; TODO: print the string

    pop ebx
    leave
    ret
