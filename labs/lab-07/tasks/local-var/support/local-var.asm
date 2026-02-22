%include "printf64.asm"

%define ARRAY_1_LEN 5
%define ARRAY_2_LEN 7
%define ARRAY_OUTPUT_LEN 12

section .data

array_1 dd 27, 46, 55, 83, 84
array_2 dd 1, 4, 21, 26, 59, 92, 105
array_output times 12 dd 0


section .text

extern printf
global main
main:
    push rbp
    mov rbp, rsp

    mov rax, 0 ; counter used for array_1
    mov rbx, 0 ; counter used for array_2
    mov rcx, 0 ; counter used for the output array

merge_arrays:
    mov edx, [array_1 + 4 * rax]
    cmp edx, [array_2 + 4 * rbx]
    jg array_2_lower
array_1_lower:
    mov [array_output + 4 * rcx], edx
    inc rax
    inc rcx
    jmp verify_array_end
array_2_lower:
    mov edx, [array_2 + 4 * rbx]
    mov [array_output + 4 * rcx], edx
    inc rcx
    inc rbx

verify_array_end:
    cmp rax, ARRAY_1_LEN
    jge copy_array_2
    cmp rbx, ARRAY_2_LEN
    jge copy_array_1
    jmp merge_arrays

copy_array_1:
    mov edx, [array_1 + 4 * rax]
    mov [array_output + 4 * rcx], edx
    inc rcx
    inc rax
    cmp rax, ARRAY_1_LEN
    jb copy_array_1
    jmp print_array
copy_array_2:
    mov edx, [array_2 + 4 * rbx]
    mov [array_output + 4 * rcx], edx
    inc rcx
    inc rbx
    cmp rbx, ARRAY_2_LEN
    jb copy_array_2

print_array:
    PRINTF64 `Array merged:\n\x0`
    mov rcx, 0
print:
    mov eax, [array_output + 4 * rcx]
    PRINTF64 `%d \x0`, rax
    inc rcx
    cmp rcx, ARRAY_OUTPUT_LEN
    jb print

    PRINTF64 `\n\x0`
    xor rax, rax

    mov rsp, rbp
    pop rbp
    ret
