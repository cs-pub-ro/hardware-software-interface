section .text

global to_upper

to_upper:
    push ebp
    mov ebp, esp
    push ebx                ; preserve ebx as required by cdecl

    mov eax, [ebp + 8]
check_one_byte:
    mov bl, [eax]
    test bl, bl
    je out
    sub bl, 0x20
    mov [eax], bl
    inc eax
    jmp check_one_byte

out:
    pop ebx
    leave
    ret
