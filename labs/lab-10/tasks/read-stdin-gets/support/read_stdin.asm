; SPDX-License-Identifier: BSD-3-Clause


; Fill buffer with data from standard input.
; Buffer is stored on the stack.

extern printf
extern puts
extern strlen
extern gets

section .data
    read_message: db "insert buffer string: ", 0
    buffer_intro_message: db "buffer is:", 0
    byte_format: db " %02X(%c)", 0
    null_string: db 0
    var_message_and_format: db "var is 0x%08X", 13, 10, 0

section .text

global main

main:
    push rbp
    mov rbp, rsp

    ; Make room for local variable (8 bytes for alignment safety).
    ; Variable address is at rbp - 8.
    sub rsp, 8

    ; Make room for buffer (64 bytes).
    ; Buffer address is at rbp - 72.
    sub rsp, 64

    sub rsp, 8  ; align stack

    ; Initialize local variable.
    mov dword [rbp - 8], 0xCAFEBABE

    ; Read buffer from standard input.
    mov rdi, read_message
    xor rax, rax
    call printf

    lea rdi, [rbp - 72]
    call gets

    ; Push string length on the stack.
    ; String length isr stored at rbp - 80.
    lea rdi, [rbp - 72]
    call strlen
    push rax

    sub rsp, 8  ; align stack

    ; Text before printing buffer.
    mov rdi, buffer_intro_message
    xor eax, eax
    call printf

    xor rcx, rcx
print_byte:
    xor rax, rax
    lea rbx, [rbp - 72]
    mov al, byte[rbx + rcx]
    push rcx    ; save rcx, printf may modify it
    sub rsp, 8  ; align stack for printf

    movsx esi, al
    mov edx, esi
    mov rdi, byte_format
    xor rax, rax
    call printf

    add rsp, 8  ; restore stack
    pop rcx     ; restore rcx

    inc rcx
    cmp rcx, [rbp - 80]
    jl print_byte

    mov rdi, null_string
    call puts

    ; Print local variable.
    mov esi, [rbp - 8]
    mov rdi, var_message_and_format
    xor rax, rax
    call printf

    leave
    ret
