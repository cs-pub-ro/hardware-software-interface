---
nav_order: 6
parent: Lab 5 - Registers and Memory Addressing
---

# Reading: Registers

Registers are the primary "tools" used to write programs in assembly language.
They are like variables built into the processor.
Using registers instead of direct memory addressing makes developing and reading assembly-written programs faster and easier.
The only disadvantage of programming in x86 assembly language is that there are few registers.

Modern x86 processors have 8 general-purpose registers whose size is 32 bits.
The names of the registers are of historical nature (for example: `eax` was called the accumulator register because it is used by a series of arithmetic instructions, such as [idiv](https://www.felixcloutier.com/x86/idiv)).
While most registers have lost their special purpose, becoming "general purpose" in the modern ISA (`eax`, `ebx`, `ecx`, `edx`, `esi`, `edi`), by convention, 2 have retained their initial purpose: `esp` (stack pointer) and `ebp` (base pointer).

## Register Subsections

In certain cases, we want to manipulate values that are represented in less than 4 bytes (for example, working with character strings).
For these situations, x86 processors offer us the possibility to work with subsections of 1 and 2 bytes of the `eax`, `ebx`, `ecx`, `edx` registers.

The image below represents the registers, their subsections, and their sizes.

![x86_32 Registers](media/registers.svg)

>**WARNING**: Subsections are part of registers, which means that if we modify a register, we implicitly modify the value of the subsection.
>
>**NOTE**: Subsections are used in the same way as registers, only the size of the retained value is different.
>
>**NOTE**: Besides the basic registers, there are also six segment registers corresponding to certain areas as seen in the image:
>
>![Segment Registers](media/segments.svg)

## Static Memory Region Declarations

Static memory declarations (analogous to declaring global variables) in the x86 world are made through special assembly directives.
These declarations are made in the data section (the `.data` region).
Names can be attached to the declared memory portions through a label to easily reference them later in the program. Follow the example below:

```Assembly
.DATA
    var        `db` 64    ; Declares a byte containing the value 64. Labels
                        ; the memory location as "var".
    var2       `db` ?     ; Declares an uninitialized byte labeled "var2".
               `db` 10    ; Declares an unlabeled byte, initialized with 10. This
                        ; byte will be placed at the address (var2 + 1).
    X          `dw` ?     ; Declares an uninitialized word (2 bytes), labeled "X".
    Y          `dd` 3000  ; Declares a double word (4 bytes) labeled "Y",
                        ; initialized with the value 3000.
    Z          `dd` 1,2,3 ; Declares 3 double words (each 4 bytes)
                        ; starting from address "Z" and initialized with 1, 2, and 3, respectively.
                        ; For example, 3 will be placed at the address (Z + 8).
```

> **NOTE**: DB, DW, DD are directives used to specify the size of the portion:
>
> Directive   | Role               | Size
> ----------- | ------------------ | ----
> `db`        | Define Byte        | 1 bytes (8 bits)
> `dw`        | Define Word        | 2 bytes (16 bits)
> `dd`        | Define Double Word | 4 bytes (32 bits)
>
> **NOTE**: There are multiple types of memory regions as can be seen in the image below:
>
> ![Memory Sections](media/sections.jpg)

The last declaration in the above example represents the declaration of an array.
Unlike higher-level languages, where arrays can have multiple dimensions and their elements are accessed by indices, in assembly language, arrays are represented as a number of cells located in a contiguous area of memory.
