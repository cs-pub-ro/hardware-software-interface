; SPDX-License-Identifier: BSD-3-Clause


; Fill buffer with data from standard input.
; Buffer is stored on the stack.

extern stdin
extern printf
extern puts
extern strlen
extern fgets


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

    ; Make room for local variable (32 bit, 4 bytes).
    ; Variable address is at rbp - 4.
    sub rsp, 4

    ; Make room for buffer (64 bytes).
    ; Buffer address is at rbp - 68.
    sub rsp, 64

    ; Initialize local variable.
    mov dword [rbp - 4], 0xCAFEBABE

    ; Read buffer from standard input.
    xor rax, rax            ; rax has to be cleared before calling
                            ; variadic functions
    mov rdi, read_message
    call printf

    ; The buffer has only 64 bytes of memory allocated
    ; The last one is for null terminator
    ; So, with 64 + 1 + 4 = 69
    ; There can still be a full overflow of local var
    ; I suggest observing the code with 68 instead
    ; as well.
    lea rdi, [rbp - 68]
    mov rsi, 69
    mov rdx, [stdin]
    call fgets

    ; Push string length on the stack.
    ; String length is stored at rbp - 76.
    lea rdi, [rbp - 68]
    call strlen
    push rax        ; string len at [rbp - 76]

    ; Text before printing buffer.
    xor rax, rax            ; rax has to be cleared before calling
                            ; variadic functions
    mov rdi, buffer_intro_message
    call printf

    xor rcx, rcx
print_byte:
    xor rax, rax
    lea rbx, [rbp - 68]
    mov al, byte[rbx + rcx]
    push rcx	; save rcx, printf may modify it

    ; Print current byte.
    mov rdi, byte_format
    mov rsi, rax
    mov rdx, rax
    xor rax, rax        ; rax has to be cleared before calling
                        ; variadic functions
    call printf

    pop rcx	; restore rcx
    inc rcx
    cmp rcx, [rbp - 76]
    jl print_byte

    mov rdi, null_string
    call puts

    ; Print local variable.
    xor rax, rax        ; rax has to be cleared before calling
                        ; variadic functions
    mov rdi, var_message_and_format
    mov rsi, [rbp - 4]
    call printf

    leave
    ret
