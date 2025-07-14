%include "printf64.asm"

%define NUM 5

section .text

extern printf
global main
main:
    mov rbp, rsp

    ; TODO 1: replace every "push" instruction by an equivalent sequence of commands (use direct addressing of memory. Hint: rsp)
    mov rcx, NUM
push_nums:
    push rcx
    loop push_nums

    push 0
    mov rax, "handsome"
    push rax
    mov rax, "is very "
    push rax
    mov rax, "Anthony "
    push rax

    lea rsi, [rsp]
    PRINTF64 `%s\n\x0`, rsi

    ; TODO 2: print the stack in "address: value" format in the range of [RSP:RBP]
    ; use PRINTF64 macro - see format above

    ; TODO 3: print the string

    ; TODO 4: print the array on the stack, element by element.

    ; restore the previous value of the rbp (Base Pointer)
    mov rsp, rbp

    ; exit without errors
    xor rax, rax
    ret
