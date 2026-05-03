---
nav_order: 9
parent: Lab 12 - CTF
---

# Reading: CTF

In this laboratory, you will have to apply most of the concepts presented throughout this course under the format of `Capture-The-Flag` tasks.
These tasks will test your understanding and mastery of specific static and dynamic analysis methods and tools, the compilation process, assembly language - syntax, registers, memory handling, functions, - as well as your ability to identify and exploit simple buffer overflow vulnerabilities.

## Return Oriented Programming

For the bonus exercise, you will have to use Return Oriented Programming (ROP).
This is a technique in which, if we have the ability to overwrite the return address, we execute `gadgets`.
These `gadgets` are simply portions of the existing code that end with a `ret` instruction.

Examples of gadgets include:

```asm
pop rdi ; mov rdx, rax ; mov r12, rax ; jmp 0xd178
pop rdi ; pop rbp ; ret
pop rdi ; ret
pop rsi ; pop rdi ; jmp 0xbd5f
```

Notice that each gadget must end in a control-flow instruction, such as a `ret` or a `jmp`.
The reason is so that they can be chained together.
We usually write payloads that contain the addresses of these snippets.
Then we trigger the ROP attack by placing this payload to overwrite a code pointer with the first address in the payload (such as overwriting the return address with this address).

Follow the example below to get a better picture:

![ROP Anatomy](../media/rop-anatomy.svg)

The image above aims to execute `pop rdx; pop rbx; ret`.
Let's assume a function's return address is overwritten with that of the gadget, `gadget_addr`.
The following things are going to happen:

1. The function's `ret` is executed: `rip` jumps to the first instruction of the gadget (`pop rdx`), and `rsp` now points to the number 3 on the stack.

1. `pop rdx` pops 3 into `rdx`;
`rsp` advances and now points to 4.

1. `pop rbx` pops 4 into `rbx`;
`rsp` advances and now points to the new return address.

1. The gadget's `ret` transfers control to that address, allowing us to execute new code:
either a separate function, or another gadget.

To determine the address of a gadget in a binary, there is the tool [ROPgadget](https://github.com/JonathanSalwan/ROPgadget).
Alternatively, in `pwndbg`, you can use a command like `rop --grep "pop rsi"`.
