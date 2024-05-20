# C - Assembly Interaction

Considering that assembly language poses challenges both in reading and in developing code, the general trend is to migrate towards high-level languages (which are much easier to read and provide a more user-friendly API).
However, there are still situations where, for optimization reasons, small assembly routines are used and integrated into the high-level language module.

In this laboratory, we will explore how assembly modules can be integrated into C programs and vice versa.

## Using assembly procedures in C functions

Using assembly procedures in C functions for a C program to be executed, it must be translated into the machine code of the processor; this is the task of a compiler.
Since this compiled code is not always optimal, in some cases it is preferable to replace portions of code written in C with portions of assembly code that do the same thing, but with better performance.

### Declaration of the procedure

In order to ensure that the assembly procedure and Module C are properly combined and compatible, the following steps must be followed:
    -declare the procedure label as global, using the GLOBAL directive. In addition to this, any data that will be used by the procedure must be declared as global.
    -using the EXTERN directive to declare procedures and global data as external.

### Setting the stack

When entering a procedure, it is necessary to set a stack frame to which to send parameters.
Of course, if the procedure does not receive parameters, this step is not necessary. So to set the stack, the following code must be included:

```Assembly
push ebp
mov ebp, esp
```

The EBP gives us the ability to use it as an index within the stack and should not be altered during the procedure.

### Passing parameters from C to the assembly procedure

C programs send parameters to assembly procedures using the stack.
Consider the following C program sequence:

```C
#include <stdio.h>

extern int sum(int a, int b);  // declare the assembly procedure as external

int main() {
    int a = 5, b = 7;
    int res = sum(a, b);  // call the assembly procedure

    return 0;
}
```

When C executes the call to `sum`, it first pushes arguments on the stack in reverse order, then actually calls the procedure.
Thus, upon entering the procedure body, the stack will be intact.

Since the variables `a` and `b` are declared as `int` values, they will each use one word on the stack. This method of passing parameters is called value passing.
The code of the Sum procedure might look like this:

```Assembly
section .text
    global sum   ; declare the procedure label as global

sum:
    push ebp
    mov ebp, esp

    mov eax, [ebp+8]     ; retrieve the first argument
    mov ecx, [ebp+12]    ; retrieve the second argument
    add eax, ecx         ; calculate the sum

    pop ebp
    ret
```

It is interesting to note a number of things. First, the assembly code defaults the return value of the procedure to the `eax` register.
Second, the `ret` command is sufficient to exit the procedure, due to the fact that the C compiler takes care of the rest of the stuff, such as removing parameters from the stack.

## Calling C functions from assembly procedures

In most cases, calling routines or functions from the standard C library in an assembly language program is a much more complex operation than vice versa.
Take the example of calling the `printf` function from an assembly language program:

```Assembly
global main

external printf

section .data

text db "291 is the best!", 10, 0
strformat db "%s", 0

section .code

main
        push dword text
        push dword strformat
        call printf
        add esp, 8
        ret
```

Note that the procedure is declared as global and is called `main` - the starting point of any C program. Since in C the parameters are stacked in reverse order, the string offset is set first, followed by the format string offset. The C function can be called afterwards, but the stack must be restored when the function exits.

When linking assembly code the standard C library (or the library containing the functions you use) must be included.
