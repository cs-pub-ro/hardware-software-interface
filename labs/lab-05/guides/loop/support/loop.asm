%include "printf64.asm"

%define ARRAY_SIZE 9
; loop = loope

section .data
    my_array   times ARRAY_SIZE dd 0

section .text

extern printf
global main
main:
    push rbp
    mov rbp, rsp

    xor rax, rax

    ; for simplicity, we display the array as it's starting from 1
    ; the true index is `rcx - 1`, one less then the one displayed

    ; rcx                    - loop counter
    ; [my_array + rcx*4 - 4] - the `-4` is required for
    ;                          indexing in the bounds of the array

    ; print the array before incrementing
    mov rcx, ARRAY_SIZE
for_print_before:
    mov rdx, rcx                       ; Move loop counter to rdx for printing
    mov rsi, [my_array + rcx*4 - 4]    ; Move array value to rsi for printing
    PRINTF64 `my_array[%d]: %d\n\x0`, rdx, rsi
    loop for_print_before

    ; increment all array elements except the first 3
    mov rcx, ARRAY_SIZE
for:
    cmp rcx, 3
    jle label1
    inc dword [my_array + rcx*4 - 4]
    loop for

    ; print the array after incrementing
label1:
    mov rcx, ARRAY_SIZE
for_print_after:
    PRINTF64 `my_array[%d]: %d\n\x0`, rcx, qword [my_array + rcx*4 - 4]
    loop for_print_after

    leave
    ret
