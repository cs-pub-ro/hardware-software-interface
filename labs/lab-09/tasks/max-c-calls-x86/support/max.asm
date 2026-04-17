; SPDX-License-Identifier: BSD-3-Clause

section .text

global get_max


; EDI = array pointer
; ESI = array length
get_max:
    push ebp
    mov  ebp, esp

    ; save registers
    push edi
    push esi

    mov edi, [ebp + 8]
    mov esi, [ebp + 12]

    ; initialize EAX with the first value as currently known maximum
    mov eax, [edi]

    ; initialize ECX as loop counter for remaining elements
    mov ecx, esi
    dec ecx

compare:
    cmp eax, [edi + 4*ecx]
    jae check_end
    mov eax, [edi + 4*ecx]
check_end:
    loop compare

    ; restore registers
    pop esi
    pop edi

    leave
    ret
