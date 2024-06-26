# Stack Operations

The `stack_operations.asm` file demonstrates various stack operations.
The main focus is to show how to manipulate the stack by pushing and popping values, and how to "allocate" and "deallocate" memory on the stack.

> **Note:** Notice how `push` and `pop` are just syntactic sugar for the simpler `sub`, `add`, and `mov` instructions.

For convenience, here's the contents of the file.
To play around with it, download the lab locally.

```assembly
%include "printf32.asm"

section .data
    var: dd ?

section .text

; esp -> stack pointer
; ebp -> base pointer

extern printf
global main
main:
    push ebp
    mov ebp, esp

    push dword 10 ; sub esp, 4;  mov [esp], 10;
    push dword 11 ; sub esp, 4;  mov [esp], 11;
    push dword 12 ; sub esp, 4;  mov [esp], 12;
    push dword 13 ; sub esp, 4;  mov [esp], 13;
    push dword 14 ; sub esp, 4;  mov [esp], 13;


    pusha  ; push all registers on the stack
    popa  ; pop all registers from the stack

    ; Version 1
    pop eax; ; mov eax, [esp]; add esp, 4
    pop eax; ; mov eax, [esp]; add esp, 4
    pop eax; ; mov eax, [esp]; add esp, 4
    pop eax; ; mov eax, [esp]; add esp, 4
    pop eax; ; mov eax, [esp]; add esp, 4

    ; Version 2
    ; add esp, 20 ; 4 * number_of_push

    ; Version 3
    ; mov esp, ebp

    ; sub esp <-> add esp -> use to allocate/deallocate memory

    ; Aloc 8 bytes <-> 2 int
    ; sub esp, 8
    ; mov [esp], 10
    ; mov [esp + 4], 12

    ; Push/Pop from global variable

    mov dword [var], 1337

    push dword [var]
    pop dword [var]

    mov eax, [var]
    PRINTF32 `VAR: %d\n\x0`, eax


    leave
    ret
```
