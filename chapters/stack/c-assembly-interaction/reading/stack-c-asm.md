# C - Assembly Interaction: Stack

## Setting the Stack

When entering a procedure, it is necessary to set a stack frame to which to send parameters.
Of course, if the procedure does not receive parameters, this step is not necessary. So to set the stack, the following code must be included:

```Assembly
push ebp
mov ebp, esp
```

The EBP gives us the ability to use it as an index within the stack and should not be altered during the procedure.

## Passing Parameters from C to the Assembly Procedure

C programs send parameters to assembly procedures using the stack.
Consider the following C program sequence:

```C
#include <stdio.h>

extern int sum(int a, int b);  // declare the assembly procedure as external

int main() {
    int a = 5, b = 7;
    int res = sum(a, b);  // call the assembly procedure

    return 0;
}
```

When C executes the call to `sum()`, it first pushes arguments on the stack in reverse order, then actually calls the procedure.
Thus, upon entering the procedure body, the stack will be intact.

Since the variables `a` and `b` are declared as `int` values, they will each use one word on the stack.
This method of passing parameters is called value passing.
The code of the Sum procedure might look like this:

```Assembly
section .text
    global sum   ; declare the procedure label as global

sum:
    push ebp
    mov ebp, esp

    mov eax, [ebp+8]     ; retrieve the first argument
    mov ecx, [ebp+12]    ; retrieve the second argument
    add eax, ecx         ; calculate the sum

    pop ebp
    ret
```

It is interesting to note several things.
First, the assembly code defaults the return value of the procedure to the `eax` register.
Second, the `ret` command is sufficient to exit the procedure, due to the fact that the C compiler takes care of the rest of the stuff, such as removing parameters from the stack.
