---
parent: Lab 3 - Toolchain. GOTO
nav_order: 5
---

# Reading: Reverse Engineering

**Ghidra** is a useful tool for investigating binaries and `reverse engineering`.

## Disassembly

The disassembly process is used to obtain a file containing assembly code from a binary file.
This process is always possible because the machine code specific to the processor has a direct correspondence with the assembly code.
For example, the operation `add eax, 0x14`, which adds 20 to the value in the eax register, is always represented using the binary code `83 c0 14`.

## Decompiling

The Ghidra program can be used even for decompiling code.
A decompiler can be used to obtain the source code in a (relatively) high-level language, which when compiled will produce an executable whose behavior will be the same as the original executable.
In comparison, a disassembler performs an exact translation of an executable program into assembly language because there is a 1:1 relationship between machine code and assembly language.
