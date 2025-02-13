---
parent: Lab 2 - Memory Operations. Introduction to GDB
nav_order: 6
---

# Task: Data Inspection

You will solve this exercise starting from the `inspect.c` file located in the `tasks/inspect/support` directory.

Given the following declarations:

```c
#include <stdio.h>

int main() {
    unsigned int a = 4127;
    int b = -27714;
    short c = 1475;
    int v[] = {0xCAFEBABE, 0xDEADBEEF, 0x0B00B135, 0xBAADF00D, 0xDEADC0DE};

    unsigned int *int_ptr = (unsigned int *) &v;

    for (int i = 0 ; i < sizeof(v) / sizeof(*int_ptr) ; ++i) {
        ++int_ptr;
    }

    return 0;
}
```

Compile the source code and run the executable with GDB.
Set a breakpoint at `main` and observe how the data is represented in memory.
For this task, you will use the `print` and `examine` commands.

> **NOTE:**
>
> - To display the value of a variable in hexadecimal, use `p/x variable_name`
> - To display the value from a pointer, use `p *pointer_name`, and to inspect the data at a memory address, use `x memory_address`.

If you're having difficulties solving this exercise, go through [this](../../reading/introduction-to-GDB.md) reading material.
