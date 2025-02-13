---
parent: Lab 1 - Number Representation
nav_order: 7
---

# Reading: Pointers in C

In the C language, a pointer is a variable whose value is the address of another variable.
We can think of a pointer as an intermediary, namely a variable that points to a final location or to another intermediary as shown in the image and code below.

![Simple and double pointer](../media/simple-double-pointer.svg)

```c
#include <stdio.h>

int main()
{
    int v;
    int *p;  /* pointer to a 32-bit integer */
    int **pp;  /* pointer to a pointer holding the address of a 32-bit integer */

    /* To access the address of a variable in C, we use the address-of operator '&' */
    p = &v;  /* p holds the address of value v */
    pp = &p;  /* pp holds the address of the address of value v */

    v = 69;
    /* To access the value at the address stored by a pointer, we use the dereference operator '*' */
    printf("v(%d) - *p(%d) - **pp(%d)\n", v, *p, *(*pp));  /* outputs v(69) - *p(69) - **pp(69) */

    return 0;
}
```

## Advantages of Pointers

- Pointers are used in creating complex data structures such as linked lists, trees, graphs, hash tables, etc.
- Pointers are used to transfer information between different functions or recursive calls without using global variables.
- By using pointers, we can dynamically allocate memory.
- We can have other functions, strings, complex data structures as parameters for functions.

## Disadvantages of Pointers

- Using an uninitialized pointer in a program leads to a **segmentation fault** by accessing a restricted memory area.
- Manual memory deallocation is required by the programmer for dynamically allocated memory.
- Dereferencing is needed to access a value, which is slower than direct access.

In C, a pointer can be defined for any of the data types existing in the language as well as for `void`.
A `void` pointer differs from a pointer to an explicit data type in that a void pointer **CANNOT** be used in pointer operations, as void does not have a clear size.
A basic example where pointers and pointer operations are used is the allocation and traversal of an array of values:

```c
#include <stdio.h>
#include <stdlib.h>

#define ARR_LENGTH 5

int main()
{
   int *arr, i;

   arr = (int *)malloc(sizeof(int) * ARR_LENGTH);
   // arr = (int *)calloc(ARR_LENGTH, sizeof(int));

   for (i = 0; i < ARR_LENGTH; ++i) {
       /*
        * arr + i iterates through the addresses of each element in the array, but the address arr + i doesn't increase by i but by i * sizeof(int), as arr is a pointer to int
        * This operation is not visible or necessary in C but will be required later in assembly language
        */
       printf("arr[%d] = %d: ", i, *(arr + i));
   }

   free(arr);
   return 0;
}
```

Pointers offer great flexibility regarding memory access.
Below is an example that checks if a system is little or big endian using casting between different types of pointers.

```c
#include <stdio.h>

int main()
{
    int v = 0x00000001;
    unsigned char *first_byte = (unsigned char *)&v;

    if (*first_byte == 0x01)
        printf("little-endian\n");
    else
        printf("big-endian\n");

    return 0;
}
```
