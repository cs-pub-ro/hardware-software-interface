---
parent: Lab 2 - Memory Operations. Introduction to GDB
nav_order: 1
---

# Task: Iterating through an Integer Array

You will solve this exercise starting from the `iterate.c` file located in the `tasks/iterate/support` directory.

Here is the given piece of C code:

```c
#include <stdio.h>

int main() {
    int v[] = {0xCAFEBABE, 0xDEADBEEF, 0x0B00B135, 0xBAADF00D, 0xDEADC0DE};

    return 0;
}
```

Display the addresses of the elements in the `v` array along with their values.
Iterate through the addresses in `v` byte by byte, two bytes at a time, and four bytes at a time.

> **TIP:** You can iterate through memory byte by byte starting from a specific address using a pointer of type `unsigned char*` (since the `char` type is represented by one byte).
>
>```c
>unsigned char *char_ptr = v;
>```
>
> For displaying the address and the value, you can use:
>
>```c
>printf("%p -> 0x%x\n", char_ptr, *char_ptr);
>```

To test the implementation, enter the `tests/` directory and run:

```console
make check
```

In case of a correct solution, you will get an output such as:

```text
test_chars                       ........................ passed ...  33
test_shorts                      ........................ passed ...  33
test_ints                        ........................ passed ...  34

Total:                                                           100/100
```

If you're having difficulties solving this exercise, go through [this](../../reading/memory-operations.md) reading material.
