---
nav_order: 1
parent: 'Task: Hook at Him Go'
---

# Solution

Run the executable with GDB, ideally with `gef`, `pwndbg`, or `peda`.
As you step through, you will notice that the flag will appear in fragments in the display of the register contents (the flag string contains null characters placed specifically so that it would not be displayed all at once).

You may also see fragments in the memory dump, at times.

To step through the code, you can use the following commands:

```gdb
ni # Step to the next instruction
n # Step to the next line of code
b *0x<address> or <line> or <fun_name> # Set a breakpoint at a specific address
c # Continue execution until the next breakpoint
```

Observe the registers and memory as you step through the code, and you will see the flag being constructed in parts.
