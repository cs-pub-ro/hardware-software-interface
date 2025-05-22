; SPDX-License-Identifier: BSD-3-Clause


; Fill buffer with data from standard input.
; Buffer is stored on the stack.

extern printf
extern puts
extern strlen
extern fgets
extern stdin

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

    ; Make room for local variable (64-bit, 8 bytes).
    ; Variable address is at rbp - 8.
    sub rsp, 8

    ; Make room for buffer (64 bytes).
    ; Buffer address is at rbp - 72.
    sub rsp, 64

    sub rsp, 8                  ; align stack

    ; Initialize local variable.
    mov dword [rbp - 8], 0xCAFEBABE

    ; Read buffer from standard input.
    mov rdi, read_message
    xor eax, eax
    call printf

    ; The buffer has only 64 bytes of memory allocated
    ; The last one is for null terminator
    ; So, with 64 + 1 + 4 = 69
    ; There can still be a full overflow of local var
    ; I suggest observing the code with 68 instead
    ; as well.
    lea rdi, [rbp - 72]         ; buffer
    mov esi, 69                 ; size
    mov rdx, [rel stdin]        ; FILE* stdin
    call fgets

    ; Compute string length
    lea rdi, [rbp - 72]
    call strlen
    push rax                    ; store length
    sub rsp, 8                  ; align stack

    ; Text before printing buffer.
    mov rdi, buffer_intro_message
    xor eax, eax
    call printf

    xor rcx, rcx
print_byte:
    xor eax, eax
    lea rbx, [rbp - 72]
    mov al, byte [rbx + rcx]

    push rcx                    ; save rcx
    sub rsp, 8                  ; align stack for printf

    ; Print current byte.
    movsx esi, al               ; 2nd arg: %c
    mov edx, esi                ; 3rd arg: %02X
    mov rdi, byte_format
    xor eax, eax
    call printf

    add rsp, 8                  ; restore stack
    pop rcx                     ; restore rcx
    inc rcx
    cmp rcx, [rbp - 80]
    jl print_byte

    ; Final puts
    mov rdi, null_string
    call puts

    ; Print local variable.
    mov esi, [rbp - 8]               ; value
    mov rdi, var_message_and_format  ; format string
    xor eax, eax
    call printf

    leave
    ret
