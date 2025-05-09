---
nav_order: 11
parent: Lab 11 - Linking
---

# Task: Linking a Single File

Access the directory `tasks/single-link/support/example/`.
We want to follow the linking commands for a single C source file.
The source file is `hello.c`.

In the three subdirectories, you will find support files for the following scenarios:

- `a-dynamic/`: creating a dynamic executable file
- `b-static/`: creating a static executable file
- `c-standalone/`: creating a standalone executable file without the standard C library

In each subdirectory, we use the `make` command to compile the executable file `hello`.
We use the command `file hello` to check whether the file is compiled dynamically or statically.

In the `Makefile` files, the linking command uses `gcc`.
An equivalent command that directly uses `ld` is commented out.
To track the direct usage of `ld`, we can comment out the `gcc` command and uncomment the `ld` command.

In the case of `c-standalone/`, since we are not using the standard C library or C runtime library, we need to replace their functionalities.
The functionalities are replaced in the `start.asm` and `puts.asm` files.
These files implement the `_start` function/symbol and the `puts` function, respectively.
The `_start` function/symbol is, by default, the entry point of an executable program.
The `_start` function is responsible for calling the `main` function and terminating the program.
Because there is no standard library, these two files are written in assembly language and use system calls.

**Bonus**: Add a command in the `Makefile` in the `c-standalone/` directory that explicitly uses `ld` for linking.

Access the directory `tasks/single-link/support/diy/`.
We want to compile and link the source files in each subdirectory, following the model of the previous exercise.

Copy the `Makefile` files and update them in each subdirectory to obtain the executable file.

**Checker**: To test the implementation, enter the tests/ directory and run:

```console
./run_all_tests.sh
```

In case of a correct solution, you will get this output:

```console
./run_all_tests.sh

test_a-dynamic                   ........................ passed ...  100
test_b-static                    ........................ passed ...  100
test_c-standalone                ........................ passed ...  100

========================================================================

Total:                                                             100/100
```

If you're having difficulties solving this exercise, go through [this](../../reading/linking.md) reading material.
