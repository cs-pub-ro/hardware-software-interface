%include "../utils/printf64.asm"

section .data
    msg db 10, 'printf called now', 10, 10, 0

section .text

; We need to mark "printf()" as an external function. This means it is not implemented in this file.
; The linker will resolve this symbol by looking for it in other object files.
extern printf

global main

main:
    push rbp		;  Since main is a function, it has to adhere to the same convention
    mov rbp, rsp

    ; store information in registers that should be caller saved,
    ; rax, rcx, rdx, rsi, rdi, r8, r9
    mov rax, 0x1
    mov rcx, 0x2
    mov rdx, 0x3
    mov rsi, 0x4
    mov rdi, msg
    mov r8, 0x6
    mov r9, 0x7

    ; store information in registers that should be callee saved,
    ; rbx, r12, r13, r14, r15
    mov rbx, 0x8
    mov r12, 0x9
    mov r13, 0xa
    mov r14, 0xb
    mov r15, 0xc

    ; print the caller-saved registers before the call
    PRINTF64 `rax=%x\nrcx=%x\nrdx=%x\nrsi=%x\nrdi=%x\n`, rax, rcx, rdx, rsi, rdi
    PRINTF64 `r8=%x\nr9=%x\n`, r8, r9

    ; print the callee-saved registers before the call
    PRINTF64 `rbx=%x\nr12=%x\nr13=%x\nr14=%x\nr15=%x\n`, rbx, r12, r13, r14, r15

    call printf

    ; print the registers after the call
    PRINTF64 `rax=%x\nrcx=%x\nrdx=%x\nrsi=%x\nrdi=%x\n`, rax, rcx, rdx, rsi, rdi
    PRINTF64 `r8=%x\nr9=%x\n`, r8, r9

    ; print the callee-saved registers after the call
    PRINTF64 `rbx=%x\nr12=%x\nr13=%x\nr14=%x\nr15=%x\n`, rbx, r12, r13, r14, r15

    leave
    ret
