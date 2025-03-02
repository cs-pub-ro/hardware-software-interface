---
nav_order: 6
parent: Lab 10 - Buffer Management. Buffer Overflow
---

# Task: Overwrite Return Address

In the previous exercise, we observed how values of variables stored on the stack can be overwritten.
Recalling how function calls are made **Laboratory 9**, the return address from a function `callee` back to the `caller` function is also saved on the stack.

Exploiting this behavior and starting from the resources in the `tasks/overwrite-ret-addr/support/` directory, use a buffer overflow to call the `void magic_function()` by overwriting the return address in the `read_buffer()` function.

> **IMPORTANT** The `void magic_function()` calls the `cowsay` utility, which you need to install with the following command:

```Bash
sudo apt install cowsay
```

> **HINT** To inspect the source, use the following command:

```Bash
objdump -M intel -d break_this
```

> **HINT** In the `read_buffer()` function, both the size of the input string and the string itself are read from the keyboard.
> Although the buffer is defined as `char buffer[64]`, using the value `n` in the `fgets(buffer, n, stdin)` call allows for a buffer overflow.
> Also, `fgets()` will read a maximum of `n - 1` characters;
> `n` can be set to a value larger than the actual length of the input string.

## Checking Your Solution

In order to verify your exploit, please complete the `exploit.py` TODOs.
You can test it using this command:

```console
student@hsi:/.../overwrite-ret-addr/support python3 exploit.py | ./break_this
[...]
```

Afterwards, navigate to the `tests` directory and run:

```console
student@hsi:/.../overwrite-ret-addr/tests make check

test........................................passed
Total:                                      100/100
```

If your solution is correct, you will receive a `100/100` result.

If you're having difficulties solving this exercise, go through [this](../../reading/overflow-vuln.md) reading material.
