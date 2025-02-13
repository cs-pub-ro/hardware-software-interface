---
nav_order: 8
parent: Lab 10 - Buffer Management. Buffer Overflow
---

# Reading: Introduction to Buffers

This laboratory aims to present the concept of buffers in C and assembly language along with their specific operations, as well as the vulnerabilities they pose and how they can be exploited by a potential attacker using a program to attack a system or obtain information to which they would not normally have access.

## Objectives

- Introducing the concepts of buffers and buffer overflow
- Examples of buffer overflow attacks
- Presentation of ways to secure programs to prevent buffer overflow attacks

## Buffer. Buffer Overflow

### What is a Buffer?

A buffer is a memory area defined by a start address and a size.
Let N be the size of the buffer, for example, the number of elements.
The total size of the buffer is N times the size of one element.
A string is a specific case of a buffer.

### What is a Buffer Overflow?

A buffer overflow occurs when the upper limit of a buffer is exceeded during traversal, for example, the position of the last element (v[N - 1]).
A buffer overflow is a specific case of an *index out of bounds*, where the vector can be accessed using negative indices.
Many functions in C do not check the size of the buffers they work with, leading to buffer overflow errors when called.
Some examples of such functions are:

- [memcpy](http://www.cplusplus.com/reference/cstring/memcpy/)
- [strcpy](https://www.cplusplus.com/reference/cstring/strcpy/)
- [fgets](http://www.cplusplus.com/reference/cstdio/fgets/)

A classic example of a buffer overflow is shown in the following code:

```C
char buffer[32];
fgets(buffer, 64, stdin);
```

Executing this code will result in a buffer overflow, potentially leading to a *Segmentation Fault* error, although this is not guaranteed.
Everything depends on the buffer's position in the stack and what will be overwritten by the 32 bytes that exceed the buffer's size.
More details on what will be overwritten and how this will be done will be discovered when solving the proposed exercises.

### How to make a Buffer Overflow?

In the previous example we see that we can use a buffer to write more than "we should".
But what exactly can we do with this?
In the following example we can use *fgets()* to overwrite *very_important_var* and enter *jackpot()* function.
All we have to do is change the value of *very_important_var* to *0xDEADCODE*, when reading the buffer.

```C
int very_important_var = 0xDEADBEEF;
char buffer[32];
fgets(buffer, 64, stdin);
if (very_important_var == 0xDEADC0DE) {
    jackpot();
}
```

### Infrastructure Preparation

Throughout the laboratory, in the command-line, we will use:

- `nasm` assembler
- `gcc` command as a linker
- `objdump` and `ghidra` for disassembling object and executable files
- `gdb` for dynamic analysis, investigation, and debugging

This setup will allow us to perform assembly programming, linking, disassembly, and dynamic analysis using the specified tools in the command-line environment.
