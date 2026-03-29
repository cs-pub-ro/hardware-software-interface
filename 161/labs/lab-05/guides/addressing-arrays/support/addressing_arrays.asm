; SPDX-License-Identifier: BSD-3-Clause

%include "printf64.asm"

%define ARRAY_SIZE 10

section .data
    my_array  times ARRAY_SIZE dd 0

section .text

extern printf
global main
main:
    push rbp
    mov rbp, rsp

    xor rax, rax

    ; rcx                 - loop counter/array index, starting from 0
    ; [my_array + rcx*4]  - since our array stores double-words (4 bytes)
    ;                       we multiply `rcx` by 4 to index the `rcx`-th element
    ; cmp rcx, ARRAY_SIZE - compare `rcx` with ARRAY_SIZE, sets RFLAGS accordingly
    ; jl for_print_before - `jl` instruction checks if `rcx` < ARRAY_SIZE (based on RFLAGS)
    ;                       and it jumps to the `for_print_before` label, otherwise it
    ;                       continues to the next instruction

    ; print out the array before incrementing its elements
    xor rcx, rcx
for_print_before:
    mov rdx, [my_array + rcx*4]    ; Load value into rdx for printing
    PRINTF64 `my_array[%d]: %d\n\x0`, rcx, rdx
    inc rcx
    cmp rcx, ARRAY_SIZE
    jl for_print_before

    PRINTF64 `\n\x0`

    ; increment each element of the array
    xor rcx, rcx
for:
    inc dword [my_array + rcx*4]
    inc rcx
    cmp rcx, ARRAY_SIZE
    jl for

    ; print out the array after incrementing its elements
    xor rcx, rcx
for_print_after:
    mov rdx, [my_array + rcx*4]    ; Load value into rdx for printing
    PRINTF64 `my_array[%d]: %d\n\x0`, rcx, rdx
    inc rcx
    cmp rcx, ARRAY_SIZE
    jl for_print_after

    leave
    ret
