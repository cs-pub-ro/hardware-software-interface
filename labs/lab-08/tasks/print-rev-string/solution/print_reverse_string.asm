section .data
    store_string times 64 db 0

section .text
extern printf
extern puts
global print_reverse_string

reverse_string:
    push ebp
    mov ebp, esp
    push ebx                ; preserve ebx as required by cdecl

    mov eax, [ebp + 8]      ; get the address of the string
    mov ecx, [ebp + 12]     ; get the length of the string
    mov edx, [ebp + 16]     ; get the address of the buffer

    test ecx, ecx           ; check if length is zero
    jz done                 ; if zero, skip to null termination

    add eax, ecx            ; point to one past the last character
    dec eax                 ; point to the last character

copy_loop:
    mov bl, [eax]           ; get a byte from the source
    mov [edx], bl           ; store it in the destination
    dec eax                 ; move to previous character in source
    inc edx                 ; move to next character in destination
    dec ecx                 ; decrease counter
    jnz copy_loop           ; if counter not zero, continue loop

done:
    mov byte [edx], 0       ; null-terminate the destination string

    pop ebx                 ; restore ebx
    leave
    ret

print_reverse_string:
    push ebp
    mov ebp, esp
    push ebx                ; preserve ebx as required by cdecl

    mov eax, [ebp + 8]      ; get the address of the string
    mov ecx, [ebp + 12]     ; get the length of the string

    push store_string
    push ecx
    push eax
    call reverse_string
    add esp, 12

    push store_string
    call puts
    add esp, 4

    pop ebx
    leave
    ret
