%include "printf32.asm"

section .text

extern printf
global main
main:
    push ebp
    mov ebp, esp

    push dword 10
    push dword 11
    push dword 12
    push dword 13

    mov eax, ebp
print_stack:
    PRINTF32 `%p: %p\n\x0`, eax, [eax]

    sub eax, 4
    cmp eax, esp
    jge print_stack

    xor eax, eax
    leave
    ret
