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
gcc -m32 -o <exec> <sourcefile>
```

where `<sourcefile>` is the name of the source file (`test.c`) and `<exec>` is the name of the result executable.

If you **only** want to compile (**without** linking it), use:

```Bash
gcc -m32 -c -o <objfile> <sourcefile>
```

where `<sourcefile>` is the name of the source file and `<objfile>` is the name of the desired output object file.

Since we want to transform `test.c` into an object file, we'll run:

```Bash
gcc -m32 -c -o test.o test.c
```

After running the above command, we should see a file named `test.o`.

Furthermore, we can use `gcc` to transform the `C` code in `Assembly` code:

```Bash
gcc -m32 -masm=intel -S -o test.asm test.c
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

test.o:     file format elf32-i386


Disassembly of section .text:

00000000 <second_func>:
   0:	55                   	push   ebp
   1:	89 e5                	mov    ebp,esp
   3:	e8 fc ff ff ff       	call   4 <second_func+0x4>
   8:	05 01 00 00 00       	add    eax,0x1
   d:	8b 45 08             	mov    eax,DWORD PTR [ebp+0x8]
  10:	8b 10                	mov    edx,DWORD PTR [eax]
  12:	8b 45 0c             	mov    eax,DWORD PTR [ebp+0xc]
  15:	01 c2                	add    edx,eax
  17:	8b 45 08             	mov    eax,DWORD PTR [ebp+0x8]
  1a:	89 10                	mov    DWORD PTR [eax],edx
  1c:	90                   	nop
  1d:	5d                   	pop    ebp
  1e:	c3                   	ret

0000001f <first_func>:
  1f:	55                   	push   ebp
  20:	89 e5                	mov    ebp,esp
  22:	53                   	push   ebx
  23:	83 ec 14             	sub    esp,0x14
  26:	e8 fc ff ff ff       	call   27 <first_func+0x8>
  2b:	05 01 00 00 00       	add    eax,0x1
  30:	c7 45 f4 03 00 00 00 	mov    DWORD PTR [ebp-0xc],0x3
  37:	83 ec 0c             	sub    esp,0xc
  3a:	8d 90 00 00 00 00    	lea    edx,[eax+0x0]
  40:	52                   	push   edx
  41:	89 c3                	mov    ebx,eax
  43:	e8 fc ff ff ff       	call   44 <first_func+0x25>
  48:	83 c4 10             	add    esp,0x10
  4b:	83 ec 08             	sub    esp,0x8
  4e:	ff 75 f4             	push   DWORD PTR [ebp-0xc]
  51:	8d 45 08             	lea    eax,[ebp+0x8]
  54:	50                   	push   eax
  55:	e8 a6 ff ff ff       	call   0 <second_func>
  5a:	83 c4 10             	add    esp,0x10
  5d:	8b 45 08             	mov    eax,DWORD PTR [ebp+0x8]
  60:	8b 5d fc             	mov    ebx,DWORD PTR [ebp-0x4]
  63:	c9                   	leave
  64:	c3                   	ret

00000065 <main>:
  65:	8d 4c 24 04          	lea    ecx,[esp+0x4]
  69:	83 e4 f0             	and    esp,0xfffffff0
  6c:	ff 71 fc             	push   DWORD PTR [ecx-0x4]
  6f:	55                   	push   ebp
  70:	89 e5                	mov    ebp,esp
  72:	53                   	push   ebx
  73:	51                   	push   ecx
  74:	e8 fc ff ff ff       	call   75 <main+0x10>
  79:	81 c3 02 00 00 00    	add    ebx,0x2
  7f:	83 ec 0c             	sub    esp,0xc
  82:	6a 0f                	push   0xf
  84:	e8 96 ff ff ff       	call   1f <first_func>
  89:	83 c4 10             	add    esp,0x10
  8c:	83 ec 08             	sub    esp,0x8
  8f:	50                   	push   eax
  90:	8d 83 0e 00 00 00    	lea    eax,[ebx+0xe]
  96:	50                   	push   eax
  97:	e8 fc ff ff ff       	call   98 <main+0x33>
  9c:	83 c4 10             	add    esp,0x10
  9f:	b8 00 00 00 00       	mov    eax,0x0
  a4:	8d 65 f8             	lea    esp,[ebp-0x8]
  a7:	59                   	pop    ecx
  a8:	5b                   	pop    ebx
  a9:	5d                   	pop    ebp
  aa:	8d 61 fc             	lea    esp,[ecx-0x4]
  ad:	c3                   	ret
```

There are many other utilities that allow disassembly of object modules, most of them with a graphical interface and offering debugging support.
`objdump` is a simple utility that can be quickly used from the command-line.

It's interesting to observe, both in the `test.asm` file and in its disassembly, the way a function call is made, which we'll discuss further.
