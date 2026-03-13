section .text
extern printf
extern puts
global print_reverse_string

; TODO: add the reverse_string() function

print_reverse_string:
    push ebp
    mov ebp, esp
    push ebx                ; preserve ebx as required by cdecl

    ; TODO: call the reverse_string() function and print the reversed string

    pop ebx
    leave
    ret
