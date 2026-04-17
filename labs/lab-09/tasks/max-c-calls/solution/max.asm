; SPDX-License-Identifier: BSD-3-Clause

section .text

global get_max


; EDI = array pointer
; ESI = array length
; EDX = pos pointer
get_max:
    push ebp
    mov  ebp, esp

    ; save registers
    push edi
    push esi

    mov edi, [ebp + 8]
    mov esi, [ebp + 12]
    mov edx, [ebp + 16]


    ; initialize EAX with the first value as currently known maximum
    mov eax, [edi]
    mov dword [edx], 0

    ; initialize ECX as loop counter for remaining elements
    mov ecx, esi
    dec ecx

    ; loop over remaining array elements
compare:
    cmp eax, [edi + 4*ecx]
    jae check_end

    ; update maximum and its position
    mov eax, [edi + 4*ecx]
    mov [edx], ecx
check_end:
    loop compare

    ; result stored in EAX

    ; restore registers
    pop esi
    pop edi

    leave
    ret

