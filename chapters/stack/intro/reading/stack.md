# Introduction to the Stack

In this lab, we will learn about how the stack is represented in assembly language, its utility, and how to it could be useful to us.

## Reminder: Stack Data Structure

> **NOTE:** This is a quick reminder on how the abstract data structure works.
> If you feel like you already understand this, you can skip this part.

In the world of algorithms and data structure, a "stack" is a data structure used to hold data, mirroring a real-life stack of objects (for example, a stack of books, or a stack of boxes).
This data structure's usefulness comes from optimizing the ease and speed at which elements can be added or removed from the top of the stack.
It forces us to think about how our data is organized relative to the stack's base and top.
The usual operations with the stack are:

- `push` - add an element to the top of the stack
- `pop` - get the element from the top of the stack **and remove it**
- `peek` or `top` - get the element from the top of the stack **without removing it**

![An image showing a stack data structure at different stages. The empty stack gains the element labeled "1" after the instruction "push 1" is applied to it. After the instruction "push 2", the stack has two items, element 1 being below element 2. Finally, the "pop" instruction makes the stack lose element 2](../media/the-stack.svg)

As the above image suggests, the order in which items are inserted and removed from a stack is represented by the phrase "first in, last out".

## So, Why is it Useful?

In the previous chapters we learned how to work with the basics of assembly.
A pretty big limitation we have imposed on ourselves by using such a low-level language is the small number of values we can work with at a time.
For anything but small programs, having just the 6 registers (`eax`, `ebx`, `ecx`, `edx`, `esi`, `edi`) is usually not enough, and creating global variables for temporary values is not memory efficient and, at some point, we'll struggle to even name them something reasonable!

You might have also felt the absence of functions. The stack will help us out as it provides a nice place to store:

- the arguments,
- the values of registers before entering a function so they can be restored on exit,
- and some metadata useful for when we want to exit out of a function.

More on this in the next lab.

As you might have guessed, the solution to this is to use a stack on which we can put arbitrary values onto.
We don't need implement it ourselves - it comes built-in 😄!
Whenever a program stars, the kernel makes sure a zone of memory is allocated for the sole purpose of writing arbitrary data onto.
Moreover, CPUs also have some specialized instructions that work directly with this memory in a way similar to how a normal stack works.

> **Note**: The size of the stack memory area is often [set at compile-time](https://stackoverflow.com/questions/54821412/how-to-increase-stack-size-when-compiling-a-c-program-using-mingw-compiler).
> When going over the maximum allocated space, you can receive a Segmentation Fault, and the phenomenon is called a `Stack Overflow`.
> You will have probably received this error when you declare a local array with a very high capacity, or when calling a recursive function which never returns.

## Stack Operations

The stack can be modified in two ways:

1. By using special instructions designed for stack operations, the most common of which are `push` and `pop`:

```assembly
%include "io.asm"

section .text
global CMAIN
CMAIN:

    mov eax, 7
    mov ebx, 8
    add eax, ebx
    push eax                 ; push the value of the eax register onto the stack
    mov eax, 10              ; we can now use the eax register, as its value is saved on the stack
    PRINTF32 `%d \n\x0`, eax  ; 10

    pop eax                  ; retrieve the value of the eax register from the stack
    PRINTF32 `%d \n\x0`, eax  ; 15
```

1. By directly accessing the memory with the help of a special register in which the top of the stack is held - `esp` also known as the "stack pointer register".

```assembly
%include "io.asm"

section .text
global CMAIN
CMAIN:
    mov eax, 7
    mov ebx, 8
    add eax, ebx
    sub esp, 4           ; reserve 4 bytes on the stack
    mov [esp], eax       ; move the contents of the eax register to the new address pointed to by esp
    mov eax, 10
    PRINTF32 `%d \n\x0`, eax

    mov eax, [esp]       ; retrieve the value from the stack
    add esp, 4           ; restore the value of the esp register
    PRINTF32 `%d \n\x0`, eax
```

> **IMPORTANT:** Comment out the instructions `sub esp, 4` and `add esp, 4`.
> What happens?
> Why?
>
> **NOTE:** The stack is used to remember the return address when a function is called.
> **Note that the stack grows from higher addresses to lower addresses.**
> This is why memory allocation on the stack is done using the `sub` instruction, and deallocation is done using the `add` instruction.

![stack_image](../media/the-stack-growth.svg)

Some processors do not have support for stack operations: for example, MIPS processors do not have `push` and `pop` instructions and do not have a special register for the stack pointer.
Thus, if we want to implement stack operations on a MIPS processor, we would do it exactly as in the example above, but we can choose any register to keep track of the stack pointer.

Therefore, the `push eax` instruction on an x86 processor is equivalent to:

```assembly
sub esp, 4
mov [esp], eax
```

And the `pop eax` is equivalent to:

```assembly
mov eax, [esp]
add esp, 4
```

> **IMPORTANT:** We need to be careful with the amount of data allocated on the stack because the size of the stack is limited.
> Overfilling the stack will lead to the well-known error of **stack overflow** (more in the security lab).
>
> **NOTE:** The default stack size on Linux for a 64-bit architecture is 8MiB.

## Stack in the Context of a Process's Address Space

A process's address space, or more precisely, a process's virtual address space, represents the virtual memory area usable by a process.
Each process has its own address space.
Even in situations where two processes share a memory region, the virtual space is distinct, but it maps to the same physical memory region.

![stack_image](../media/process_address_space.jpg)

In the figure above, a typical process's address space is presented.

The four important zones in a process's address space are the data zone, the code zone, the stack, and the heap.
As can be observed from the figure, the stack and the heap are the zones that can grow.
In fact, these two zones are dynamic and only make sense in the context of a process.
On the other hand, the information in the data and code zones is described in the executable.

## Tricks and Tips

1. The golden rule of stack usage is: the number of `push`-es should equal the number of `pop`-s in a function.
Given that the stack is used for function calls, it is very important that when a function finishes its execution, the stack pointer should be updated so that it points to the same memory location (of the stack) as it did at the time of entering the function.

1. In situations where we perform N `push`-es and reach the end of the function without doing a `pop` for any of the values, we can restore the stack pointer using the `add` instruction.

```assembly
section .text
global CMAIN
CMAIN:
    mov eax, 5
    mov ebx, 6
    mov ecx, 7

    push eax
    push ebx
    push ecx

    add esp, 12     ; equivalent to using 3 consecutive pop-s
    ret
```

1. An alternative method is to save the current stack pointer value in a separate register, such as `ebp`, before performing any `push` operations.
This allows us to easily restore the stack pointer value at the end of the function, without having to keep track of the number of `push` operations performed.

```assembly
section .text
global CMAIN
CMAIN:

    mov ebp, esp       ; save current stack pointer value in ebp

    mov eax, 5
    mov ebx, 6
    mov ecx, 7

    push eax
    push ebx
    push ecx

    mov esp, ebp       ; restore stack pointer value
    ret
```

> **IMPORTANT:** What is the primary use of the `ebp` register?

As we can observe, the `ebp` register defines the stack frame for each function.
Similarly to how we can address local variables using the `esp` register, we can do the same with `ebp`.
Additionally, we will see that function parameters are addressed using `ebp`.
