# Functions

In this lab, we'll discuss how function calls are performed.
We'll see how we can use the `call` and `ret` instructions to make function calls and how we use the stack to pass function parameters.

## Passing Parameters

When it comes to calling a function with parameters, there are two major options for placing them:

1. **Register Passing** - this method intuitively involves passing parameters through registers.

    Advantages:

    - It is very easy to use when the number of parameters is small.
    - It is very fast since parameters are immediately accessible from registers.

    Disadvantages:

    - Because there is a limited number of registers, the number of parameters for a function becomes limited.
    - It's very likely that some registers are used inside the called function, and it becomes necessary to temporarily save registers on the stack before the function call.
    Thus, the second advantage listed disappears because accessing the stack involves working with memory, meaning increased latency.

1. **Stack Passing** - this method involves pushing all parameters onto the stack.

    Advantages:

    - A large number of parameters can be passed.

    Disadvantages:

    - It's slow because it involves memory access.
    - More complicated in terms of parameter access.

> **NOTE:** For **32-bit** architectures, the stack passing method is used, while for **64-bit** architectures, the register passing method is used for the first 6 arguments.
> Starting from the 7th, the stack has to be used.
> We will use the convention for 32-bit architecture.

## Function Call

When we call a function, the steps are as follows:

- We put the arguments on the stack, pushing them in the reverse order in which they are sent as function arguments.
- We call `call`.
- We restore the stack at the end of the call.

### Stack Operation

As we know, stack operations fall into two types:

- `push val` where the value `val` is placed on the stack
- `pop reg/mem` where what is on the top of the stack is placed into a register or memory area

When we `push`, we say that the stack **grows** (elements are added).
For reasons that will be better explained later, the stack pointer (indicated by the `esp` register in 32-bit mode) decreases in value when the stack grows (on `push`).
However, this contradiction in naming comes from the fact that the stack is typically represented vertically, with smaller values at the top and larger values at the bottom.

Similarly, when we `pop`, we say that the stack **shrinks** (elements are removed).
Now the stack pointer (indicated by the `esp` register in 32-bit mode) increases in value.

A summary of this is explained very well [here](https://en.wikibooks.org/wiki/X86_Disassembly/The_Stack).

For example, if we have the function `foo` with the following signature (in C language):

```C
int foo(int a, int b, int c);
```

The call to this function will look like this:

```Assembly
mov ecx, [c]     ; take the value of parameter c from a memory location
mov ebx, [b]
mov eax, [a]

push ecx         ; put parameters in reverse order, starting with c
push ebx         ; then b
push eax         ; then a
call foo         ; call the function
add esp, 12      ; restore the stack
```

## Caller and Callee

When we call a function, we say that the calling function (the context that calls) is the **caller**, while the called function is the **callee**.
In the previous paragraph, we discussed how things look at the caller level (how we build the stack).

Now let's see what happens at the callee level.
Until the `call` instruction, the stack contains the function's parameters.
The `call` can be roughly equated to the following sequence:

```Assembly
push eip
jmp function_name
```

That is, even the `call` uses the stack and saves the address of the next instruction, the one after the `call`, also known as the **return address**.
This is necessary for the callee to know where to return to in the caller.

In the callee, at its beginning (called preamble), the frame pointer is saved (in the i386 architecture, this is the `ebp` register), with the frame pointer then referring to the current function stack frame.
This is crucial for accessing parameters and local variables via an offset from the frame pointer.

Although not mandatory, saving the frame pointer helps in debugging and is used in most cases.
For these reasons, any function call will generally have a preamble:

```Assembly
push ebp
mov ebp, esp
```

These modifications take place in the callee.
Therefore, it is the responsibility of the callee to restore the stack to its old value.
Hence, it is customary to have an epilogue that restores the stack to its initial state; this epilogue is:

```Assembly
leave
```

After this instruction, the stack is as it was at the beginning of the function (immediately after the call).
It is equivalent to the following code, which undoes the functions's preamble:

```Assembly
mov esp, ebp
pop ebp
```

To conclude the function, it is necessary for the execution to return and continue from the instruction following the `call` that started the function.
This involves influencing the `eip` register and putting back the value that was saved on the stack initially by the `call` instruction.
This is achieved using the instruction:

```Assembly
ret
```

which is roughly equivalent to the instruction:

```Assembly
pop eip
```

For example, the definition and body of the function foo, which calculates the sum of 3 numbers, would look like this:

```Assembly

foo:
    push ebp
    mov ebp, esp

    mov eax, [ebp + 8]
    mov ebx, [ebp + 12]
    mov ecx, [ebp + 16]

    add eax, ebx
    add eax, ecx

    leave
    ret
```

### Remarks

1. A function is defined by a label.

1. After the function's preamble, the stack looks as follows:

   ![stack.svg](../media/stack.svg)

1. Note that during the execution of the function, what does not change is the position of the frame pointer.
This is the reason for its name: it points to the current function's frame.
Therefore, it is common to access a function's parameters through the frame pointer.
Assuming a 32-bit system and processor word-sized parameters (32 bits, 4 bytes), we will have:

   - the first argument is found at address `ebp+8`
   - the second argument is found at address `ebp+12`
   - the third argument is found at address `ebp+16`
   - etc.

   This is why, to get the parameters of the foo function in the eax, ebx, ecx registers, we use the constructions:

    ```Assembly
    mov eax, dword [ebp+8]   ; first argument in eax
    mov ebx, dword [ebp+12]  ; second argument in ebx
    mov ecx, dword [ebp+16]  ; third argument in ecx
    ```

1. The return value of a function is placed in registers (generally in eax).

   - If the return value is **8 bits**, the function's result is placed in `al`.
   - If the return value is **16 bits**, the function's result is placed in `ax`.
   - If the return value is **32 bits**, the function's result is placed in `eax`.
   - If the return value is **64 bits**, the result is placed in the `edx` and `eax` registers.
    The most significant 32 bits are placed in `edx`, and the rest in the `eax` register.

    _Additionally, in some cases, a memory address can be returned to the stack/heap (e.g. `malloc()`), or other memory areas, which refer to the desired object after the function call._

1. A function uses the same hardware registers;
therefore, when exiting the function, the values of the registers are no longer the same.
To avoid this situation, some/all registers can be saved on the stack.
You can push all registers to the stack using the [`pusha` instruction - "push all"](https://c9x.me/x86/html/file_module_x86_id_270.html).
And you can pop them all in the same order using [`popa`](https://c9x.me/x86/html/file_module_x86_id_249.html).
The disadvantage of doing so is that writing all registers to the stack is going to be slower than only explicitly saving the registers used by the function.
For this reason, the `cdecl` calling convention specifies that functions are allowed to change the values of the `eax`, `ecx` and `edx` registers.

> **NOTE:**  Since assembly languages offer more opportunities, there is a need for calling conventions in x86.
> The difference between them may consist of the parameter order, how the parameters are passed to the function, which registers need to be preserved by the callee or whether the caller or callee handles stack preparation.
> More details can be found [here](https://en.wikipedia.org/wiki/X86_calling_conventions) or [here](https://levelup.gitconnected.com/x86-calling-conventions-a34812afe097) if Wikipedia is too mainstream for you.
> For us, the registers `eax`, `ecx`, `edx` are considered **clobbered** (or volatile), and the callee can do whatever it wants to them.
> On the other hand, the callee has to ensure that `ebx` exits the function with the same value it has entered with.
