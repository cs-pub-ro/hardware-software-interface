---
nav_order: 8
parent: Lab 8 - Functions
---

# Guide: Disassembling a C program

Navigate to `guides/disassembling-c/support/`.

As mentioned, ultimately everything ends up in assembly language (to be 100% accurate, everything ends up as machine code, which has a fairly good correspondence with assembly code).
Often, we find ourselves with access only to the object code of some programs and we want to inspect how it looks.

To observe this, let's compile a C program to its object code and then disassemble it.
We'll use the `test.c` program from the lab archive.

> **NOTE:** To compile a C/C++ source file in the command-line, follow these steps:

1. Open a terminal.
(shortcut `Ctrl+Alt+T`)

1. Navigate to the directory containing your source code.

1. Use the command:

```Bash
gcc -fno-PIC -o <exec> <sourcefile>
```

where `<sourcefile>` is the name of the source file (`test.c`) and `<exec>` is the name of the result executable.

If you **only** want to compile (**without** linking it), use:

```Bash
gcc -fno-PIC -c -o <objfile> <sourcefile>
```

where `<sourcefile>` is the name of the source file and `<objfile>` is the name of the desired output object file.

Since we want to transform `test.c` into an object file, we'll run:

```Bash
gcc -fno-PIC -c -o test.o test.c
```

After running the above command, we should see a file named `test.o`.

Furthermore, we can use `gcc` to transform the `C` code in `Assembly` code:

```Bash
gcc -fno-PIC -masm=intel -S -o test.asm test.c
```

After running the above command we'll have a file called `test.asm`, which we can inspect using any text editor/reader, such as cat:

```Bash
cat test.asm
```

In order to disassembly the code of an object file we'll use `objdump` as follows:

```Bash
objdump -M intel -d <path-to-obj-file>
```

where `<path-to-obj-file>` is the path to the object file `test.o`.

Afterwards, you'll see an output similar to the following:

```console
$ objdump -M intel -d test.o

test.o:     file format elf64-x86-64


Disassembly of section .text:

0000000000000000 <second_func>:
   0:   f3 0f 1e fa             endbr64
   4:   55                      push   rbp
   5:   48 89 e5                mov    rbp,rsp
   8:   48 89 7d f8             mov    QWORD PTR [rbp-0x8],rdi
   c:   89 75 f4                mov    DWORD PTR [rbp-0xc],esi
   f:   48 8b 45 f8             mov    rax,QWORD PTR [rbp-0x8]
  13:   8b 10                   mov    edx,DWORD PTR [rax]
  15:   8b 45 f4                mov    eax,DWORD PTR [rbp-0xc]
  18:   01 c2                   add    edx,eax
  1a:   48 8b 45 f8             mov    rax,QWORD PTR [rbp-0x8]
  1e:   89 10                   mov    DWORD PTR [rax],edx
  20:   90                      nop
  21:   5d                      pop    rbp
  22:   c3                      ret

0000000000000023 <first_func>:
  23:   f3 0f 1e fa             endbr64
  27:   55                      push   rbp
  28:   48 89 e5                mov    rbp,rsp
  2b:   48 83 ec 20             sub    rsp,0x20
  2f:   89 7d ec                mov    DWORD PTR [rbp-0x14],edi
  32:   c7 45 fc 03 00 00 00    mov    DWORD PTR [rbp-0x4],0x3
  39:   bf 00 00 00 00          mov    edi,0x0
  3e:   e8 00 00 00 00          call   43 <first_func+0x20>
  43:   8b 55 fc                mov    edx,DWORD PTR [rbp-0x4]
  46:   48 8d 45 ec             lea    rax,[rbp-0x14]
  4a:   89 d6                   mov    esi,edx
  4c:   48 89 c7                mov    rdi,rax
  4f:   e8 ac ff ff ff          call   0 <second_func>
  54:   8b 45 ec                mov    eax,DWORD PTR [rbp-0x14]
  57:   c9                      leave
  58:   c3                      ret

0000000000000059 <main>:
  59:   f3 0f 1e fa             endbr64
  5d:   55                      push   rbp
  5e:   48 89 e5                mov    rbp,rsp
  61:   bf 0f 00 00 00          mov    edi,0xf
  66:   e8 b8 ff ff ff          call   23 <first_func>
  6b:   89 c6                   mov    esi,eax
  6d:   bf 00 00 00 00          mov    edi,0x0
  72:   b8 00 00 00 00          mov    eax,0x0
  77:   e8 00 00 00 00          call   7c <main+0x23>
  7c:   b8 00 00 00 00          mov    eax,0x0
  81:   5d                      pop    rbp
  82:   c3                      ret
```

You may notice the repeated occurrences of the `endbr64` instruction.
It is part of `Intel's Control-Flow Enforcement Technology(CET)` and its purpose is to prevent malicious function executions (such as corrupting buffers and trying to alter the normal execution flow of the program).
Detailed explanations about this instruction can be found in the [Buffer Management](https://cs-pub-ro.github.io/hardware-software-interface/labs/lab-10/README.html) lab.

There are many other utilities that allow disassembly of object modules, most of them with a graphical interface and offering debugging support.
`objdump` is a simple utility that can be quickly used from the command-line.

It's interesting to observe, both in the `test.asm` file and in its disassembly, the way a function call is made, which we'll discuss further.
