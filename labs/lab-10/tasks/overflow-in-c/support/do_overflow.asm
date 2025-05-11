; SPDX-License-Identifier: BSD-3-Clause


	.file   "do_overflow.c"
	.intel_syntax noprefix
	.text
	.section        .rodata
.LC0:
	.string "insert buffer string: "
.LC1:
	.string "buffer is: "
.LC2:
	.string " %02X(%c)"
.LC3:
	.string ""
.LC4:
	.string "Full of win!"
.LC5:
	.string "Not quite there. Try again!"
	.text
	.globl  main
	.type   main, @function
main:
.LFB0:
	.cfi_startproc
	push    rbp
	.cfi_def_cfa_offset 16
	.cfi_offset 6, -16
	mov     rbp, rsp
	.cfi_def_cfa_register 6
	sub     rsp, 96
	; HINT: Look under
	mov     DWORD PTR -12[rbp], -17958194
	lea     rax, .LC0[rip]
	mov     rdi, rax
	mov     eax, 0
	call    printf@PLT
	mov     rdx, QWORD PTR stdin[rip]
	; HINT: Look under
	lea     rax, -96[rbp]
	mov     esi, 128
	mov     rdi, rax
	call    fgets@PLT
	lea     rax, .LC1[rip]
	mov     rdi, rax
	mov     eax, 0
	call    printf@PLT
	lea     rax, -96[rbp]
	mov     rdi, rax
	call    strlen@PLT
	mov     QWORD PTR -24[rbp], rax
	mov     QWORD PTR -8[rbp], 0
	jmp     .L2
.L3:
	lea     rdx, -96[rbp]
	mov     rax, QWORD PTR -8[rbp]
	add     rax, rdx
	movzx   eax, BYTE PTR [rax]
	movsx   edx, al
	lea     rcx, -96[rbp]
	mov     rax, QWORD PTR -8[rbp]
	add     rax, rcx
	movzx   eax, BYTE PTR [rax]
	movsx   eax, al
	mov     esi, eax
	lea     rax, .LC2[rip]
	mov     rdi, rax
	mov     eax, 0
	call    printf@PLT
	add     QWORD PTR -8[rbp], 1
.L2:
	mov     rax, QWORD PTR -8[rbp]
	cmp     rax, QWORD PTR -24[rbp]
	jb      .L3
	lea     rax, .LC3[rip]
	mov     rdi, rax
	call    puts@PLT
	movzx   eax, BYTE PTR -91[rbp]
	mov     BYTE PTR -26[rbp], al
	cmp     DWORD PTR -12[rbp], 1430341965
	jne     .L4
	lea     rax, .LC4[rip]
	mov     rdi, rax
	call    puts@PLT
	jmp     .L5
.L4:
	lea     rax, .LC5[rip]
	mov     rdi, rax
	call    puts@PLT
.L5:
	mov     eax, 0
	leave
	.cfi_def_cfa 7, 8
	ret
	.cfi_endproc
.LFE0:
	.size   main, .-main
	.ident  "GCC: (Debian 12.2.0-14) 12.2.0"
	.section        .note.GNU-stack,"",@progbits