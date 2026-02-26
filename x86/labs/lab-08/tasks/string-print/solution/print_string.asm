section .text

extern puts
global print_string

print_string:
    push ebp
    mov ebp, esp
    push ebx                ; preserve ebx as required by cdecl

    mov eax, [ebp + 8]      ; get the address of the string

    push eax
    call puts
    add esp, 4

    pop ebx
    leave
    ret
