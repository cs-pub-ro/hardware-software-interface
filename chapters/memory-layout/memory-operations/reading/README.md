# Pointers

In the C programming language, memory interaction is achieved through pointers.
We remind you that a pointer is a variable that holds a memory address.
The general declaration form is as follows: `type *variable_name`, where `type` can represent any valid data type in C.

> **WARNING:** The **asterisk (`*`)** used in declaring a pointer denotes that it is a pointer and should not be confused with the dereference operator.
These are two entirely different concepts represented by the same symbol.
> Declaring a pointer does not mean allocating a memory area to store data.
A pointer is also a data type, whose value is a number representing a memory address.
The size of the pointer data type is always the same, regardless of the type of data it points to, and is determined by the architecture and operating system on which the program was compiled (but usually 4 bytes on 32-bit systems and 8 bytes on 64-bit systems).
>
> ```c
>   int *p = 0xCAFEBABE; /* Declaring a pointer */
>   int x = *p; /* The value at the address stored in p */
> ```

In C, a pointer can represent:

- The address of data of a certain type
- The address of a memory area
- The address of a function
- The address where data of an unknown type is held (void pointer)

> **TIP:** The size of a pointer depends on the architecture and operating system on which the program was compiled.
The size of a pointer is determined by `sizeof(void*)` and is not necessarily equal to the size of an `int`.

## Pointer Operations and Pointer Arithmetic

Arithmetic operations on pointers are slightly different from those on integer data types.
The only valid operations are **incrementing** or **decrementing** a pointer, **adding** or **subtracting** an integer from a pointer, and subtracting two pointers of the **same type**.
The behavior of these operations is influenced by the data type to which the pointers refer.

When incrementing a pointer related to a data type `T`, the address is not increased by 1 but by the value `sizeof(T)`, which ensures addressing the next object of the same type.
Similarly, adding an integer `n` to a pointer `p` (thus the operation `p + n`) actually represents `p + n * sizeof(*p)`.
For example:

```c
char *char_ptr = 1000;
short *short_ptr = 2000;
int *int_ptr = 3000;

++char_ptr; /* char_ptr will point to address 1001 */
++short_ptr; /* short_ptr points to address 2002 */
++int_ptr; /* int_ptr points to address 3004 */
```

![A diagram which visualizes arithmetic operations on pointers](../media/arit.svg)

Subtracting two pointers is possible only if both have the same type.
The result of the subtraction is obtained by calculating the difference between the memory addresses they point to.
For example, calculating the length of a string:

```c
char *s = "Learn IOCLA, you must!";
char *p = s;
for (; *p != 0; ++p); /* Iterating character by character until '\0' */

printf("%ld", p - s); /** It will display 22, the length of the string
                       * referenced by `s`. */
```

### Interpreting Data in Memory

On most modern computers, the smallest unit of data that can be addressed is the `byte` (8 bits), meaning that we can view data in memory as a sequence of bytes, each with its own address.
As mentioned in the [previous lab](../../../intro-computer-architecture/binary-hex/reading), when we want to store information represented by multiple bytes, we need to consider the order imposed by the system architecture, called [endianness](https://en.wikipedia.org/wiki/Endianness).
Below is the mechanism for extracting data from memory on a **little-endian** architecture:

```c
int n = 0xCAFEBABE;
unsigned char first_byte = *((unsigned char*) &n); /* Extracting the first byte of n */
unsigned char second_byte = *((unsigned char*) &n + 1); /* Extracting the second byte of n */
printf("0x%x, 0x%x\n", first_byte, second_byte); /* It will display 0xBE, 0xBA */
```

> **NOTE:** For casted pointers, arithmetic operations are performed on the type to which they have been cast.
>
> **WARNING:** Do not confuse `*p++` with `(*p)++`.
In the first case, it increments the address pointed by `p`, while in the second case, it increments the value at that address.
> Arithmetic on pointers of type `void` is not possible due to the lack of a concrete data type they point to.

### Pointers to Arrays

There is a very close relationship between pointers and arrays.
In C, the name of an array is a *constant pointer* (its address is allocated by the compiler and cannot be modified during execution) to the first element of the array: `v = &v[0]`.
For example:

```c
int v[10], *p;
p = v;
++p; /* Correct */
++v; /* ERROR */
```

Arrays are stored in a continuous block of memory, so pointer arithmetic works the same way for arrays as well.
Here are some equivalences:

```c
v[0] <==> *v
v[1] <==> *(v + 1)
v[n] <==> *(v + n)
&v[0] <==> v
&v[1] <==> v + 1
&v[n] <==> v + n
```

Additionally, an array also contains information about its length and the total size occupied in memory, so `sizeof(v)` will return the space occupied in memory (number of bytes), and `sizeof(v) / sizeof(*v)` will return the number of elements in `v`.

Using pointers, we can dynamically allocate memory.
In this sense, dynamic allocation of a two-dimensional array (a matrix) can be done as follows:

The traditional method, where we allocate an array of pointers to pointers:

```c
int **array1 = malloc(nrows * sizeof(*array1));
for (i = 0; i < nrows; ++i)
    array1[i] = malloc(ncolumns * sizeof(**array1));
```

If we want to keep the array in a continuous block of memory:

```c
int **array2 = malloc(nrows * sizeof(*array2));
array2[0] = malloc(nrows * ncolumns * sizeof(**array2));
for (i = 1; i < nrows; ++i)
    array2[i] = array2[0] + i * ncolumns;
```

Below is the difference between the two approaches:

![A diagram which showcases the fact that the second approach keeps all the elements in a continuous block of memory, while the first fragments the lines in different places in memory](../media/arrays.svg)

In both cases, the elements of the matrix can be accessed using the indexing operator `[]`: `arrayX[i][j]`.
Also, just like with vectors, we can replace indexing with pointer operations.
Thus, `arr[i][j] = *(arr + i)[j] = *(*(arr + i) + j)`.

> **WARNING:** Whenever you allocate memory using a pointer, use `p = malloc(n * sizeof(*p))` instead of `p = malloc(n * sizeof(int))`.
Using `sizeof(*p)` makes the code more robust and self-documenting, so anyone reading the code will see that the correct number of bytes is being allocated without needing to check the data type that `p` is pointing to.

## Structures and Pointers to Structures

Structures are data types in which we can group multiple variables, possibly of different types (unlike arrays, which contain only data of the same type).
A structure can be defined as follows:

```c
struct struct_name {
    field_declarations
};
```

For simplifying declarations, we can associate a structure with a data type name: `typedef struct {field_declarations} struct_name;`

```c
typedef struct student {
    char *name;
    int year;
    float grade;
} Student;

int main() {
    Student s;
    s.name = (char *) malloc(20 * sizeof(*s.name));
    s.year = 3;
    return 0;
}
```

Accessing members of a structure is done using the `.` operator.

In the case of pointers to structures, accessing members is done by dereferencing the pointers:

```c
Student *s = (Student *) malloc(sizeof(*s));
(*s).year = 3;
/* In practice, to ease writing, the "->" operator is used */
s->year = 4;
```

The size of a structure is not always equal to the sum of the sizes of its fields.
This happens because of padding added by the compiler to ensure proper memory alignment.
Padding is added after a structure member followed by another member with a larger size, or at the end of the structure.

```c
struct A {
    /* sizeof(int) = 4  */
    int x;
    /* Padding with 4 bytes */

    /* sizeof(double) = 8 */
    double z;

    /* sizeof(short) = 2 */
    short y;
    /* Padding with 6 bytes */
};

printf("Size of struct: %zu", sizeof(struct A)) /* Will print 24 */
```

![A diagram visualizing the padding of each structure field, 4 bytes for x, 6 for y, and 0 for z](../media/padding.svg)

The red portion represents the padding added by the compiler, and the green parts represent the structure's members.

However, we can prevent the compiler from adding padding by using `__attribute__((packed))` when declaring the structure (More details about this in the Computer Communication Protocols course).
Thus, for the previous example, the result would be 14.

> **NOTE:** If you declare pointers to structures, don't forget to allocate memory for them before accessing the structure fields.
Also, remember to allocate and initialize structure fields that are pointer types before using them.
Also, pay attention to how you access structure fields.

## Void Pointers

Memory can be seen as an array of bytes, accessible through pointers.
By the type of the pointer, the addressed memory area gains a certain interpretation, as discussed above.
There are cases where we want to address a zone of this *'array'* in a generic way, thus requiring **void pointers**.

A pointer to `void` is a pointer that does not have an associated type.
Void pointers have a **high flexibility** because they can point to any type of data, but they also have a **limitation** in that they cannot be dereferenced, and to be used in pointer operations, they need to be converted to a known data type.

They are most commonly used in the implementation of **generic functions**.
For example, the functions `malloc()` and `calloc()` return a pointer to void, allowing these functions to be used for memory allocation for any data type.

An example of using void pointers is as follows:

```c
#include <stdio.h>

void increment(void *data, int element_size) {
    /* Check if the data entered is a char */
    if (element_size == sizeof(char)) {
        /* As mentioned, to be dereferenced,
         * a void pointer needs to be cast
         */
        char *char_ptr = data;
        ++(*char_ptr);
    }

    if (element_size == sizeof(int)) {
        int *int_ptr = data;
        ++(*int_ptr);
    }
}

int main() {
    char c = 'a';
    int x = 10;

    increment(&c, sizeof(c));
    increment(&x, sizeof(x));

    printf("%c, %d\n", c, x); /* Will print: b, 11 */
    return 0;
}
```

> **NOTE:** In `C`, it is not necessary to explicitly cast the assignment of a pointer of type T with a `void*` pointer.
>
> **Example (Good practice):**
>
> ```c
> int *array = malloc(sizeof(*array) * number_of_elements);
> ```
>
> **NOT like this:**
>
> ```c
> int *array = (int*) malloc(sizeof(*array) * number_of_elements);
> ```
>

## Pointers in Functions and Function Pointers

Within functions, pointers can be used for:

- Passing results through arguments
- Passing an address through the function's return
- Passing other functions and subsequently using them

A function that needs to modify multiple values passed through arguments or that needs to transmit multiple calculated results within the function should use pointer arguments.

```c
#include <stdio.h>

void swap(int *a, int *b) {
    int c = *a;
    *a = *b;
    *b = c;
}

int main() {
    int a = 3, b = 5;
    swap(&a, &b);

    printf("a = %d, b = %d\n", a, b); /* Will print a = 5, b = 3 */

    return 0;
}
```

A function can return a pointer, but this pointer cannot contain the address of a local variable.
Most of the time, the result is one of the arguments, possibly modified within the function.
For example:

```c
char* toUpper(char *s) {
    /* Takes a string and returns the string in uppercase */
    for (int i = 0 ; s[i] ; ++i) {
        if (s[i] >= 'a' && s[i] <= 'z') {
            s[i] -= 32;
        }
    }

    return s;
}
```

If a function returns the address of a local variable, it must be static.
The lifetime of a local variable ends when the execution of the function in which it was defined ends, and therefore the address of such a variable should not be passed outside the function.

The name of a function represents the memory address at which the function begins.
A function pointer is a variable that stores the address of a function that can be called later through that pointer.
Usually, function pointers are used to pass a function as a parameter to another function.

The declaration of a function pointer is done as follows: `type (*pf) (formal_parameter_list)`

Why is it necessary to use extra parentheses?
Without them, we would be talking about a function that returns a pointer.
Below are two examples of using function pointers:

```c
int add(int a, int b) {
    return a + b;
}

int subtract(int a, int b) {
    return a - b;
}

int operation(int x, int y, int (*func) (int, int)) {
    return func(x, y);
}

int main() {
    int (*minus)(int, int) = subtract;
    printf("%d", operation(10, 5, minus)); /* Will print 5 */

    return 0;
}
```

The [qsort()](http://www.cplusplus.com/reference/cstdlib/qsort/) function from `stdlib.h` uses a function pointer as a comparator.

```c
int compare(const void *a, const void *b) {
    return *(int *) a - *(int *)b;
}

int main() {
    int v[] = {100, 5, 325, 1, 30};
    int size = sizeof(v) / sizeof(*v);

    qsort(v, size, sizeof(*v), compare);
    for (int i = 0 ; i < size ; ++i) {
        printf("%d ", v[i]);
    }

    return 0;
}
```
