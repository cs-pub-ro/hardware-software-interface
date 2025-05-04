section .data
    mystring db "This is my string", 0
    fmt_str db "[before]: %s", 10, "[after]: ", 0

section .text

extern printf
extern print_reverse_string
global main

main:
    push rbp
    mov rbp, rsp

    mov rax, mystring
    xor rcx, rcx

test_one_byte:
    mov bl, [rax]
    test bl, bl
    je out
    inc rax
    inc rcx
    jmp test_one_byte

out:
    ; save rcx's value since it can be changed by printf
    push rcx
    ; align the stack
    sub rsp, 8

    mov rdi, fmt_str
    mov rsi, mystring
    call printf

    add rsp, 8
    ; restore rcx's value
    pop rcx

    mov rdi, mystring
    mov rsi, rcx
    call print_reverse_string

    leave
    ret
