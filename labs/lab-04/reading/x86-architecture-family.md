---
parent: Lab 4 - Introduction to Assembly Language
nav_order: 8
---

# Reading: x86 Family

Almost all major processors from Intel share a common ISA (Instruction Set Architecture).
These processors are highly backward compatible, with most instructions unchanged over generations, but only added or extended.

>**NOTE**: An ISA defines the instructions supported by a processor, register size, addressing modes, data types, instruction format, interrupts, and memory organization.
>Processors in this family fall into the broad category of CISC (Complex Instruction Set Computers).
>The philosophy behind them is to have a large number of instructions, with variable length, capable of performing complex operations, over multiple clock cycles.

## Registers

The basic working units for x86 processors are registers.
These are a suite of locations within the processor through which it interacts with memory, I/O, etc.

x86 processors have 16 such 64-bit registers.
Although any of these can be used in operations, for historical reasons, each register has a specific role.

Name  | Role
----- | ---
`rax` | accumulator; system calls, I/O, arithmetic
`rbx` | base register; used for memory-based addressing
`rcx` | counter in loop instructions
`rdx` | data register, used for I/O, arithmetic, interrupt values; can extend rax to 128 bits
`rsi` | source in string operations
`rdi` | destination in string operations
`rbp` | base or frame pointer; points to the current stack frame
`rsp` | stack pointer; points to the top of the stack
`r8-15` | general purpose registers

In addition to these, there are some special registers that cannot be directly accessed by the programmer, such as `rflags` and `rip` (Instruction Pointer).

`rip` is a register that holds the address of the current instruction to be executed.
It cannot be directly modified, programmatically, but indirectly through jump, call, and ret instructions.

The `rflags` register contains `64` bits used as status indicators or condition variables.
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
>From 80386, Intel extended these registers to 32 bits (i.e., "extended" `ax` → `eax`), and again with the release of "Prescott" and "Nocona" processors.

## Instruction Classes

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
>   cmp rax, 0
>   jl negative
> ```

The jump to the `negative` label will be made only if the value in eax is less than `0`.
The `rax - 0` subtraction is evaluated and if the result is negative (and so, rax is negative), the jump will be made.\
When have comparisons with `0`, the same thing can be done more efficiently using the `test` instruction:

> ```assembly
>   test rax, rax
>   jl negative
>```

More on this [here](https://en.wikibooks.org/wiki/X86_Assembly/Control_Flow#Comparison_Instructions).
