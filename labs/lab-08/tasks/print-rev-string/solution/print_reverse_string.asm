section .data
    store_string times 64 db 0

section .text
extern printf
extern puts
global print_reverse_string

reverse_string:
    push rbp
    mov rbp, rsp

    sub rsp, 8              ; leave room in order to align the stack
    push rbx                ; preserve rbx as required by the System V AMD64 ABI

    mov rax, rdi            ; get the address of the string
    mov rcx, rsi            ; get the length of the string
                            ; the address of the buffer to store the reversed string is already in rdx

    test rcx, rcx           ; check if length is zero
    jz done                 ; if zero, skip to null termination

    add rax, rcx            ; point to one past the last character
    dec rax                 ; point to the last character

copy_loop:
    mov bl, [rax]           ; get a byte from the source
    mov [rdx], bl           ; store it in the destination
    dec rax                 ; move to previous character in source
    inc rdx                 ; move to next character in destination
    dec rcx                 ; decrease counter
    jnz copy_loop           ; if counter not zero, continue loop

done:
    mov byte [rdx], 0       ; null-terminate the destination string

    pop rbx                ; restore rbx
    add rsp, 8

    leave
    ret

print_reverse_string:
    push rbp
    mov rbp, rsp

    mov rax, rdi            ; get the address of the string
    mov rcx, rsi            ; get the length of the string

    mov rdi, rax
    mov rsi, rcx
    mov rdx, store_string
    call reverse_string

    mov rdi, store_string
    call puts

    leave
    ret
