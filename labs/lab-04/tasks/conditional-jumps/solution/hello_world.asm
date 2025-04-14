; SPDX-License-Identifier: BSD-3-Clause

%include "printf64.asm"

section .data
    myString: db "Hello, World!", 0
    N: dq 6                         ; N = 6
    myGoodbyeString: db "Goodbye, World!", 0

section .text
    global main
    extern printf

main:
    push rbp
    mov rbp, rsp

    mov rcx, QWORD [N]              ; N = the value stored in rcx
    PRINTF64 `%d\n\x0`, rcx         ; DO NOT REMOVE/MODIFY THIS LINE

    mov rax, 2
    mov r8, 1
    cmp rax, r8
    jg print                        ; TODO1: rax > r8?
    xor rax, rax

    leave
    ret

print:
    PRINTF64 `%s\n\x0`, myString
                                    ; TODO2.2: print "Hello, World!" N times
    dec rcx
    cmp rcx, 0
    jg print
                                    ; TODO2.1: print "Goodbye, World!"
    PRINTF64 `%s\n\x0`, myGoodbyeString
    xor rax, rax

    leave
    ret
