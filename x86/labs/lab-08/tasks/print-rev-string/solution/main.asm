section .data
    mystring db "This is my string", 0
    print_format db "String length is %d", 10, 0

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
    ; save ecx's value since it can be changed by printf
    push ecx

    push ecx
    push print_format
    call printf
    add esp, 8

    pop ecx

    push ecx
    push mystring
    call print_reverse_string
    add esp, 8

    leave
    ret
