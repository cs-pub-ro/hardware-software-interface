section .data
    mystring db "This is my string", 0
    fmt_str db "[before]: %s\n[after]: ", 0

section .text

extern printf
extern print_reverse_string
global main

main:
    push ebp
    mov ebp, esp

    mov eax, mystring
    xor ecx, ecx
test_one_byte:
    mov bl, [eax]
    test bl, bl
    je out
    inc eax
    inc ecx
    jmp test_one_byte

out:
    push mystring
    push fmt_str
    call printf
    add esp, 8

    push ecx
    push mystring
    call print_reverse_string
    add esp, 8

    leave
    ret
