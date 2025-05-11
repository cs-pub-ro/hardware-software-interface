---
nav_order: 9
parent: Lab 5 - Registers and Memory Addressing
---

# Reading: Memory Addressing

Modern x86_64 processors can address up to 2^64 bytes of memory, which means memory addresses are represented on 64 bits.
To address memory, the processor uses addresses (implicitly, each label is translated into a corresponding memory address).
Besides labels, there are other forms of addressing memory:

```Assembly
mov rax, [0xcafebabe12345678]    ; direct (displacement)
mov rax, [rsi]                   ; indirect (base)
mov rax, [rbp-8]                 ; based (base + displacement)
mov rax, [rbx*4 + 0xdeadbeef]    ; indexed (index * scale + displacement)
mov rax, [rdx + rbx + 12]        ; based and indexed without scale (base + index + displacement)
mov rax, [rdx + r8*4 + 42]       ; based and indexed with scale (base + index * scale + displacement)
```

> **WARNING**: The following addressing modes are invalid:
>
> ```Assembly
>mov rax, [rbx-rcx]     ; Registers can only be added
>mov [rax+rsi+rdi], rbx ; The address calculation can involve at most 2 registers
> ```

## Size Directives

Generally, the size of a value brought from memory can be inferred from the instruction code used.
For example, in the above addressing modes, the size of the values could be inferred from the size of the destination register, but in some cases, this is not so obvious.
Let's consider the following instruction:

```Assembly
mov [rbx], 2
```

As seen, it intends to store the value 2 at the address contained in the `rbx` register.
The size of the register is 8 bytes.
The value 2 can be represented on 1, 2, 4, or 8 bytes.
In this case, since multiple interpretations are valid, the processor needs additional information on how to treat this value.
This can be done through size directives:

```Assembly
mov byte [rbx], 2    ; Move the value 2 into the byte at the address contained in rbx.
mov word [rbx], 2    ; Move the entire 2 represented in 16 bits into the 2 bytes
                     ; starting from the address contained in rbx.
mov dword [rbx], 2   ; Move the entire 2 represented in 32 bits into the 4 bytes
                     ; starting from the address contained in rbx.
mov qword [rbx], 2   ; Move the entire 2 represented in 64 bits into the 8 bytes
                     ; starting from the address contained in rbx.
```

## Loop Instruction

The loop instruction is used for loops with a predetermined number of iterations, loaded into the `rcx` register.
Its syntax is as follows:

```Assembly
mov rcx, 10 ; Initialize rcx with the number of iterations
label:
; loop content
loop label
```

At each iteration, the `rcx` register is decremented, and if it's not equal to 0, the execution jumps to the specified label.
There are other forms of the instruction that additionally check the `ZF` flag:

Mnemonic              | Description
--------------------- | -----------
`loope/loopz label`   | Decrement `rcx`, jump to label if `rcx != 0` and `ZF == 1`
`loopne/loopnz label` | Decrement `rcx`, jump to label if `rcx != 0` and `ZF != 1`

> **NOTE**: When using jumps in an assembly language program, it's important to consider the difference between a `short jump` (near jump) and a `long jump` (far jump).
>
> Type and example  | Size and significance                                     | Description
> ----------------- | --------------------------------------------------------- | -----------
> Short Jump (loop) | 2 bytes (one byte for the opcode and one for the address) | The relative address of the instruction to which the jump is intended must not be more than 128 bytes away from the current instruction address.
> Long Jump (jmp)   | 3 bytes (one byte for the opcode and two for the address) | The relative address of the instruction to which the jump is intended must not be more than 32768 bytes away from the current instruction address.
