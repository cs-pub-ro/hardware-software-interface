; SPDX-License-Identifier: BSD-3-Clause

extern main

section .text

; /usr/include/x86_64-linux-gnu/asm/unistd_64.h
__NR_exit equ 60

global _start

_start:
    call main

    ; Call __NR_exit(main_return_value) (system call).
    ;
    ; Use x86_64 Linux system call convention.
    ; https://stackoverflow.com/questions/2535989/what-are-the-calling-conventions-for-unix-linux-system-calls-and-user-space-f
    ;
    ; rdi stores the first system call argument.
    ; rax stores the system call id.

    ; eax is main return value. Store it in rdi.
    mov rdi, rax

    ; Store the exit system call id in rax.
    mov rax, __NR_exit

    ; Do system call.
    syscall
