---
nav_order: 1
parent: Lab 10 - Buffer Management. Buffer Overflow
---

# Task: Buffer in the `.data` Section

Navigate to the `tasks/data-buffer/support/` directory in the laboratory's resource archive and open the `data_buffer.asm` file.
This file contains a program that populates a buffer with information and then displays it.

Carefully review the program, then compile it using the command:

```bash
make
```

Notice that after running the above compilation command, both an object file and an executable file are generated. You can verify this by running the command:

```Bash
ls
```

Run the program using the executable file, using the command:

```Bash
./data_buffer
```

Observe the behavior of the program based on its code.
