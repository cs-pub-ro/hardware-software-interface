; SPDX-License-Identifier: BSD-3-Clause

extern __libc_start_main
extern main

section .text

global _start
global _dl_relocate_static_pie

; Adapted from GNU Libc x86_64 start.S
;   https://github.com/lattera/glibc/blob/master/sysdeps/x86_64/start.S
_start:
    ; Align stack.
    xor rbp, rbp
    pop rsi
    mov rdx, rsp
    and rsp, 0xfffffffffffffff0

    push rax
    push rsp

    mov rdi, main
    call __libc_start_main

    hlt

_dl_relocate_static_pie:
    repz ret
