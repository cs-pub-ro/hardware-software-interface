; SPDX-License-Identifier: BSD-3-Clause

%include "printf64.asm"

%define ARRAY_SIZE    10

section .data
    qword_array dq 1392, 12544, 7991, 6992, 7202, 27187, 28789, 17897, 12988, 17992
    fmt_str db "Num even is %lu, num odd is %lu", 10, 0

section .text
extern printf
global main
main:
    push rbp
    mov rbp, rsp

    mov rcx, ARRAY_SIZE     ; Use rcx as loop counter.
    xor rsi, rsi            ; Store even number in `rsi`.
    xor rdi, rdi            ; Store odd number in `rdi`.
next_element:
    ; We need to initialize the dividend (rdx:rax) to 0:array_element
    xor rdx, rdx
    mov rax, qword [qword_array + rcx*8 - 8]
    ; Store the divisor (2) in `rbx`.
    mov rbx, 2
    div rbx

    ; rdx stores remainder. If remainder is 0, number is even, otherwise number is odd.
    test rdx, rdx
    jne add_to_odd
    inc rsi
    jmp test_end
add_to_odd:
    inc rdi
test_end:
    loop next_element ; Decrement `rcx`, if not zero, go to next element.

    ; Save rdi since we need it for a parameter but it's also our odd count
    push rdi

    ; Use correct parameter passing for x86_64
    mov rdi, fmt_str        ; First arg: format string
    ; rsi already has even count
    pop rdx                 ; Third arg: odd count
    xor rax, rax            ; No vector registers used
    call printf

    leave
    ret