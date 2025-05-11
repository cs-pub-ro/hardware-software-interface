; SPDX-License-Identifier: BSD-3-Clause

%include "printf64.asm"

%define ARRAY_SIZE    10

section .data
    qword_array dq 1392, -12544, -7992, -6992, 7202, 27187, 28789, -17897, 12988, 17992
    fmt_str db "Num pos is %lu, num neg is %lu", 10, 0

section .text
extern printf
global main
main:
    push rbp
    mov rbp, rsp

    mov rcx, ARRAY_SIZE     ; Use rcx as loop counter.
    xor rbx, rbx            ; Store positive number in rbx.
    xor rdx, rdx            ; Store negative number in rdx.
next_element:
    mov rax, qword [qword_array + rcx*8 - 8]
    cmp rax, 0
    jl add_to_neg
    inc rbx
    jmp test_end
add_to_neg:
    inc rdx
test_end:
    loop next_element ; Decrement rcx, if not zero, go to next element.

    ; Save rdx as it will be used by printf
    push rdx

    ; Call printf with proper x86_64 calling convention
    mov rdi, fmt_str        ; First arg: format string
    mov rsi, rbx            ; Second arg: positive count
    pop rdx                 ; Third arg: negative count (restore from stack)
    xor rax, rax            ; No vector registers used
    call printf

    leave
    ret