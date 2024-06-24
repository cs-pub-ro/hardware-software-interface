# From Code to Executable

The steps through which a `C` source code goes, from the moment of writing the code up until running as a process, are the following:

- preprocesing
- compiling
- assembly
- linking

The following diagram illustrates the steps:

TODO

## Preprocessing

During this step, the following actions take place, starting from the source code:
* comment removal
* expansion of preprocessor directives (the ones that begin with `#`), like `#define`, `#include`, `#pragma`.

With `gcc`, this step can be run using the `-E` flag.
The output file will have the `.i` extension.
```bash
$ gcc -E main.c -o main.i
```

## Compiling

During the compiling step, the following steps take place:
* Lexical analysis - the code is broken into tokens
* Syntax analysis - the compiler checks if the tokens conform to the grammar of the programming language (for example, the tokens must end with `;`)
* Semantic analysis - the compiler makes sure that the code makes sense - types and operations are correctly used, all variables are declared
* Intermediate code generation - an intermediate representation of the source code is generated, which can be more easily optimized and turned into machine code
* Optimization - various techniques are used, to improve performance
* Target Code generation - a code that can be executed by the hardware, or an equivalent, like **assembly code**, is generated

With `gcc`, this step can be run using the `-S` flag.
The output file will have the `.i` extension.
```bash
$ gcc -S main.i -o main.s
```

## Assembly / Asamblare

Assembly is the third step needed to create an executable file.
During this step, one or more **object files** are created, which contain:
1. sections (or segments)
1. symbols - variables, functions
1. code

The symbols can be either defined in the object file, or undefined.
The undefined symbols will be resolved during the **linking** step.

With `gcc`, this step can be run using the `-c` flag.
The output file will have the `.o` extension.
```bash
$ gcc -c main.s -o main.o
```

## Linking

Linking is the last step needed to get an executable file.
In this step, multiple object files, possibly generated from multiple programming languages, are linked together, along with libraries.
The linker, the entity which performs the linking process, does the following steps:

1. symbol resolution - undefined symbols are resolved; this includes symbols located in libraries
1. relocation - all sections of the same type are merged and runtime addresses are assigned to each symbol
1. creation of the executable header - it contains information needed to run the executable, like the **entry point** (the first instruction to be run).

## Invoking the Linker

The linker is usually called by the compilation program (`gcc`, `g++`, `clang`, `cl`).
This way, the compiling process is simplified for the programmer.
In some very specific ways, like compiling an OS kernel for an embedded device, the programmer will have to invoke the linker by hand.

As seen above, from a `C` source code, we can generate an object file, using `gcc`.
```bash
$ gcc -c main.c -o main.o
```

In order to generate the executable, we can use `gcc` again, like this:
```bash
$ gcc main.o -o app
```

Behind the scenes, `gcc` will call the linker, which will create the executable from the provided object file.
The C Standard Library (`libstdc`) is linked by default.
In order for the linking step to succeed, the `main()` function must be defined exactly one time.

To create an executable from multiple source files, an object file must be generated from each source file, which will be then linked together.
```bash
$ gcc -c helpers.c -o helpers.o 
$ gcc -c main.c -o main.o
$ gcc main.o helpers.o -o app
```

The last invocation of `gcc` performs the linking.

If using `C++` source files, the steps are similar, using `g++`
```bash
$ g++ -c helpers.cc -o helpers.o 
$ gcc -c main.c -o main.o
$ g++ main.o helpers.o -o app
```

The linking step can also be done using `gcc`, but the C++ Standard Library must be explicitly linked

```bash
$ gcc main.o helpers.o -o app -lstdc++
```

In Linux, the linker used by `gcc` and `g++` is `ld`.
To see how it is invoked, the `-v` can be passed to `gcc`.
It will yield an output similat to this:

```bash
/usr/lib/gcc/x86_64-linux-gnu/7/collect2 -plugin /usr/lib/gcc/x86_64-linux-gnu/7/liblto_plugin.so
-plugin-opt=/usr/lib/gcc/x86_64-linux-gnu/7/lto-wrapper -plugin-opt=-fresolution=/tmp/ccwnf5NM.res
-plugin-opt=-pass-through=-lgcc -plugin-opt=-pass-through=-lgcc_s -plugin-opt=-pass-through=-lc
-plugin-opt=-pass-through=-lgcc -plugin-opt=-pass-through=-lgcc_s --build-id --eh-frame-hdr -m elf_i386 --hash-style=gnu
--as-needed -dynamic-linker /lib/ld-linux.so.2 -z relro -o hello
/usr/lib/gcc/x86_64-linux-gnu/7/../../../i386-linux-gnu/crt1.o
/usr/lib/gcc/x86_64-linux-gnu/7/../../../i386-linux-gnu/crti.o /usr/lib/gcc/x86_64-linux-gnu/7/32/crtbegin.o
-L/usr/lib/gcc/x86_64-linux-gnu/7/32 -L/usr/lib/gcc/x86_64-linux-gnu/7/../../../i386-linux-gnu
-L/usr/lib/gcc/x86_64-linux-gnu/7/../../../../lib32 -L/lib/i386-linux-gnu -L/lib/../lib32 -L/usr/lib/i386-linux-gnu
-L/usr/lib/../lib32 -L/usr/lib/gcc/x86_64-linux-gnu/7 -L/usr/lib/gcc/x86_64-linux-gnu/7/../../../i386-linux-gnu
-L/usr/lib/gcc/x86_64-linux-gnu/7/../../.. -L/lib/i386-linux-gnu -L/usr/lib/i386-linux-gnu hello.o -lgcc --push-state
--as-needed -lgcc_s --pop-state -lc -lgcc --push-state --as-needed -lgcc_s --pop-state
/usr/lib/gcc/x86_64-linux-gnu/7/32/crtend.o /usr/lib/gcc/x86_64-linux-gnu/7/../../../i386-linux-gnu/crtn.o
COLLECT_GCC_OPTIONS='-no-pie' '-m32' '-v' '-o' 'hello' '-mtune=generic' '-march=i686'
```

`collect2` is a wrapper over `ld`.
A manual run of `ld` would look like this:
```bash
$ ld -dynamic-linker /lib/ld-linux.so.2 -m elf_i386 -o app /usr/lib32/crt1.o /usr/lib32/crti.o main.o helpers.o -lc /usr/lib32/crtn.o
```

The command arguments have the following meaning:
* `-dynamic-linker /lib/ld-linux.so.2`: it specifies which linker should be used; another relevant information is that the executable is dynamically-linked
* `-m elf_i386`: it specifies the executable file architecture - Linux ELF, 32-bits
* `/usr/lib32/crt1.o`, `/usr/lib32/crti.o`, `/usr/lib32/crtn.o`: C runtime libraries, needed to run the executable
* `-lc`: the C standard library is linked
