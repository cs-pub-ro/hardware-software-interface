%include "../utils/printf64.asm"

section .data
    msg db 'Hello, world!', 0

section .text

; We need to mark "puts()" as an external function. This means it is not implemented in this file.
; The linker will resolve this symbol by looking for it in other object files.
extern puts

global main

main:
    push rbp		;  Since main is a function, it has to adhere to the same convention
    mov rbp, rsp

    mov rdi, msg    ; store the address of the string in rdi
    call puts

    leave
    ret
