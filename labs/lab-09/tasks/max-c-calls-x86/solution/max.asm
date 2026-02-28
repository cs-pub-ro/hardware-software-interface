; SPDX-License-Identifier: BSD-3-Clause

section .text

global get_max


; RDI = array pointer
; RSI = array length
; RDX = pos pointer
get_max:
    push rbp
    mov  rbp, rsp

    ; initialize EAX with the first value as currently known maximum
    mov eax, [rdi]
    mov [rdx], eax

    ; initialize RCX as loop counter for remaining elements
    mov rcx, rsi
    dec rcx

    ; loop over remaining array elements
compare:
    cmp eax, [rdi + 4*rcx]
    jge check_end

    ; update maximum and its position
    mov eax, [rdi + 4*rcx]
    mov [rdx], ecx
check_end:
    loop compare

    ; result stored in RAX

    leave
    ret

