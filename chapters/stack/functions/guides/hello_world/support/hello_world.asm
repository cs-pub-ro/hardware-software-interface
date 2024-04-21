%include "../utils/printf32.asm"

section .data
    msg db 'Hello, world!', 0

section .text

extern puts
global main
main:
    push ebp		;  since main is a function, it has to adhere to the same
    mov ebp, esp	;  convention

    push msg
    call puts
    add esp, 4

    leave
    ret
