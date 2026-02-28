; SPDX-License-Identifier: BSD-3-Clause

%include "printf32.asm"

extern printf

section .bss:
	; the structure for a student
	struc student_t
		name:   resb	10	; char[10] - student name
		id_course:	resd	1	; integer - the id of the course where a student is assigned
		check:	resd	1	; "bool" - check if the student is assigned to the course
	endstruc

section .data
	v_students_count:    dd 5

    students:
		istruc student_t
			at name,	db "Vlad", 0
			at id_course,		dd 0
			at check,	dd 1
		iend

		istruc student_t
			at name,	db "Andrew", 0
			at id_course,		dd 1
			at check,	dd 1
		iend

		istruc student_t
			at name,	db "Kim", 0
			at id_course,		dd 1
			at check,	dd 1
		iend

		istruc student_t
			at name,	db "George", 0
			at id_course,		dd 2
			at check,	dd 1
		iend

		istruc student_t
			at name,	db "Kate", 0
			at id_course,		dd 0
			at check,	dd 0
		iend

section .text
global main

main:
	push ebp
	mov ebp, esp
	PRINTF32 `The students list is:\n\x0`
	xor ecx, ecx
	afisare:
		mov ebx, students ; save the starting address of the vector in ebx
		mov edx, ecx ; save the index in edx
		imul edx, student_t_size ; multiply the index by the size of the student_t structure
		add ebx, edx ; save the starting address of the structure with the index ecx from the list of structures in ebx
		add ebx, name ; extract the field where the student's name is stored in each structure
		PRINTF32 `%s\n\x0`, ebx
		inc ecx
		cmp ecx, [v_students_count]
		jl afisare
    leave
    ret
