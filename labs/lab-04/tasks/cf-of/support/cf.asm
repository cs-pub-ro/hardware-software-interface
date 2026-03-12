; SPDX-License-Identifier: BSD-3-Clause

%include "printf64.asm"

section .text
    global main
    extern printf

main:
    push rbp
    mov rbp, rsp

    mov al, 0xFF
    PRINTF64 `the Carry Flag is not active\n\x0`
    test al, al
    ;TODO: activate the Carry Flag

    jc carry_flag
    jmp end

carry_flag:
    PRINTF64 `the Carry Flag is active\n\x0`

end:
    xor rax, rax

    leave
    ret
