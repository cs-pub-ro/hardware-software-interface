; SPDX-License-Identifier: BSD-3-Clause

%include "printf64.asm"

section .data
    wrong: db 'Not today, son.',0
    right: db 'Well done!',0

section .text
    global main
    extern printf

main:
    push rbp
    mov rbp, rsp

    mov rax, 0x1                ; TODO3.1: modify rax register
    mov rbx, 0x4;               ; TODO3.1: modify rbx register
    mov rcx, 0x5                ; hardcoded; DO NOT change
    cmp rax, rbx
    jns bad
    cmp rcx, rbx
    jb bad
    add rax, rbx
    xor rax, rcx
    jnz bad

good:
    PRINTF64 `%s\n\x0`, right
    xor rax, rax

    leave
    ret

bad:
    PRINTF64 `%s\n\x0`, wrong
    xor rax, rax

    leave
    ret
