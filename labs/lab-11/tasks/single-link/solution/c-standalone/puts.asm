; SPDX-License-Identifier: BSD-3-Clause

section .text

global puts

; /usr/include/x86_64-linux-gnu/asm/unistd_64.h
__NR_write equ 1

; Argument is message to be printed to standard output.
puts:
    push rbp
    mov rbp, rsp

    ; Call __NR_write(1, message, message_len) (system call).
    ;
    ; Use x86_64 Linux system call convention.
    ; https://stackoverflow.com/questions/2535989/what-are-the-calling-conventions-for-unix-linux-system-calls-and-user-space-f
    ;
    ; rax stores the system call id.
    ; rdi stores the first system call argument: 1 (standard output).
    ; rsi stores the second system call argument: message.
    ; rdx stores the third system call argument: message length.

    ; Store the write system call id in rax.
    mov rax, __NR_write


    ; Store function argument (message) in rsi.
    mov rsi, rdi

    ; Store standard output file descriptor (1) in rdi.
    mov rdi, 1

    ; Compute message length in rdx.
    ; Find NUL byte address of message using rcx. Start from message address rsi.
    ; Then rdx <- rcx - rsi.
    mov rcx, rsi
    dec rcx
again:
    inc rcx
    cmp byte [rcx], 0
    jne again

    mov rdx, rcx
    sub rdx, rsi

    ; Do system call.
    syscall

    leave
    ret
