section .text
global rot13

rot13:
    push ebp
    mov ebp, esp
    push ebx                ; preserve ebx as required by cdecl

    ; TODO

    pop ebx
    leave
    ret
