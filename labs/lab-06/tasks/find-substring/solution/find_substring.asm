; SPDX-License-Identifier: BSD-3-Clause

%include "printf64.asm"

section .data
source_text: db "ABCABCBABCBABCBBBABABBCBABCBAAACCCB", 0
substring: db "BABC", 0

print_format: db "Substring found at index: %d", 10, 0

section .text
extern printf
global main
main:
    push rbp
    mov rbp, rsp

    mov r8, source_text
    mov r9, substring

source_loop:
    mov rax, r8
    mov rdx, r9

substr_loop:
    cmp byte [rdx], 0
    je found_substr
    mov bl, byte [rax]
    cmp byte [rdx], bl
    jne exit_substr_loop
    inc rax
    inc rdx
    jmp substr_loop

found_substr:
    push rax                ; Save the registers that may be modified by printf according to the
    push rdx                ; calling convention.
    push r8                 ; Make sure to write and extra push-pop pair in case of segfault
    push r9                 ; (because calling convention states the stack must be have a 16 or 32
    mov rsi, r8             ; byte alignment)
    sub rsi, source_text
    mov rdi, print_format
    xor al, al              ; al is used to indicate the number of vector arguments passed
                            ; to a function requiring a variable number of arguments
    call printf             ; MORE ON CALLING CONVENTIONS IN THE FUNCTIONS LAB
    pop r9
    pop r8
    pop rdx
    pop rax

exit_substr_loop:
    inc r8
    cmp byte [r8], 0
    je exit
    jmp source_loop

exit:
    leave
    ret
