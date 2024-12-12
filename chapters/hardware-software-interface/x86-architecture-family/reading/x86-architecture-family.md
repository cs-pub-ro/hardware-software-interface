# x86 Family

Almost all major processors from Intel share a common ISA (Instruction Set Architecture).
These processors are highly backward compatible, with most instructions unchanged over generations, but only added or extended.

>**NOTE**: An ISA defines the instructions supported by a processor, register size, addressing modes, data types, instruction format, interrupts, and memory organization.
>Processors in this family fall into the broad category of CISC (Complex Instruction Set Computers).
>The philosophy behind them is to have a large number of instructions, with variable length, capable of performing complex operations, over multiple clock cycles.

## Registers

The basic working units for x86 processors are registers.
These are a suite of locations within the processor through which it interacts with memory, I/O, etc.

x86 processors have 8 such 32-bit registers.
Although any of these can be used in operations, for historical reasons, each register has a specific role.

Name  | Role
----- | ---
`eax` | accumulator; system calls, I/O, arithmetic
`ebx` | base register; used for memory-based addressing
`ecx` | counter in loop instructions
`edx` | data register, used for I/O, arithmetic, interrupt values; can extend eax to 64 bits
`esi` | source in string operations
`edi` | destination in string operations
`ebp` | base or frame pointer; points to the current stack frame
`esp` | stack pointer; points to the top of the stack

In addition to these, there are some special registers that cannot be directly accessed by the programmer, such as `eflags` and `eip` (Instruction Pointer).

`eip` is a register that holds the address of the current instruction to be executed.
It cannot be directly modified, programmatically, but indirectly through jump, call, and ret instructions.

The `eflags` register contains `32` bits used as status indicators or condition variables.
We say that a flag is set if its value is `1`. The ones commonly used by programmers are:

Name | Expanded Name         | Description
---- | --------------------- | -----------
`CF` | Carry Flag            | Set if the result exceeds the maximum (or minimum) unsigned integer value
`PF` | Parity Flag           | Set if the low byte of the result contains an even number of 1 bits
`AF` | Auxiliary Carry Flag  | Used in BCD arithmetic; set if bit 3 generates a carry or borrow
`ZF` | Zero Flag             | Set if the result of the previous instruction is 0
`SF` | Sign Flag             | Has the same value as the sign bit of the result (1 negative, 0 positive)
`OF` | Overflow Flag         | Set if the result exceeds the maximum (or minimum) signed integer value

>**NOTE**: If you follow the evolution of registers from 8086, you'll see that initially they were named `ax`, `bx`, `cx` etc., and were 16 bits in size.
>From 80386, Intel extended these registers to 32 bits (i.e., "extended" `ax` → `eax`).

## Instruction Classes

Although the current set of instructions for Intel processors has [hundreds of instructions](https://www.intel.com/content/dam/www/public/us/en/documents/manuals/64-ia-32-architectures-software-developer-instruction-set-reference-manual-325383.pdf), we will only look at a [small portion of them](http://css.csail.mit.edu/6.858/2015/readings/i386.pdf).
More precisely, some of the 80386 instructions.

All x86 processors instructions can fit into 3 categories :

- data movement instructions
- arithmetical/logical instructions
- program control instructions

We will only display some of the more important instructions of each category since many of them are alike.

### Data Movement Instructions

These instructions are used to transfer data between registers, between memory and registers, and to initialize data:

Name   | Operands      | Description
------ |-------------- | -----------
`mov`  |  `dst, src`   | Moves the value from source to the destination(erasing what was in the destination before)
`push` |  `src`        | Moves the value from the source onto the "top" of the stack
`pop`  |  `dst`        | Moves the value from the "top" of the stack into the destination
`lea`  |  `dst, src`   | Loads the effective address of the source to the destination
`xchg` |  `dst, src`   | Swaps (Exchanges) the values between the source and the destination

### Arithmetic and Logic Instructions

These instructions perform arithmetic and logic operations:

Name   | Operands          | Description
------ |------------------ | -----------
`add`  |  `dst, src`       | Adds the source and the destination, storing the result in the destination
`sub`  |  `dst, src`       | Subtracts the source from the destination, storing the result in the destination
`and`  |  `dst, src`       | Calculates logical AND between the source and the destination, storing the result in the destination
`or`   |  `dst, src`       | Calculates logical OR between the source and the destination, storing the result in the destination
`xor`  |  `dst, src`       | Calculates logical XOR between the source and the destination, storing the result in the destination
`test` |  `dst, src`       | Calculates logical AND between the source and the destination without storing the result
`shl`  |  `dst, <const>`   | Calculates the logical shifted value from the destination with a constant number of positions, storing the result in the destination

### Program Control Instructions

These instructions are used to control the flow of programs:

Name    | Operands      | Description
------- |-------------- | -----------
`jmp`   |  `<address>`  | Jumps unconditionally to the specified address(directly, by register, by labels)
`cmp`   |  `dst, src`   | Compares the source with the destination(more details below)
j`cond` |  `<address>`  | Jumps conditionally to the specified address depending on the state of the flag(set/not set)/condition variable
call    |  `<address>`  | Calls the subroutine located at the specified address

>**NOTE**: [The 'cmp dest, src' instruction](https://www.felixcloutier.com/x86/cmp) effectively calculates `dest - src` behind the scenes(as in subtracting the source from the destination).
We are talking about an unsigned subtraction, without storing the result.

Therefore, when talking about the code:

> ```assembly
>   cmp eax, 0
>   jl negative
> ```

The jump to the `negative` label will be made only if the value in eax is less than `0`.
The `eax - 0` subtraction is evaluated and if the result is negative(and so, eax is negative), the jump will be made.\
When have comparisons with `0`, the same thing can be done more efficiently using the `test` instruction:

> ```assembly
>   test eax, eax
>   jl negative
>```

More on this [here](https://en.wikibooks.org/wiki/X86_Assembly/Control_Flow#Comparison_Instructions).
