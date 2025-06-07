---
nav_order: 8
parent: Lab 9 - The C - Assembly Interaction
---

# Reading: C - Assembly Interaction

The assembly language poses challenges both in terms of readability and development.
Developers that are required to work on an existing codebase written entirely in assembly will most likely have trouble understanding it.
Meanwhile, requesting new features that were not specified during the initial design of the project may necessitate a full rewrite of the existing implementation.
If you want an example for why this is always a bad idea, look no further than [The Story of Mel](https://www.catb.org/jargon/html/story-of-mel.html).

For these reasons, the general trend for the past few dozen years has been to adopt higher-level languages such as C/C++, Java, etc.
These are more human-readable, easier to manage, but unfortunately depend on compilers for generating machine code.
Although compilers can perform some ingenious optimizations, they also utilize only a small fraction of the total number of instructions available in the target ISA.
This leaves room for developers to manually optimize critical sections (i.e., areas that are executed often, mostly in tight loops).

In this laboratory, we will explore how assembly modules can be integrated into C programs and vice versa.

## Using Assembly Procedures in C Functions

### Declaration of the Procedure

In order to ensure the compatibility of the assembly procedure with the compiled C code, the following requirements must be met:

- Declare the procedure label as global, using the `global` directive.
  In addition to this, any data that will be used by the procedure must be declared as global.

- Use the `extern` directive to declare procedures and global data as external.

## Calling C Functions from Assembly Procedures

In most cases, calling routines or functions from the standard C library in an assembly language program is a much more complex operation than vice versa.
Take the example of calling the `printf()` function from an assembly language program:

```asm
global main
extern printf

section .data

    text db "291 is the best!", 0
    fmt  db "%s", 10, 0

section .text

main:
    push rbp

    mov rdi, fmt
    mov rsi, text
    call printf

    pop rbp
    xor rax, rax
    ret
```

To compile and run the program (stored in `main.asm`):

```bash
nasm -f elf64 main.asm
gcc -no-pie main.o
$ ./a.out
```

If on 32-bit x86 systems all parameters are pushed onto the stack, on x86-64 we use up to six registers to pass the first arguments (left to right).
If we have more than six arguments, these will follow the 32-bit method and will be pushed to stack from right to left.
Also, if one of the first six arguments is larger than the size of a 64-bit register (e.g., passing a `struct` by value), on the stack it goes!
