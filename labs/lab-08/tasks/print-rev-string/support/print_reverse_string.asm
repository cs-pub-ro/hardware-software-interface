section .text
extern printf
extern puts
global print_reverse_string

; TODO: add the reverse_string() function

print_reverse_string:
    push rbp
    mov rbp, rsp

    ; TODO: save the used registers and align the stack, if needed

    ; TODO: call the reverse_string() function and print the reversed string

    ; TODO: restore the used registers and the stack pointer, if altered

    leave
    ret
