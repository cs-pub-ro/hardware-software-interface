---
nav_order: 7
parent: Lab 10 - Buffer Management. Buffer Overflow
---

# Task: Buffer Overflow for Binary

Often, we don't have access to source code and want to discover vulnerabilities in executable files.
In the `tasks/overflow-for-binary/support/` directory of the laboratory resource archive, you will find an executable file.
Using `ghidra` or `gdb` for investigation, discover how to exploit the buffer overflow vulnerability to make the program display the message **Great success**.

> **IMPORTANT** To run `ghidra` on the `overflow_in_binary` executable file, you need to create a new project and import the executable file.
> Ghidra will automatically detect the file format.
> Run the analysis of the executable, then search in the Symbol Tree for the `main` function.
> **HINT** Identify in the disassembled code how input is passed to the program.
> Identify where the buffer overflow occurs.
> Identify the comparison condition you want to trigger.
> Then build the corresponding payload and deliver it in the appropriate format to the program.

If you're having difficulties solving this exercise, go through [this](../../reading/overflow-vuln.md) reading material.

> **WARNING** If you try using a payload generated with python and it doesn't work, try simply copying its content in the terminal

## Checking Your Solution

In order to verify your exploit, please complete the `exploit.py` TODOs.
Run it with `python3 exploit.py`.

Afterwards, navigate to the `tests` directory and run:

```Bash
make check
test........................................passed
Total:                                      100/100
```

If your solution is correct, you will receive a `100/100` result.

## Resources

If you found the laboratory interesting in a positive way, you can learn more about this type of attack, as well as cybersecurity in general, on this [channel](https://www.youtube.com/c/LiveOverflow).
