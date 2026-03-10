; SPDX-License-Identifier: BSD-3-Clause

%include "printf32.asm"

section .text
    global main
    extern printf

main:
    mov al, 0xFF
    PRINTF32 `the Carry Flag is not active\n\x0`
    test al, al
    ;TODO: activate the Carry Flag

    jc carry_flag
    jmp end

carry_flag:
    PRINTF32 `the Carry Flag is active\n\x0`

end:
    ret
