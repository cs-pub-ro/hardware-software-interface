section .text
extern printf
extern puts
global print_reverse_string

; TODO: add the reverse_string() function

print_reverse_string:
    push rbp
    mov rbp, rsp

    sub rsp, 8              ; leave room in order to align the stack
    push rbx                ; preserve rbx, r12-r15 as required by cdecl
    push r12
    push r13
    push r14
    push r15

    ; TODO: call the reverse_string() function and print the reversed string

    pop r15
    pop r14
    pop r13
    pop r12
    pop rbx                ; restore rbx, r12-r15
    add rsp, 8

    leave
    ret
