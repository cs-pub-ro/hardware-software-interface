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

    ; Make room for local variabile (32 bit, 4 bytes).
    ; Variable address is at rbp - 4.
    sub rsp, 4

    ; Make room for buffer (64 bytes).
    ; Buffer address is at rbp - 68.
    sub rsp, 64

    ; Initialize local variable.
    mov dword [rbp - 4], 0xCAFEBABE

    ; Fill data in buffer: buffer[i] = i + 1
    ; Use rbx as buffer base address, rcx as index and dl as value.
    ; dl needs to be rcx + 1.
    ; Buffer length is 64 bytes.
    lea rbx, [rbp - 68]
    xor rcx, rcx
fill_byte:
    mov dl, cl
    inc dl
    mov byte [rbx + rcx], dl
    inc rcx
    cmp rcx, 64
    jl fill_byte

    ; TODO 3: Write "DEADBEEF" instead of "CAFEBABE" in local var

    ; Text before printing buffer.
    xor rax, rax                    ; necessary before calling variadic functions (like printf)
    mov rdi, buffer_intro_message
    call printf

    xor rcx, rcx
print_byte:
    lea rbx, [rbp - 68]
    push rcx	                ; save rcx, printf may change it

    ; Print current byte.
    xor rax, rax               ; necessary before calling variadic functions (like printf)
    xor rsi, rsi               ; subsequent `printf` calls might change the value, we should make sure it's zero'd
    mov rdi, byte_format
    mov sil, byte[rbx + rcx]   ; sil is lowest byte of rsi
    call printf

    pop rcx	; restore rcx
    inc rcx

    ; TODO 1: Print the next 4 bytes
    ; TODO 2: After printing the local variable,
    ; print the next 8 bytes, then the next 8 bytes (What do these 16 bytes contain?)
    cmp rcx, 64
    jl print_byte

    ; Print new line. C equivalent instruction is puts("").
    mov rdi, null_string
    call puts

    ; Print local variable.
    xor rax, rax                    ; necessary before calling variadic functions (like printf)
    xor rsi, rsi
    mov rdi, var_message_and_format ;1st arg
    mov esi, [rbp - 4]              ;2nd arg
    call printf

    leave
    ret
