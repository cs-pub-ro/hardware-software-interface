%include "../utils/printf64.asm"

section .data
    mystring db "This is my string", 0

section .text

extern printf
extern print_string_length
global main

main:
    push rbp
    mov rbp, rsp

    mov rax, mystring
    xor rcx, rcx
test_one_byte:
    mov bl, [rax]
    test bl, bl
    je out
    inc rax
    inc rcx
    jmp test_one_byte

out:
    PRINTF64 `[PRINTF64]: %d\n[printf]: \x0`, rcx

    mov rdi, rcx
    call print_string_length

    leave
    ret
