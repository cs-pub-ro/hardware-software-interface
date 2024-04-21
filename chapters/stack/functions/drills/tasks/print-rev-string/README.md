# Displaying the Reversed String

Navigate to `chapters/stack/functions/drills/tasks/print-rev-string/support/`.

In the file `print_rev_string.asm`, add the `reverse_string()` function so that you have a listing similar to the one below:

```Assembly
[...]
section .text
global main

reverse_string:
    push ebp
    mov ebp, esp

    mov eax, [ebp + 8]
    mov ecx, [ebp + 12]
    add eax, ecx
    dec eax
    mov edx, [ebp + 16]

copy_one_byte:
    mov bl, [eax]
    mov [edx], bl
    dec eax
    inc edx
    loopnz copy_one_byte

    inc edx
    mov byte [edx], 0

    leave
    ret

main:
    push ebp
    mov ebp, esp
[...]
```

> **IMPORTANT:**  When copying the `reverse_string()` function into your program, remember that the function starts at the `reverse_string()` label and ends at the `main` label.
> The `copy_one_byte` label is part of the `reverse_string()` function.

The `reverse_string()` function reverses a string and has the following signature: `void reverse_string(const char *src, size_t len, char *dst);`.
This means that the first `len` characters of the `src` string are reversed into the `dst` string.

Reverse the `mystring` string into a new string and display that new string.

> **NOTE:**  To define a new string, we recommend using the following construction in the data section:
>
> ```Assembly
> store_string times 64 db 0
> ```
>
> This creates a string of 64 zero bytes, enough to store the reverse of the string.
> The equivalent C function call is `reverse_string(mystring, ecx, store_string);`.
> We assume that the length of the string is calculated and stored in the `ecx` register.
>
> You cannot directly use the value of `ecx` in its current form.
> After the `printf()` function call for displaying the length, the value of `ecx` is not preserved.
> To retain it, you have two options:
>
> 1. Store the value of the `ecx` register on the stack beforehand (using `push ecx` before the `printf` call) and then restore it after the `printf` call (using `pop ecx`).
> 1. Store the value of the `ecx` register in a global variable, which you define in the `.data` section.
>
> You cannot use another register because there is a high chance that even that register will be modified by the `printf` call to display the length of the string.

If you're having trouble solving this exercise, go through [this](../../../reading/functions.md) reading material.
