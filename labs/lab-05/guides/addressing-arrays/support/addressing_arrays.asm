; SPDX-License-Identifier: BSD-3-Clause

%include "printf32.asm"

%define ARRAY_SIZE 10

section .data
    my_array  times ARRAY_SIZE dd 0

section .text

extern printf
global main
main:
    push ebp
    mov ebp, esp

    xor eax, eax

    ; ecx                 - loop counter/array index, starting from 0
    ; [my_array + ecx*4]  - since our array stores double-words (4 bytes)
    ;                       we multiply `ecx` by 4 to index the `ecx`-th element
    ; cmp ecx, ARRAY_SIZE - compare `ecx` with ARRAY_SIZE, sets EFLAGS accordingly
    ; jl for_print_before - `jl` instruction checks if `ecx` < ARRAY_SIZE (based on EFLAGS)
    ;                       and it jumps to the `for_print_before` label, otherwise it
    ;                       continues to the next instruction

    ; print out the array before incrementing its elements
    xor ecx, ecx
for_print_before:
    PRINTF32 `my_array[%d]: %d\n\x0`, ecx, [my_array + ecx*4]
    inc ecx
    cmp ecx, ARRAY_SIZE
    jl for_print_before

	PRINTF32 `\n\x0`

    ; increment each element of the array
    xor ecx, ecx
for:
    inc dword [my_array + ecx*4]
    inc ecx
    cmp ecx, ARRAY_SIZE
    jl for

    ; print out the array after incrementing its elements
    xor ecx, ecx
for_print_after:
    PRINTF32 `my_array[%d]: %d\n\x0`, ecx, [my_array + ecx*4]
    inc ecx
    cmp ecx, ARRAY_SIZE
    jl for_print_after

    leave
    ret

