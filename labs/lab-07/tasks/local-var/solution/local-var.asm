%include "../utils/printf64.asm"

section .data

%define ARRAY_1_LEN 5
%define ARRAY_2_LEN 7
%define ARRAY_OUTPUT_LEN 12

section .data
array_1 dd 27, 46, 55, 83, 84
array_2 dd 1, 4, 21, 26, 59, 92, 105

section .text

extern printf
global main

main:
    push rbp
    mov rbp, rsp

    sub rsp, 4 * ARRAY_1_LEN
    and rsp, -16  ;; Align the stack to 16 bytes

    ; Copy array_1 to stack
    mov rdi, 0
copy_array_1_to_stack:
    mov ecx, [array_1 + 4 * rdi]
    mov [rsp + 4 * rdi], ecx
    inc rdi
    cmp rdi, ARRAY_1_LEN
    jl copy_array_1_to_stack

    mov r8, rsp  ; r8 = start of array_1 on stack

    sub rsp, 4 * ARRAY_2_LEN
    and rsp, -16  ;; Align the stack to 16 bytes

    ; Copy array_2 to stack
    mov rdi, 0
copy_array_2_to_stack:
    mov ecx, [array_2 + 4 * rdi]
    mov [rsp + 4 * rdi], ecx
    inc rdi
    cmp rdi, ARRAY_2_LEN
    jl copy_array_2_to_stack

    mov r9, rsp  ; r9 = start of array_2 on stack

    sub rsp, 4 * ARRAY_OUTPUT_LEN
    and rsp, -16  ;; Align the stack to 16 bytes
    mov r10, rsp ; r10 = start of output array on stack

    ; Initialize indices
    mov rax, 0 ; index for array_1
    mov rbx, 0 ; index for array_2
    mov rcx, 0 ; index for output array

merge_arrays:
    cmp rax, ARRAY_1_LEN
    jge copy_array_2
    cmp rbx, ARRAY_2_LEN
    jge copy_array_1

    mov edx, [r8 + 4 * rax]  ; element from array_1
    mov edi, [r9 + 4 * rbx]  ; element from array_2
    cmp edx, edi
    jg array_2_lower
array_1_lower:
    mov [r10 + 4 * rcx], edx  ; The element from array_1 is lower
    inc rax
    inc rcx
    jmp merge_arrays
array_2_lower:
    mov [r10 + 4 * rcx], edi  ; The elements of the array_2 is lower
    inc rbx
    inc rcx
    jmp merge_arrays

copy_array_1:
    cmp rax, ARRAY_1_LEN
    jge print_array
    mov edx, [r8 + 4 * rax]
    mov [r10 + 4 * rcx], edx
    inc rax
    inc rcx
    jmp copy_array_1

copy_array_2:
    cmp rbx, ARRAY_2_LEN
    jge print_array
    mov edx, [r9 + 4 * rbx]
    mov [r10 + 4 * rcx], edx
    inc rbx
    inc rcx
    jmp copy_array_2

print_array:
    PRINTF64 `Array merged:\n\x0`
    xor rcx, rcx

print:
    mov edx, [r10 + 4 * rcx]
    PRINTF64 `%d \x0`, rdx
    inc rcx
    cmp rcx, ARRAY_OUTPUT_LEN
    jb print

    PRINTF64 `\n\x0`
    xor rax, rax
    mov rsp, rbp

    leave
    ret
