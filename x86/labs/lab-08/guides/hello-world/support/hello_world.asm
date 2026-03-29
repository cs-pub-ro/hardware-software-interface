%include "../utils/printf32.asm"

section .data
    msg db 'Hello, world!', 0

section .text

; We need to mark "puts()" as an external function. This means it is not implemented in this file.
; The linker will resolve this symbol by looking for it in other object files.
extern puts

global main

main:
    push ebp		;  Since main is a function, it has to adhere to the same convention
    mov ebp, esp

    push msg
    call puts
    add esp, 4      ; The pushed msg argument takes up 4 bytes on the stack

    leave
    ret
