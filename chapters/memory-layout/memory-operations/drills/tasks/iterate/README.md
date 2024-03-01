# Iterating through an Integer Array

You will solve this exercise starting from the `iterate.c` file located in the `drills/tasks/iterate/support` directory.

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

If you're having difficulties solving this exercise, go through [this](../../../reading/README.md#pointers-to-arrays) reading material.
