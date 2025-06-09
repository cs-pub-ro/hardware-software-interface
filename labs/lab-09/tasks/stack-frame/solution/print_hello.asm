; SPDX-License-Identifier: BSD-3-Clause

extern printf

section .data
	message db "Hello", 0

section .text

global print_hello

print_hello:
	push ebp

	; leave is equivalent to the instruction set:
	; mov esp, ebp
	; pop ebp
	;
	; In the absence of this instruction (saving the current pointer frame),
	; leave would restore the stack tip (esp) to the beginning of the previous frame,
	; above which, on the stack, is an ebp, followed by the return address
	; of the function from which print_hello() was called; thus, when executing
	; the ret statement at the end of print_hello(), it will jump immediately after
	; call of the asm_call_wrapper() function;

	mov ebp, esp

	push message
	call printf
	add esp, 4

	leave
	ret
