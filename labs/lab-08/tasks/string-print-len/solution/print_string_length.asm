section .data
    print_format db "String length is %d", 10, 0

section .text

extern printf
global print_string_length

print_string_length:
    push rbp
    mov rbp, rsp

    sub rsp, 8              ; align the stack
    push rcx                ; save the string length

    mov rcx, rdi            ; get the string length from the stack

    mov rdi, print_format
    mov rsi, rcx
    call printf

    pop rcx                 ; restore the string length
    add rsp, 8              ; restore the stack pointer

    leave
    ret
