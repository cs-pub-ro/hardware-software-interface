; SPDX-License-Identifier: BSD-3-Clause


; Fill buffer with data and print it. Buffer is 64 bytes long and
; is stored on the stack.

extern printf
extern puts

section .data
    buffer_intro_message: db "buffer is:", 0
    byte_format: db " %02X", 0
    null_string: db 0
    var_message_and_format: db "var is 0x%08X", 13, 10, 0

section .text

global main

main:
    push rbp
    mov rbp, rsp

    ; Make room for local variabile (64-bit, 8 bytes).
    ; Variable address is at rbp - 8.
    sub rsp, 8

    ; Make room for buffer (64 bytes).
    ; Buffer address is at rbp - 72.
    sub rsp, 64

    ; Initialize local variable.
    mov dword [rbp - 8], 0xCAFEBABE

    ; Fill data in buffer: buffer[i] = i + 1
    ; Use rbx as buffer base address, rcx as index and dl as value.
    ; dl needs to be rcx + 1.
    ; Buffer length is 64 bytes.
    lea rbx, [rbp - 72]
    xor rcx, rcx
fill_byte:
    mov dl, cl
    inc dl
    mov byte [rbx + rcx], dl
    inc rcx
    cmp rcx, 64
    jl fill_byte

    ; solution TODO 3
    mov dword [rbx + rcx], 0xDEADBEEF

    ; Text before printing buffer.
    mov rdi, buffer_intro_message
    xor eax, eax
    call printf

    xor rcx, rcx
print_byte:
    xor eax, eax
    lea rbx, [rbp - 72]
    mov al, byte[rbx + rcx]
    push rcx                ; save rcx

    movzx esi, al          ; 2nd arg: char (printable)
    mov edx, esi           ; 3rd arg: hex value
    mov rdi, byte_format   ; 1st arg: format string
    xor eax, eax
    call printf

    pop rcx                ; restore rcx
    inc rcx
    cmp rcx, 76            ; solution TODO 1 and TODO 2
    jl print_byte

    ; Print new line. C equivalent instruction is puts("").
    sub rsp, 8             ; align stack
    mov rdi, null_string
    call puts
    add rsp, 8

    ; Print local variable.
    mov esi, [rbp - 8]                ; value
    mov rdi, var_message_and_format   ; format
    xor eax, eax
    call printf

    leave
    ret
