; SPDX-License-Identifier: BSD-3-Clause

section .text

global get_max


; RDI = array pointer
; RSI = array lengthget_max
get_max:
    push rbp
    mov  rbp, rsp

    ; initialize EAX with the first value as currently known maximum
    mov eax, [rdi]

    ; initialize RCX as loop counter for remaining elements
    mov rcx, rsi
    dec rcx

compare:
    cmp eax, [rdi + 4*rcx]
    jae check_end              ; <-- Keep the unsigned fix here!
    mov eax, [rdi + 4*rcx]
check_end:
    loop compare

    leave
    ret