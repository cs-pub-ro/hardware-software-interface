; SPDX-License-Identifier: BSD-3-Clause

%include "printf64.asm"

section .data
    N dq 9 ; compute the sum of the first N fibonacci numbers
    sum_print_format db "Sum first %ld fibonacci numbers is %ld", 10, 0

section .text
extern printf
global main
main:
    push rbp
    mov rbp, rsp

    ; The calling convention requires saving and restoring `rbx` if modified
    push rbx

    xor rax, rax     ;store the sum in rax
    mov rcx, [N]
    mov rbx, 0
    mov rdx, 1

calc_fibo:
    add rax, rbx
    add rbx, rdx
    xchg rbx, rdx
    ; The `xhcg` above is equivalent to the following:
    ; push rax
    ; mov rax, rbx
    ; mov rbx, rdx
    ; mov rdx, rax
    ; pop rax
    loop calc_fibo

    PRINTF64 `Sum first %d fibonacci numbers is %d\n\x0`, qword [N], rax

    ; Restore the `rbx` that was previously saved
    pop rbx

    xor rax, rax
    leave
    ret
