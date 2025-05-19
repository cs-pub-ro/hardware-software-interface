%include "printf32.asm"

%define ARRAY_SIZE 9
; loop = loope

section .data
    my_array   times ARRAY_SIZE dd 0

section .text

extern printf
global main
main:
    push ebp
    mov ebp, esp

    xor eax, eax

    ; for simplicity, we display the array as it's starting from 1
    ; the true index is `ecx - 1`, one less then the one displayed

    ; ecx                    - loop counter
    ; [my_array + ecx*4 - 4] - the `-4` is required for
    ;                          indexing in the bounds of the array

    ; print the array before incrementing
    mov ecx, ARRAY_SIZE
for_print_before:
    PRINTF32 `my_array[%d]: %d\n\x0`, ecx, [my_array + ecx*4 - 4]
    loop for_print_before

    ; increment all array elements except the first 3
    mov ecx, ARRAY_SIZE
for:
    cmp ecx, 3
    jle label1
    inc dword [my_array + ecx*4 - 4]
    loop for

    ; print the array after incrementing
label1:
    mov ecx, ARRAY_SIZE
for_print_after:
    PRINTF32 `my_array[%d]: %d\n\x0`, ecx, [my_array + ecx*4 - 4]
    loop for_print_after

    leave
    ret

