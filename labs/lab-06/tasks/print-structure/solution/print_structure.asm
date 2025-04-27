; SPDX-License-Identifier: BSD-3-Clause

%include "printf64.asm"

struc stud_struct
    name: resb 32
    surname: resb 32
    age: resb 1
    group: resb 8
    gender: resb 1
    birth_year: resw 1
endstruc

section .data
sample_student:
    istruc stud_struct
        at name, db 'Andrei', 0
        at surname, db 'Voinea', 0
        at age, db 21
        at group, db '321CA', 0
        at gender, db 1
        at birth_year, dw 1994
    iend

format_name db "Name: %s", 10, 0
format_surname db "Surname: %s", 10, 0
format_age db "Age: %d", 10, 0
format_group db "Group: %s", 10, 0
format_gender db "Gender: %d", 10, 0
format_year db "Birth year: %d", 10, 0

section .text
extern printf
global main
main:
    push rbp
    mov rbp, rsp

    mov word [sample_student + birth_year], 1993
    mov byte [sample_student + age], 22
    mov byte [sample_student + group + 2], '3'

    lea rsi, [sample_student + name]
    mov rdi, format_name
    call printf

    lea rsi, [sample_student + surname]
    mov rdi, format_surname
    call printf

    movzx rsi, byte [sample_student + age]
    mov rdi, format_age
    call printf

    lea rsi, [sample_student + group]
    mov rdi, format_group
    call printf

    movzx rsi, byte [sample_student + gender]
    mov rdi, format_gender
    call printf

    movzx rsi, word [sample_student + birth_year]
    mov rdi, format_year
    call printf

    leave
    ret
