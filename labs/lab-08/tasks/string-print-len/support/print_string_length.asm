section .data
    print_format db "String length is %d", 10, 0

section .text

extern printf
global print_string_length

print_string_length:
    push rbp
    mov rbp, rsp

    ; TODO: save the used registers and align the stack, if needed

    ; TODO: print the string length

    ; TODO: restore the used registers and the stack pointer, if altered

    leave
    ret
