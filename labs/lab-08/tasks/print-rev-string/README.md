---
nav_order: 4
parent: Lab 8 - Functions
---

# Task: Displaying the Reversed String

Navigate to `tasks/print-rev-string/support/`.

In the file `print_rev_string.asm`, add the `reverse_string()` function so that you have a listing similar to the one below:

```Assembly
[...]
section .text
extern printf
extern puts
global print_reverse_string

reverse_string:
    push rbp
    mov rbp, rsp

    mov rax, rdi            ; get the address of the string
    mov rcx, rsi            ; get the length of the string
                            ; the address of the buffer to store the reversed string is already in rdx

    test rcx, rcx           ; check if length is zero
    jz done                 ; if zero, skip to null termination

    add rax, rcx            ; point to one past the last character
    dec rax                 ; point to the last character

copy_loop:
    mov bl, [rax]           ; get a byte from the source
    mov [rdx], bl           ; store it in the destination
    dec rax                 ; move to previous character in source
    inc rdx                 ; move to next character in destination
    dec rcx                 ; decrease counter
    jnz copy_loop           ; if counter not zero, continue loop

done:
    mov byte [rdx], 0       ; null-terminate the destination string

    leave
    ret

print_reverse_string:
    push rbp
    mov rbp, rsp
[...]
```

> **IMPORTANT:**  When copying the `reverse_string()` function into your program, remember that the function starts at the `reverse_string()` label and ends at the `print_reverse_string` label.
> The `copy_loop` and `done` labels are part of the `reverse_string()` function.

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
> The equivalent C function call is `reverse_string(mystring, rcx, store_string);`.
> We assume that the length of the string is calculated and stored in the `rcx` register.
>
> You cannot directly use the value of `rcx` in its current form.
> After the `printf()` function call for displaying the length, the value of `rcx` is not preserved.
> To retain it, you have two options:
>
> 1. Store the value of the `rcx` register on the stack beforehand (using `push rcx` before the `printf` call) and decrease the value of `rsp` by `8` in order to align the stack and then increase the value of `rsp` by `8` and restore it after the `printf` call (using `pop rcx`).
> 1. Store the value of the `rcx` register in a global variable, which you define in the `.data` section.
>
> You cannot use another register because there is a high chance that even that register will be modified by the `printf` call to display the length of the string.

After you consider your implementation complete, it is recommended to first run it `manually` in order to assess its correctness.
In order to do so, enter the `support/` directory and run:

```console
make
```

If your code successfully compiled, you can then run the binary like so:

```console
./print_reverse_string
```

To fully test the implementation, enter the `tests/` directory and run:

```console
make check
```

In case of a correct solution, you will get an output such as:

```text
./run_all_tests.sh
test_reverse_simple              ........................ passed ...  33
test_reverse_special             ........................ passed ...  33
test_reverse_long                ........................ passed ...  34

Total:                                                           100/100
```

If you're having trouble solving this exercise, go through [this](../../reading/functions.md) reading material.
