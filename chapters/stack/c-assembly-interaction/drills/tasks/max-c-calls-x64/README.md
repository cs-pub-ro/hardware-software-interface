# Maximum Computation in Assembly with 64-bit C Call

Navigate to `drills/tasks/max-c-calls-x64/support` and open `main.c`

In this subdirectory you should have implemented the maximum assembly language calculation on a 64-bit system.
Start the program from exercises 4 and 5 in such a way that you run it using a 64-bit system.

> **TIP:**
> <https://en.wikipedia.org/wiki/X86_calling_conventions>.
>
> The first thing to note is that on the x64 architecture the registers are 8 bytes in size and have different names than the 32-bit ones (in addition to extending the traditional ones: `eax` register becomes `rax`, `ebx` register becomes `rbx`, etc., there are new ones: R10-R15: for more information see [here](<https://stackoverflow.com/questions/20637569/assembly-registers-in-64-bit-architecture>)).
>
> Also, on x64 architecture parameters are no longer sent to the stack, but put in registers.
> The first 3 parameters are put in: `rdi`, `rsi` and `rdx` registers.
> This is not a uniformly adopted convention.
> This convention is only valid on Linux, on Windows there are other registers which are used to pass the parameters of a function.
> The calling convention requires that, for functions with a variable number of arguments, `rax` register be set to the number of vector registers used to pass arguments.
> `printf()` is a variable argument count function, and unless you use registers other than those mentioned in the previous paragraph for passing arguments, you must set `rax = 0` before calling.
> Read more [here](<https://stackoverflow.com/questions/38335212/calling-printf-in-x86-64-using-gnu-assembler>).
