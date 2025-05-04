section .data
    print_format db "String length is %d", 10, 0

section .text

extern printf
global print_string_length

print_string_length:
    push rbp
    mov rbp, rsp

    sub rsp, 8              ; leave room in order to align the stack
    push rbx                ; preserve rbx, r12-r15 as required by cdecl
    push r12
    push r13
    push r14
    push r15

    mov rcx, rdi            ; get the string length from the stack

    mov rdi, print_format
    mov rsi, rcx
    call printf

    pop r15
    pop r14
    pop r13
    pop r12
    pop rbx                 ; restore rbx, r12-r15
    add rsp, 8

    leave
    ret
