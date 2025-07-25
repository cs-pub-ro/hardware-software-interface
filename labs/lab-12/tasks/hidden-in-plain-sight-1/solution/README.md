---
nav_order: 1
parent: 'Task: Hidden in Plain Sight'
---

# Solution

Looking at the disassembly of the `link` binary, it is noticeable that there is no `main()` function.
This is a clear indicator that we have to find a way to call it ourselves.

We define a `get_flag()` function prototype as void (you may be able to skip this step, but there will be an implicit declaration error during compilation) and we call it in our main function.
We then compile and assemble the file:
`gcc -g -m64 -fno-PIC -c main.c`

This command compiles `main.c` into an object file `main.o` without position-independent code (PIC): -fno-PIC.
The `-g` flag is used to include debugging information, and `-m64` specifies that we are compiling for a 64-bit architecture.
The `-c` flag tells the compiler to compile the source file into an object file without linking it.

We then link it to the `link` binary:
`gcc -no-pie -m64 link main.o -o a.out`

This command links the `link` binary with our object file `main.o` to create an executable named `a.out`.
The `-no-pie` flag is used to disable position-independent executables, and `-m64` specifies that we are linking for a 64-bit architecture.

Finally, we run the executable:
`./a.out`
