; SPDX-License-Identifier: BSD-3-Clause

%include "printf64.asm"

extern printf

section .bss:
	; the structure for a student
	struc student_t
		name:   resb	10		; char[10] - student name
		id_course:	resq	1	; integer - the id of the course where a student is assigned
		check:	resd	1		; "bool" - check if the student is assigned to the course
	endstruc

section .data
	v_students_count:    dq 5

    students:
		istruc student_t
			at name,	db "Vlad", 0
			at id_course,		dq 0
			at check,	dd 1
		iend

		istruc student_t
			at name,	db "Andrew", 0
			at id_course,		dq 1
			at check,	dd 1
		iend

		istruc student_t
			at name,	db "Kim", 0
			at id_course,		dq 1
			at check,	dd 1
		iend

		istruc student_t
			at name,	db "George", 0
			at id_course,		dq 2
			at check,	dd 1
		iend

		istruc student_t
			at name,	db "Kate", 0
			at id_course,		dq 0
			at check,	dd 0
		iend

section .text
global main

main:
	push rbp
	mov rbp, rsp
	PRINTF64 `The students list is:\n\x0`
	xor rcx, rcx
	print:
		mov rbx, students ; save the starting address of the vector in rbx

		mov rdx, rcx ; save the index in rdx

		imul rdx, student_t_size ; multiply the index by the size of the student_t structure

		add rbx, rdx ; save the starting address of the structure with the index rcx from the list of structures in rbx

		add rbx, name ; extract the field where the student's name is stored in each structure

		PRINTF64 `%s\n\x0`, rbx
		inc rcx
		cmp rcx, [v_students_count]
		jl afisare
    leave
    ret
