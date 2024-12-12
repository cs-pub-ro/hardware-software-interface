# Structured Data - Structures

We will introduce the concept of structures in assembly language and work with specialized operations on strings.

## Structures

Structures are used to group data of different types that can be used together to create a composite type.

Next, we will go through the steps necessary to use a structure: declaration, instantiation, and accessing the fields of a structure.

### Declaring a Structure

In NASM, a structure is declared using the construction `struc <structure name>`, followed by a list of fields and terminated with `endstruc`.

Each field of the structure is defined by the following: a label (used to access members), the type specifier, and the number of elements.

Example:

```Assembly
struc mystruct
    a:    resw 1    ; a will refer to a single word-sized element
    b:    resd 1    ; b will refer to a single double-word-sized element
    c:    resb 1    ; c will refer to a single byte-sized element
    d:    resd 1    ; d will refer to a single double-word-sized element
    e:    resb 6    ; e will refer to 6 byte-sized elements
endstruc
```

> **NOTE**: Here pseudo-instructions from the NASM `res` family are used to define the data type and the number of elements for each of the structure fields.
For more details about the `res` syntax, please follow this link: [NASM Documentation](https://www.nasm.us/doc/nasmdoc3.html#section-3.2.2)

Each label defining a field represents the offset of the field within the structure.
For example, `b` will have the value 2, because there are 2 bytes from the beginning of the structure to the `b` field (the first 2 bytes are occupied by the `a` word).

> **WARNING**: If you want to use the same field name in two different structures, you must prefix the label name with a dot (`.`) like this:

```Assembly
struc mystruct1
    .a:    resw 1
    .b:    resd 1
endstruc

struc mystruct2
    .a:    resd 16
    .b:    resw 1
endstruc
```

>Use the construction `mystruct2.b` to find the offset value of 'b' within the structure `mystruct2`.

### Instantiating a Structure

One way to have a structure in memory is to declare it statically in the `.data` section.
The syntax uses NASM macros `istruc` and `iend` along with the `at` keyword.

In the following example, static instantiation of the structure declared above is presented, where `struct_var` is the memory address where the data begins.

```Assembly
struct_var:
    istruc mystruct
        at a, dw        -1
        at b, dd        0x12345678
        at c, db        ' '
        at d, dd        23
        at e, db        'Gary', 0
    iend
```

If you define the structure fields using a dot (`.`), the instantiation of the structure is done as follows:

```Assembly
struct_var:
    istruc mystruct
        at mystruct.a, dw        -1
        at mystruct.b, dd        0x12345678
        at mystruct.c, db        ' '
        at mystruct.d, dd        23
        at mystruct.e, db        'Gary', 0
    iend
```

> **WARNING**: To avoid initializing members incorrectly, you must ensure that for each field, the data type in instantiation matches the type in declaration.

### Accessing Values from a Structure

To access and/or modify a specific member of the instantiated structure, we need to know its address.
This address can be obtained by calculating the sum of the starting address of the structure and the offset within the structure of the desired member.

The following code sequence demonstrates setting a value in the `b` field of the structure and subsequently displaying the value of this field.

```Assembly
mov eax, 12345
mov dword [mystruct + b], eax ; the address of field b is the base address of the statically instantiated structure + the offset of the field (given by the label 'b')

mov ebx, dword [mystruct + b] ; putting the value from field b into the ebx register for display
PRINTF32 `%d\n\x0`, ebx
```
