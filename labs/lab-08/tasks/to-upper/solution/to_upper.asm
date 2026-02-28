section .text

global to_upper

to_upper:
    push rbp
    mov rbp, rsp

    sub rsp, 8              ; leave room in order to align the stack
    push rbx                ; preserve rbx as required by the System V AMD64 ABI

    mov rax, rdi
check_one_byte:
    mov bl, [rax]
    test bl, bl
    je out
    sub bl, 0x20
    mov [rax], bl
    inc rax
    jmp check_one_byte

out:
    pop rbx                ; restore rbx
    add rsp, 8

    leave
    ret
