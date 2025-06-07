---
nav_order: 9
parent: Lab 9 - The C - Assembly Interaction
---

# Reading: Inline Assembly in C

The situations where you absolutely *need* to implement something in Assembly instead of C are few and far between.
In most cases, you just want to manually optimize tight loops (i.e., blocks of code that execute often and repeatedly).
Or implement a wrapper over a *very* specific assembly instruction that the compiler does not know how to generate.

For this purpose, **gcc** has support for what it calls [Extended Asm](https://gcc.gnu.org/onlinedocs/gcc/Extended-Asm.html).
The structure of an extended assembly statement looks something like this:

```C
asm asm-qualifiers ( AssemblerTemplate
                   : OutputOperands
                 [ : InputOperands
                 [ : Clobbers ] ])
```

Where:

- **asm:** Is just the keyword `asm` (like `for`, or `if`).
- **asm-qualifiers:** Are modifiers in the same vein as `const` is a modifier to variable declarations. The only one you will ever be interested in is `volatile`.
    This keyword tells **gcc** to avoid modifying your assembly code snippet, even for the purpose of what it calls "optimization".
- **AssemblerTemplate:** Is a string literal containing one or more assembly statements. These statements can be separated through either a `;` character or a `\n`.
- **OutputOperands:** Binds register values at the end of the assembly code snippet to C variables where the values should be stored.
- **InputOperands:** Specifies what values (immediate or located in C variables) should be used to initialize specific registers when starting to execute the assembly code snippet.
- **Clobbers:** A list of registers (or memory) changed by the AssemblerTemplate that were not explicitly stated as OutputOperands.

## A practical example: `rdtsc`

Let's say you want to find the elapsed time between two points in your code.
For example, how long does it take for a `for` loop to execute.
Normally, you would use [clock_gettime()](https://www.man7.org/linux/man-pages/man3/clock_gettime.3.html) to retrieve the value of a certain clock (check the description of the `clockid` argument).
However, performing this measurement continuously may be very expensive.
The reason is more nuanced and outside the scope of this example, but it has to do with `clock_gettime()` having to acquire a lock, to perform a read from memory.

As an alternative, we can use the [RDTSC](https://www.felixcloutier.com/x86/rdtsc) instruction that Reads the CPU's Timestamp Counter.
This counter is a register that is initialized with 0 when the CPU powers up and is incremented at a fixed frequency.
The benefit of `RDTSC` is that it's very precise and there is essentially no cost to reading it: only a few clock cycles on a multi-GHz CPU.
The downside is that it's accurate only when running Linux natively, not inside a Virtual Machine.
That's something `clock_gettime()` accounts for, and the reason why we don't always just use `RDTSC`.

So, `RDTSC` will store the 64-bit counter in `EDX:EAX` on both i386 and x64.
In the following code snippet, we declare a C macro that wraps the extended asm expression.
The `eax` and `edx` are macro argument names, but are representative of the `EAX` and `EDX` registers when we'll specify the `OutputOperands`.

```C
#define rdtsc(eax, edx) \
    asm volatile (      \
        "rdtsc"         \
        : "=a"(eax),    \
          "=d"(edx))
```

In order to more easily interpret the result, we define the following structure (well... union).

```C
typedef union {
    uint64_t raw;
    struct {
        uint32_t low;
        uint32_t high;
    };
} tscval_t;
```

The 64-bit `raw` field will share the same space in memory as the two 32-bit `low` and `high` fields.
Before we use it, we need to find out what's the frequency at which the Timestamp Counter is being incremented.
This value is exposed by the kernel through `sysfs` and is expressed in kHz:

```bash
$ cat /sys/devices/system/cpu/cpu0/cpufreq/base_frequency
2600000
```

So the Timestamp Counter is incremented 2.6 billion times per second.
Let's see how we can use our macro to perform a measurement:

```C
#include <stdio.h>      /* printf    */
#include <stdint.h>     /* [u]int*_t */
#include <unistd.h>     /* sleep     */

#define TSC_FREQ 2.6e9

int32_t main(void)
{
    tscval_t start, end;

    /* perform initial timestamp measurement *
     * least significant 32b -> EAX          *
     * most significat 32b   -> EDX          */
    rdtsc(start.low, start.high);

    /* do some "work" */
    sleep(3);

    /* perform final timestamp measurement */
    rdtsc(end.low, end.high);

    /* print elapsed time (in seconds, not clock ticks!) */
    printf("%.3f\n", (end.raw - start.raw) / TSC_FREQ);

    return 0;
}
```
