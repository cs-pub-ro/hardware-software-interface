%include "printf64.asm"

section .data
    var: dq ?

section .text

; rsp -> stack pointer
; rbp -> base pointer

extern printf
global main
main:
    push rbp
    mov rbp, rsp

    push qword 10  ;  same as:  sub rsp, 8   followed by:  mov [rsp], 10
    push qword 11  ;  same as:  sub rsp, 8   followed by:  mov [rsp], 11
    push qword 12  ;  same as:  sub rsp, 8   followed by:  mov [rsp], 12
    push qword 13  ;  same as:  sub rsp, 8   followed by:  mov [rsp], 13
    push qword 14  ;  same as:  sub rsp, 8   followed by:  mov [rsp], 13

    ; Version 1
    pop rax        ;  same as:  mov rax, [rsp]   followed by:  add rsp, 8
    pop rax        ;  same as:  mov rax, [rsp]   followed by:  add rsp, 8
    pop rax        ;  same as:  mov rax, [rsp]   followed by:  add rsp, 8
    pop rax        ;  same as:  mov rax, [rsp]   followed by:  add rsp, 8
    pop rax        ;  same as:  mov rax, [rsp]   followed by:  add rsp, 8

    ; Version 2
    ; add rsp, 40  ;  8 * number_of_push

    ; Version 3
    ; mov rsp, rbp

    ; sub rsp <-> add rsp -> use to allocate/deallocate memory

    ; Aloc 16 bytes <-> 2 long
    ; sub rsp, 16
    ; mov [rsp], 10
    ; mov [rsp + 8], 12

    ; Push/Pop from global variable

    mov qword [var], 1337

    push qword [var]
    pop qword [var]

    mov rax, [var]
    PRINTF64 `VAR: %ld\n\x0`, rax


    leave
    ret
