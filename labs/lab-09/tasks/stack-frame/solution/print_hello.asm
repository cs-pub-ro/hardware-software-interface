; SPDX-License-Identifier: BSD-3-Clause

global print_hello
extern printf

section .data
    message db "Hello", 0

section .text

;   TODO: Add the missing instruction
print_hello:
    push rbp

    ; leave is equivalent to the instruction set:
    ;   mov rsp, rbp
    ;   pop rbp
    ;
    ; In the absence of this instruction (saving the current pointer frame),
    ; leave would restore the stack tip (RSP) to the beginning of the previous frame,
    ; above which, on the stack, is a RBP, followed by the return address
    ; of the function from which print_hello() was called; thus, when executing
    ; the ret statement at the end of print_hello(), it will jump immediately after
    ; call of the asm_call_wrapper() function;
    mov rbp, rsp

    xor rax, rax
    mov rdi, message
    call printf

    leave
    ret
