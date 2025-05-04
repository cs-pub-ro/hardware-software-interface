section .text

extern puts
global print_string

print_string:
    push rbp
    mov rbp, rsp

    ; call the puts function
    ; as the argument is already placed in rdi by the caller
    call puts

    leave
    ret
