# C - Assembly Interaction: Memory Perspective

Considering that assembly language poses challenges both in reading and in developing code, the general trend is to migrate towards high-level languages (which are much easier to read and provide a more user-friendly API).
However, there are still situations where, for optimization reasons, small assembly routines are used and integrated into the high-level language module.

In this laboratory, we will explore how assembly modules can be integrated into C programs and vice versa.

## Using Assembly Procedures in C Functions

Using assembly procedures in C functions for a C program to be executed, it must be translated into the machine code of the processor;
this is the task of a compiler.
Since this compiled code is not always optimal, in some cases it is preferable to replace portions of code written in C with portions of assembly code that do the same thing, but with better performance.

### Declaration of the Procedure

In order to ensure that the assembly procedure and Module C are properly combined and compatible, the following steps must be followed:

- declare the procedure label as global, using the GLOBAL directive.
In addition to this, any data that will be used by the procedure must be declared as global.

- using the `extern` directive to declare procedures and global data as external.

## Calling C Functions from Assembly Procedures

In most cases, calling routines or functions from the standard C library in an assembly language program is a much more complex operation than vice versa.
Take the example of calling the `printf()` function from an assembly language program:

```Assembly
global main

external printf

section .data

text db "291 is the best!", 10, 0
strformat db "%s", 0

section .code

main:
        push dword text
        push dword strformat
        call printf
        add esp, 8
        ret
```

Note that the procedure is declared as global and is called `main` - the starting point of any C program.
Since in C the parameters are stacked in reverse order, the string offset is set first, followed by the format string offset.
The C function can be called afterwards, but the stack must be restored when the function exits.

When linking assembly code the standard C library (or the library containing the functions you use) must be included.
