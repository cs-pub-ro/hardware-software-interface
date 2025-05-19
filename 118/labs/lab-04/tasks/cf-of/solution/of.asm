; SPDX-License-Identifier: BSD-3-Clause

%include "printf32.asm"

section .text
    global main
    extern printf

main:

    mov al, 0x7F
    PRINTF32 `the Overflow Flag is not active\n\x0`
    test al, al
    add al, 1
    jo overflow_flag
    jmp end

overflow_flag:
    PRINTF32 `the Overflow Flag is active\n\x0`

end:
    ret
