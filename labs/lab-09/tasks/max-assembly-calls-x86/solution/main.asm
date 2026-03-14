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
    push ebp
    mov ebp, esp

    ; push 3rd argument on the stack
    mov eax, pos
    push eax

    ; push 2nd argument on the stack
    ; NOTE: len is the total array size; we want the number of elements
    mov eax, len
    shr eax, 2
    push eax

    ; push 1st argument on the stack
    mov eax, arr
    push arr

    call get_max

    ; print maximum value and its position
    ; NOTE: EAX holds the return value of get_max()
    ; NOTE: pos written by get_max() at given memory address
    mov ecx, dword [pos]
    push ecx

    push eax

    mov eax, fmt
    push fmt

    call printf

    ; set exit code 0 (in main)
    xor eax, eax

    leave
    ret
