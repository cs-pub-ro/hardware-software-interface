---
nav_order: 1
parent: 'Task: Hidden in Plain Sight'
---

# Solution

Looking at the disassembly of the `link` binary, it is noticeable that there is no `main()` function.
This is a clear indicator that we have to find a way to call it ourselves.

We define a `get_flag()` function prototype as void (you may be able to skip this step, but there will be an implicit declaration error during compilation) and we call it in our main function.
We then compile and assemble the file:

```bash
gcc -g -m64 -fno-PIC -c main.c
```

We then link it to the `link` binary:

```bash
gcc -no-pie -m64 link main.o -o a.out
```

Run the executable:

```bash
./a.out
```
