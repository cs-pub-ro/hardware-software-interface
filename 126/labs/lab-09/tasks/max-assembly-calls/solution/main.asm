; SPDX-License-Identifier: BSD-3-Clause

extern printf
extern get_max

section .data
    arr: dd 19, 7, 129, 87, 54, 218, 67, 12, 19, 99
    len: equ $-arr

    fmt: db "max: %u on position: %u", 10, 0

section .bss
    ; we are _reserving_ space for a double word (4 bytes)
    ; but we are not initializing it; so it can't reside in .data
    pos: resd 1

section .text

global main

main:
    push rbp
    mov rbp, rsp

    ; compute the array length in RSI
    ; NOTE: len is the total array size; we want the number of elements
    mov rsi, len
    shr rsi, 2

    mov rdi, arr
    mov rdx, pos
    call get_max

    ; print maximum value and its position
    ; NOTE: RAX holds the return value of get_max()
    ; NOTE: pos written by get_max() at given memory address
    mov rdi, fmt
    mov rsi, rax
    mov edx, dword [pos]
    call printf

    ; set exit code 0 (in main)
    xor rax, rax

    leave
    ret

