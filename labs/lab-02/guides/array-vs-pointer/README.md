---
parent: Lab 2 - Memory Operations. Introduction to GDB
nav_order: 8
---

# Guide: Array vs. Pointer

To follow this guide, you'll need to use the `array_vs_pointer.c` file located in the `guides/array_vs_pointer/support` directory.

Compile and run the source from the skeleton.

The program simply declares an array chars and a char pointer, we'll try to understand the difference between the two.

We can observe the fact that even though both of them point to the same sequence of characters, the sizeof operator returns different values: the number of bytes needed for the array (13), while for the pointer, it simply returns its size as a data type (4/8 on most systems).

```bash
sizeof(v): 13
sizeof(p): 8
```

We've previously learned that an array is also technically a pointer to the first element of the array, so why would it be in any way different?
This behaviour is a consequence that comes from the fact that the value of the pointer which represents the array is **constant** and cannot be changed.
This means that we can determine the size of the array at compile time since it is not possible to make it point to a different memory location, but for a regular pointer like the one declared in the example, the address which it points to can be changed at runtime, so it will not always points to an array of the same size and we cannot even determine if it will point to an array at all (it could point to a single variable for example).

The second difference appears when attempting to change the value of one of the characters in the sequence, it seems that we can't do it using the pointer, while we can do it using the array.
This is a consequence of the fact that the pointer points to read-only memory (the string literal, which we'll later learn is stored in a memory area called `.rodata`), while the array points to its own allocated memory, which is writable.
