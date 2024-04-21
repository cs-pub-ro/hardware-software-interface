%include "../utils/printf32.asm"

section .data
    mystring db "This is my string", 0
    fmt_str db "[before]: %s\n[after]: ", 0

section .text

extern puts
extern printf
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

    ; TODO: print reverse string

    leave
    ret
