# GNU Debugger (GDB)

## Starting GDB

GDB is a powerful tool for debugging programs.
It allows you to inspect the state of a program at a certain point in its execution, set breakpoints, and step through the code, among other things.
To start GDB, you need to run the following command:

```bash
gdb [program_name]
```

## Running the Program

To run the program being debugged, there are two available commands:

- `r` or `run` - this command will run the program
- `start` - unlike `run`, this command will start the program but immediately stop after entering `main`, it is equivalent to setting a breakpoint at `main` and then running the program

## Breakpoints

The essential element of GDB is the breakpoint.
Essentially, setting a breakpoint at a certain instruction causes the program's execution to halt every time it reaches that point.
Setting a breakpoint is done with the following command:

```gdb
break [location]
```

or in short form:

```gdb
b [location]
```

where *location* can represent the name of a function, the line number of the code, or even a memory address, in which case the address must be preceded by the symbol *.
For example: `break \*0xCAFEBABE`

## Stepping through instructions

- `si` or `stepi` - executes the current instruction
- `ni` or `nexti` - similar to `stepi`, but if the current instruction is a function call, the debugger will not enter the function
- `c` or `continue` - continues program execution until the next breakpoint or until it finishes
- `finish` - continues program execution until leaving the current function

## Inspecting Memory

- `p` or `print` var - displays the value of `var`.
Print is a very flexible command, allowing dereferencing of pointers, displaying addresses of variables, and indexing through arrays using *, & and [].
The print command can be followed by the /f parameter specifying the display format (x for hex, d for decimal, s for string).
- `x` or `examine` - Inspects the content at the given address.
The usage of this command is as follows:

```text
x/nfu address
```

where:

- n is the number of displayed elements
- f is the display format (x for hex, d for decimal, s for string, and i for instructions)
- u is the size of each element (b for 1 byte, h for 2, w for 4, and g for 8 bytes)

We recommend the article [Debugging](https://developers.redhat.com/articles/the-gdb-developers-gnu-debugger-tutorial-part-1-getting-started-with-the-debugger#why_another_gdb_tutorial_) for further understanding of how to use GDB both in the CLI and through an IDE.

## pwndbg

[pwndbg](https://github.com/pwndbg/pwndbg) is a GDB plugin that provides a number of useful features for debugging and exploiting binaries.
It makes GDB easier to use and infinitely more powerful.
It will become more useful as we progress through the lab sessions.

Cheatsheet [gdb + pwndbg](https://cheatography.com/superkojiman/cheat-sheets/gdb-pwndbg/); pwndbg [features](https://github.com/pwndbg/pwndbg/blob/dev/FEATURES.md)

```pwndbg
pwndbg> show context-sections
'regs disasm code ghidra stack backtrace expressions'
# for smaller terminals
pwndbg> set context-sections 'regs code stack'
# display memory area in hex + ASCII
pwndbg> hexdump $ecx
# display stack
pwndbg> stack
# permanently display memory dump of 8 bytes
pwndbg> ctx-watch execute "x/8xb &msg"

# recommended settings in .gdbinit
set context-sections 'regs code expressions'
set show-flags on
set dereference-limit 1
```
