%include "printf64.asm"

%define NUM 5
section .text

extern printf
global main
main:
    sub rsp, 8
    mov qword [rsp], rbp
    mov rbp, rsp

    mov rcx, NUM
push_nums:
    sub rsp, 8
    mov qword [rsp], rcx
    loop push_nums

    and rsp, -16  ;; Align the stack to 16 bytes

    sub rsp, 8
    mov qword [rsp], 0

    sub rsp, 8
    mov rax, "handsome"
    mov qword [rsp], rax

    sub rsp, 8
    mov rax, "is very "
    mov qword [rsp], rax

    sub rsp, 8
    mov rax, "Anthony "
    mov qword [rsp], rax
    lea rsi, [rsp]
    PRINTF64 `%s\n\x0`, rsi

    ; Print the stack in "address: value" format.
    mov rax, rbp
print_stack:
    PRINTF64 `0x%x: 0x%x\n\x0`, rax, qword [rax]

    sub rax, 8
    cmp rax, rsp
    jge print_stack

    ; Print the string.
    lea rsi, [rsp]
    PRINTF64 `%s\n\x0`, rsi

    ; Print the array.
    lea rax, [rsp + 40]

print_array:
    PRINTF64 `%d \x0`, qword [rax]

    add rax, 8
    cmp rax, rbp
    jl print_array
    PRINTF64 `\n\x0`

    ; Restore the previous value of the RBP (Base Pointer).
    mov rsp, rbp
    mov rbp, qword [rsp]
    add rsp, 8

    ; Exit without errors.
    xor rax, rax

    ret
