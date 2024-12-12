# Structured Data - Arrays

## Arrays

We can consider an array as a sequence of elements of the same type, placed contiguously in memory.
You might have noticed something similar in previous labs when declaring static character strings in the `.data` section.

### Declaring an Array

In general, declared static data can be initialized or uninitialized.
Differentiation is made both by providing an initial value for initialized data and by the NASM syntax used.

For example, to declare an array of 100 words initialized with the value 42, we will use the construction:

```Assembly
section .data
    my_vect:    times 100    dw 42
```

On the other hand, if we want to declare an uninitialized array of 20 double-word elements, we use instructions from the "res" family as follows:

```Assembly
section .bss
    my_vect:    resd 20
```

## Arrays of Structures

Often, we'll need arrays that contain elements larger than a double word.
To achieve this, we'll combine the two concepts presented earlier and use arrays of structures.
Of course, string operation instructions will not work, so we'll have to resort to the classic method of accessing elements: explicit memory addressing.

For the example in this section, we create a structure representing a point in a 2D space.

```Assembly
struc point
    .x:    resd 1
    .y:    resd 1
endstruc
```

### Declaring an Array of Structures

Since NASM doesn't support any mechanism to explicitly declare an array of structures, we'll need to effectively declare a data section to accommodate our array.

Suppose we want a zero-initialized array of 100 elements of the structure type `point` (which is 8 bytes in size), we need to allocate 100 * 8 (= 800) bytes.

We obtain:

```Assembly
section .data
    point_array:    times 800    db 0
```

In addition, NASM provides an alternative to manually calculating the size of a structure by automatically generating the macro `<structure name>_size`.
Thus, the previous example can become:

```Assembly
section .data
    point_array:    times point_size * 100    db 0
```

If we want to declare an uninitialized array of structures, we can use:

```Assembly
section .bss
    point_array:    resb point_size * 100
```

### Traversing an Array of Structures

As mentioned before, to access a field of an element in an array, we need to use normal addressing (particularly "based-indexed with scale" addressing).
The formula to find the address of the element is `base_of_array + i * size_of_struct`.

Assuming we have the start address of the array in the `ebx` register and the index of the element we want to access in the `eax` register, the following example demonstrates printing the value of the y field of this element.

```Assembly
mov ebx, point_array                         	; Move the start address of the array into ebx
mov eax, 13                                 	; Assume we want the 14th element
mov edx, [ebx + point_size * eax + point.y] 	; Calculate the address of the desired field between []
                                            	; and then transfer the value from that address
                                                ; into the edx register

PRINTF32 `%u\n\x0`, edx
```

We traverse the array, having the current index in the eax register at each iteration.
We can print the values from both fields of each element in the array with the following program:

```Assembly
struc   point
	.x: resd 1
	.y: resd 1
endstruc

section .data
    point_array: times point_size * 100 db 0

section .text
    global CMAIN

CMAIN:
    push ebp
    mov ebp, esp

    xor edx, edx
    xor eax, eax

label:
    mov edx, [point_array + point_size * eax + point.x] ; access x member
    PRINTF32 `%u\n\x0`, edx

    mov edx, [point_array + point_size * eax + point.y] ; access y member
    PRINTF32 `%u\n\x0`, edx

    inc eax ; increment input index
    cmp eax, 100
    jl label

    leave
    ret
```
