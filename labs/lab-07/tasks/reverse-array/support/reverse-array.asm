%include "printf64.asm"

%define ARRAY_LEN 7

section .data

input dq 122, 184, 199, 242, 263, 845, 911
output times ARRAY_LEN dq 0

section .text

extern printf
global main
main:
    push rbp
    mov rbp, rsp

    ; TODO push the elements of the array on the stack
    ; TODO retrieve the elements (pop) from the stack into the output array

    PRINTF64 `Reversed array: \n\x0`
    xor rcx, rcx
print_array:
    mov rdx, [output + 8 * rcx]
    PRINTF64 `%ld\n\x0`, rdx
    inc rcx
    cmp rcx, ARRAY_LEN
    jb print_array

    xor rax, rax

    mov rsp, rbp
    pop rbp
    ret
