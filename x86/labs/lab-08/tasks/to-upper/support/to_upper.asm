section .text

global to_upper

to_upper:
    push ebp
    mov ebp, esp
    push ebx                ; preserve ebx as required by cdecl

    ; TODO

    pop ebx
    leave
    ret
