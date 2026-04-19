; SPDX-License-Identifier: BSD-3-Clause


; Fill buffer with data and print it.
; Buffer is stored in .data section (initialized data).

extern printf
extern puts

section .data
    buffer: times 64 db 5
    len: equ $-buffer

    buffer_intro_message: db "buffer is:", 0
    byte_format: db " %02X", 0
    null_string: db 0

section .text
global main

main:
    push rbp
    mov rbp, rsp

    ; Fill data in buffer: buffer[i] = i + 1
    ; ecx is buffer index (i), dl is buffer value (i + 1). dl needs to be ecx + 1.
    ; Buffer length is 64 bytes.
    xor rcx, rcx
fill_byte:
    mov dl, cl
    inc dl
    mov byte [buffer + rcx], dl
    inc rcx
    cmp rcx, len
    jl fill_byte

    ; printf("buffer is:");
    xor rax, rax                    ; required for variadic functions
    mov rdi, buffer_intro_message   ; 1st arg
    call printf

    xor rcx, rcx
print_byte:
    mov rdi, byte_format            ; 1st arg (format)
    xor rsi, rsi                    ; clear rsi
    mov sil, byte [buffer + rcx]    ; 2nd arg (value)
    xor rax, rax                    ; variadic call requirement

    push rcx                        ; save rcx (caller-saved)
    call printf
    pop rcx                         ; restore rcx

    inc rcx
    cmp rcx, len
    jl print_byte

    ; Print new line. C equivalent instruction is puts("").
    mov rdi, null_string
    call puts

    leave
    ret