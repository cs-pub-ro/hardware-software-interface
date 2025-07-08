section .text

global sum7

sum7:
    push rbp
    mov rbp, rsp

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

    leave
    ret
