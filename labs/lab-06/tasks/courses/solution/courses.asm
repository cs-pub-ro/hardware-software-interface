; SPDX-License-Identifier: BSD-3-Clause

%include "printf64.asm"

extern printf

section .bss
    ; the structure for a student
    struc student_t
        name:       resb    10      ; char[10] - student name
        id_course:  resq    1       ; integer - the id of the course where a student is assigned
        check:      resd    1       ; "bool" - check if the student is assigned to any course
    endstruc

    ; the structure for a course
    struc course_t
        id:             resq    1       ; id = index in courses (the list of courses)
        name_course:    resb    15      ; char[10] - the name of the course
    endstruc

section .data
    unassigned:         db "Student unassigned :(", 0
    v_students_count:   dq 5
    v_courses_count:    dq 3

    students:
        istruc student_t
            at name,        db "Vlad", 0
            at id_course,   dq 0
            at check,       dd 1
        iend

        istruc student_t
            at name,        db "Andrew", 0
            at id_course,   dq 1
            at check,       dd 1
        iend

        istruc student_t
            at name,        db "Kim", 0
            at id_course,   dq 1
            at check,       dd 1
        iend

        istruc student_t
            at name,        db "George", 0
            at id_course,   dq 2
            at check,       dd 1
        iend

        istruc student_t
            at name,        db "Kate", 0
            at id_course,   dq 0
            at check,       dd 0
        iend

    courses:
        istruc course_t
            at id,          dq 0
            at name_course, db "Assembly", 0
        iend

        istruc course_t
            at id,          dq 1
            at name_course, db "Linear Algebra", 0
        iend

        istruc course_t
            at id,          dq 2
            at name_course, db "Physics", 0
        iend

section .text
global main

main:
    push rbp
    mov rbp, rsp
    PRINTF64 `The students list is:\n\x0`

    xor rcx, rcx
final_print:
    mov rbx, students ; put the address of students array into rbx
    mov rdx, rcx ; save the index value in rdx
    imul rdx, student_t_size ; multiply the index with the size of the student_t structure
    add rbx, rdx ; this addition save into rbx the address of the structure from an index in the students array
    mov rax, rbx ; move this address into rbx to use rbx for something else and to have the address saved in rax
    add rbx, name ; add to rbx `name` so that to get the name of the student
    ; it is possible to add name because in rbx is saved the address of start of an element from students array
    ; and student_t structure contains name field
    PRINTF64 `%s ----\x0`, rbx

    mov r8, rax
    add r8, check
    xor rbx, rbx
    mov ebx, dword [r8] ; extract the value from check field (it's by default a dword)
    cmp rbx, 0
    jne step
    PRINTF64 ` %s\n\x0`, unassigned
    jmp finish

step:
    mov rbx, rax
    add rbx, id_course
    mov rbx, [rbx] ; extract the index of the course in the courses array
    mov rsi, courses
    imul rbx, course_t_size
    add rsi, rbx
    add rsi, name_course ; get the name of the student
    PRINTF64 ` %s\n\x0`, rsi

finish:
    inc rcx
    cmp rcx, [v_students_count] ; it's converted by default to dword
    jl final_print

    leave
    ret
