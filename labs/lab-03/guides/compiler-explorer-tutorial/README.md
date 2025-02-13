---
parent: Lab 3 - Toolchain. GOTO
nav_order: 6
---

# Guide: Online C Compiling

An interesting tool to observe how C code translates into assembly language is Compiler Explorer.

1. Go to [Compiler Explorer](https://gcc.godbolt.org/).
1. Load the "sum over array" program from the examples (accessible using the load button, shaped like a floppy disk).
1. Make sure `x86-64 gcc 4.8.2` is selected under `Compiler:`.
1. Use the option `-m32` (in `Compiler options`) to display code in 32-bit assembly language (as opposed to 64-bit by default).
1. If you see the message `<Compilation failed>`, add the option `-std=c99`.
1. Initially, the code might be quite cumbersome.
To make it more human-readable, add the option `-O2` to the compilation options (`Compiler options`).
1. You may notice the presence of symbols like `.L3:` and `.L4:`.
These represent fixed points in the program, labels, quite similar to what is found in C.
1. Go through the compilers corresponding to the following architectures one by one: ARM, ARM64, AVR, PowerPC.
`Note`: for ARM, ARM64, and AVR, you will need to remove the previously set -m32 flag.
You can observe how the generated code differs from one architecture to another.
1. Also, try the following compilers: `clang` and `icc`.
As you can see, even though it's the same C code and the same architecture, the generated code differs.
This happens because each compiler can have a different optimization and code generation strategy.

>**NOTE**:
>[clang](https://clang.llvm.org/) is an open-source C/C++ compiler.
>It is often used in IDEs due to its very suggestive compilation error messages.
>
>**NOTE**: `icc` is the C/C++ compiler from Intel.

Write the following code sequence in the Code editor area:

```C
int simple_fn(void)
{
    int a = 1;
    a++;
    return a;
}
```

Observe the assembly code when the compilation options (`Compiler options`) are `-m32`, and when the compilation options are `-m32 -O2`.
Notice the effect of optimization options on the generated assembly code.
