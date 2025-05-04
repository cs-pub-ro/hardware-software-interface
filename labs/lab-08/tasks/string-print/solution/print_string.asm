section .text

extern puts
global print_string

print_string:
    push rbp
    mov rbp, rsp

    sub rsp, 8              ; leave room in order to align the stack
    push rbx                ; preserve rbx, r12-r15 as required by cdecl
    push r12
    push r13
    push r14
    push r15

    ; call the puts function
    ; as the argument is already placed in rdi by the caller
    call puts

    pop r15
    pop r14
    pop r13
    pop r12
    pop rbx                ; restore rbx, r12-r15
    add rsp, 8

    leave
    ret
