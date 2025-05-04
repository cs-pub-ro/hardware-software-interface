---
nav_order: 9
parent: Lab 8 - Functions
---

# Guide: Registers Terminator

Navigate to `guides/registers-terminator/support/`.

Open the `registers_terminator.asm` file, assemble it, and run it.

The purpose of this guide is to really make you aware how caller-saved registers **need to** be saved by the `caller`.
It is also important to notice that the `rbx` and `r12-r15` registers are preserved(`callee saved`).

In the presented assembly file, we set some values to the `rax`, `rcx`, `rdx`, `rsi`, `rdi`, `r8` and `r9` simulating a normal program flow.
We print their values and then call the libc `printf` function and then print their values again.
The output can look similar to this one:

```console
rax=1
rcx=2
rdx=3
rsi=4
rdi=404018
r8=6
r9=7
rbx=8
r12=9
r13=a
r14=b
r15=c
Hello, world!
rax=e
rcx=0
rdx=0
rsi=13e5b2a0
rdi=1463ae00
r8=6
r9=7
rbx=8
r12=9
r13=a
r14=b
r15=c
```

We can easily notice that the values of the `rax`, `rcx`, `rdx`, `rsi` and `rdi` registers have been completely altered.
If those were real values and we would have needed them after the `printf` call, the results would be unpredictable but, certainly, wrong.
However, we can observe that the `callee-saved` registers remained untouched.
