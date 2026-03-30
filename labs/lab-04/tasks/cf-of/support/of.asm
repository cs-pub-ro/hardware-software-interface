; SPDX-License-Identifier: BSD-3-Clause

%include "printf64.asm"

section .text
    global main
    extern printf

main:
    push rbp
    mov rbp, rsp

    mov al, 0x7F
    PRINTF64 `the Overflow Flag is not active\n\x0`
    test al, al
    ;TODO: activate the Overflow Flag

    jo overflow_flag
    jmp end

overflow_flag:
    PRINTF64 `the Overflow Flag is active\n\x0`

end:
    xor rax, rax

    leave
    ret
