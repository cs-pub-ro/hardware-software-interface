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

    ; TODO: compute the sum of the 7 integers received as arguments

    pop r15
    pop r14
    pop r13
    pop r12
    pop rbx                ; restore rbx, r12-r15
    add rsp, 8

    leave
    ret
