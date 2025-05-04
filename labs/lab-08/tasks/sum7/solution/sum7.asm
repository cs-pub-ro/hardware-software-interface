section .text

global sum7

sum7:
    push rbp
    mov rbp, rsp

    sub rsp, 8              ; leave room in order to align the stack
    push rbx                ; preserve rbx, r12-r15 as required by cdecl
    push r12
    push r13
    push r14
    push r15

    ; clear rax
    xor rax, rax

    ; rdi, rsi, rdx, rcx, r8, r9 are the first 6 arguments
    ; [rbp + 16] is the 7th argument
    mov rax, [rbp + 16]
    add rax, rdi
    add rax, rsi
    add rax, rdx
    add rax, rcx
    add rax, r8
    add rax, r9

    pop r15
    pop r14
    pop r13
    pop r12
    pop rbx                ; restore rbx, r12-r15
    add rsp, 8

    leave
    ret
