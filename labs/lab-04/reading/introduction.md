---
parent: Lab 4 - Introduction to Assembly Language
nav_order: 7
---

# Reading: Introduction

Before we actually start learning to read code written in assembly language, and then write our first programs, we need to answer a few questions.

## What is the Assembly Language?

As you probably know, the basic role of a computer - specifically, of the processor - is to read, interpret, and execute instructions.
These instructions are encoded in machine code.

An example would be:

```text
1011000000001100011001100011000111011111111111100100
```

This sequence of bits doesn't tell us much in particular.
We can convert it to hexadecimal to compress it and group it better.

```text
\xB0\x0C\x66\x31\xD2\xFF\xE4
```

Furthermore, for many of us, this sequence still doesn't mean anything.
Hence the need for a more understandable and usable language.

Assembly language allows us to write text programs which will then be translated, through an utility called an **assembler**, specific to each architecture, into machine code.
Most assembly languages provide a direct correspondence between instructions. For example:

```assembly
mov al, 12 <-> '\xB0\x0C'
xor dx, dx <-> '\x67\x31\xD2'
jmp esp    <-> '\xFF\xE4'
```

> **NOTE**: Because assembly language depends on architecture, it is generally not portable.
> Therefore, processor manufacturers have tried to keep the instructions unchanged from one generation to another, so that even when adding new processors to the line-up, they would maintain compatibility within the same processor family (for example, Intel processors 80286, 80386, 80486 etc. are all part of the generic Intel x86).

## Why Learn Assembly Language?

Besides the very high didactic value, in which you understand what "stack overflow" consists of, data representation, and what is specific to the processor you are working with, there are a few applications where knowledge of assembly language and, implicitly, architecture are necessary or even critical.

### Debugging

It's quite likely that at least one of the programs you've written in the past generated the following result:

```text
Segmentation fault
```

Sometimes, you will encounter a series of data similar to the following:

```text
Page Fault cr2=10000000 at eip e75; flags=6
eax=00000030 ebx=00000000 ecx=0000000c edx=00000000
esi=0001a44a edi=00000000 ebp=00000000 esp=00002672
cs=18 ds=38 es=af fs=0 gs=0 ss=20 error=0002
```

For someone who knows assembly language, it's relatively easy to begin troubleshooting using a debugger like [GDB](http://www.gnu.org/software/gdb/) or [OllyDbg](http://www.ollydbg.de/), because the message provides almost all the information they need.

### Code Optimization

Think about how you would write a C program to perform AES encryption and decryption.
Then, inform the compiler that you want to optimize your code.
Evaluate the performance of that code (size, execution time, number of jump instructions, etc.).
Although compilers are often labeled as "black magic", there are situations where you simply know [something](https://www.intel.com/content/dam/doc/white-paper/advanced-encryption-standard-new-instructions-set-paper.pdf) about the processor you're working with better than they do.

Furthermore, just understanding assembly code is enough to evaluate a code and optimize its critical sections.
Even if you don't write code in assembly language, you'll be aware of the code generated from the C instructions you use.

### Reverse Engineering

A large portion of common applications are closed-source.
All you have when it comes to these applications is a pre-compiled binary file.
Some of these may contain malicious code, in which case they need to be analyzed in a controlled environment (malware analysis/research).

### Embedded and Others

There are cases where constraints on code and/or data size are imposed, such as specialized devices for a single task, with little memory.
This category includes drivers for devices.

### Fun

For more details, discuss with your laboratory assistant to share his personal experience with assembly language and practical use cases.
