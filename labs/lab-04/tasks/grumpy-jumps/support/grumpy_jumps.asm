; SPDX-License-Identifier: BSD-3-Clause

%include "printf32.asm"

section .data
    wrong: db 'Not today, son.',0
    right: db 'Well done!',0

section .text
    global main
    extern printf

main:
    mov eax, 0x2         ; TODO3.1: modify eax register
    mov ebx, 0x3         ; TODO3.1: modify ebx register
    mov ecx, 0x5                ; hardcoded; DO NOT change
    cmp eax, ebx         ; eax treb sa fie mai mic ca ebx (eax - ebx < 0)
    jns bad
    cmp ecx, ebx         ; ebx treb sa fie mai mic ca ecx
    jb bad
    add eax, ebx
    xor eax, ecx         ; eax + ebx treb sa fie egal cu ecx
    jnz bad

good:
    PRINTF32 `%s\n\x0`, right
    ret

bad:
    PRINTF32 `%s\n\x0`, wrong
    ret
