---
nav_order: 11
parent: Lab 11 - Linking
---

# Reading: Linking

Linking is the final phase of the building process.
Linking combines multiple object files into an executable file.

To obtain an executable file from object files, the linker performs the following actions:

1. Symbol resolution: locating the undefined symbols of one object file in other object files.
1. Section merging: merging sections of the same type from different object files into a single section in the executable file.
1. Address binding: after merging, the effective address symbols within the executable file can be established.
1. Symbol relocation: once the symbol addresses are set, the instructions and data referring to those addresses in the executable must be updated.
1. Entry point establishment: specifying the address of the first instruction to be executed.

## Linker Invocation

The linker is generally invoked by the compilation utility (`gcc`, `clang`, `cl`).
Thus, invoking the linker is transparent to the user.
In specific cases, such as creating a kernel image or images for embedded systems, the user will invoke the linker directly.

If we have a source C file `app.c`, we will use the compiler to obtain the object file `app.o`:

```console
gcc -c -o app.o app.c
```

Then, to obtain the executable file `app` from the object file `app.o`, we use the `gcc` utility again:

```console
gcc -o app app.o
```

In the background, `gcc` will invoke the linker and build the executable `app`.
The linker will also link against the standard C library (libc).

The linking process will work only if the file `app.c` has the `main()` function defined, which is the main function of the program.
Linked files must have a single `main()` function in order to produce an executable.

If we have multiple C source files, we invoke the compiler for each file and then the linker:

```console
gcc -c -o helpers.o helpers.c
gcc -c -o app.o app.c
gcc -o app app.o helpers.o
```

The last command is the linking command, which links the object files `app.o` and `helpers.o` into the executable file `app`.

In the case of C++ source files, we will use the `g++` command:

```console
g++ -c -o helpers.o helpers.cpp
g++ -c -o app.o app.cpp
g++ -o app app.o helpers.o
```

We can also use the `gcc` command for linking, specifying linking with the standard C++ library (libc++):

```console
gcc -o app app.o helpers.o -lstdc++
```

The Linux linking utility, `ld`, is invoked transparently by `gcc` or `g++`.
To see how the linker is invoked, we use the `-v` option of the `gcc` utility, with the following output:

```console
 /usr/lib/gcc/x86_64-linux-gnu/11/collect2 -plugin /usr/lib/gcc/x86_64-linux-gnu/11/liblto_plugin.so -plugin-opt=/usr/lib/gcc/x86_64-linux-gnu/11/lto-wrapper -plugin-opt=-fresolution=/tmp/ccxcxtmC.res -plugin-opt=-pass-through=-lgcc -plugin-opt=-pass-through=-lgcc_s -plugin-opt=-pass-through=-lc -plugin-opt=-pass-through=-lgcc -plugin-opt=-pass-through=-lgcc_s --build-id --eh-frame-hdr -m elf_x86_64 --hash-style=gnu --as-needed -dynamic-linker /lib64/ld-linux-x86-64.so.2 -pie -z now -z relro -o app /usr/lib/gcc/x86_64-linux-gnu/11/../../../x86_64-linux-gnu/Scrt1.o /usr/lib/gcc/x86_64-linux-gnu/11/../../../x86_64-linux-gnu/crti.o /usr/lib/gcc/x86_64-linux-gnu/11/crtbeginS.o -L/usr/lib/gcc/x86_64-linux-gnu/11 -L/usr/lib/gcc/x86_64-linux-gnu/11/../../../x86_64-linux-gnu -L/usr/lib/gcc/x86_64-linux-gnu/11/../../../../lib -L/lib/x86_64-linux-gnu -L/lib/../lib -L/usr/lib/x86_64-linux-gnu -L/usr/lib/../lib -L/usr/lib/gcc/x86_64-linux-gnu/11/../../.. app.o helpers.o -lgcc --push-state --as-needed -lgcc_s --pop-state -lc -lgcc --push-state --as-needed -lgcc_s --pop-state /usr/lib/gcc/x86_64-linux-gnu/11/crtendS.o /usr/lib/gcc/x86_64-linux-gnu/11/../../../x86_64-linux-gnu/crtn.o
COLLECT_GCC_OPTIONS='-v' '-o' 'app' '-mtune=generic' '-march=x86-64' '-dumpdir' 'app.'
```

The `collect2` utility is, in fact, a wrapper around the `ld` utility.
The result of running the command is complex. A "manual" invocation of the `ld` command would look like this:

```console
ld -dynamic-linker /lib64/ld-linux-x86-64.so.2  -m elf_x86_64 -o app /usr/lib/x86_64-linux-gnu/crt1.o /usr/lib/x86_64-linux-gnu/crti.o app.o helpers.o -lc /usr/lib/x86_64-linux-gnu/crtn.o
```

The arguments of the above command have the following meanings:

- `-dynamic-linker /lib64/ld-linux-x86-64.so.2`: specifies the dynamic loader/linker used for loading the dynamic executable
- `-m elf_x86_64`: links files for the x86_64 architecture
- `/usr/lib/x86_64-linux-gnu/crt1.o`, `/usr/lib/x86_64-linux-gnu/crti.o`, `/usr/lib/x86_64-linux-gnu/rtn.o`: represent the C runtime library (`crt` - *C runtime*) that provides the necessary support for loading the executable
- `-lc`: links against standard C library (libc)

## File Inspection

To track the linking process, we use static analysis utilities such as `nm`, `objdump`, and `readelf`.

We use the `nm` utility to display symbols from an object file or an executable file:

```console
$ nm app.o
                 U add
                 U _GLOBAL_OFFSET_TABLE_
0000000000000000 T main
                 U printf


$ nm app
00000000004010be T add
0000000000404024 D __bss_start
0000000000404020 D __data_start
0000000000404020 W data_start
0000000000401080 T _dl_relocate_static_pie
0000000000403e50 d _DYNAMIC
0000000000404024 D _edata
0000000000404028 D _end
0000000000401168 T _fini
0000000000404000 d _GLOBAL_OFFSET_TABLE_
                 w __gmon_start__
0000000000401000 T _init
0000000000403e50 d __init_array_end
0000000000403e50 d __init_array_start
0000000000402000 R _IO_stdin_used
0000000000401160 T __libc_csu_fini
00000000004010f0 T __libc_csu_init
                 U __libc_start_main@@GLIBC_2.2.5
0000000000401085 T main
                 U printf@@GLIBC_2.2.5
0000000000401050 T _start
```

The `nm` command displays three columns:

- the symbol's address
- the section and type where the symbol is located
- the symbol's name

A symbol is the name of a global variable or function.
It is used by the linker to make connections between different object modules.
Symbols are not necessary for executables, which is why executables can be stripped.

The symbol's address is actually the offset within a section for object files and is the effective address for executables.

The second column specifies the section and type of the symbol.
If it is uppercase, then the symbol is exported and can be used by another module.
If it is lowercase, then the symbol is not exported and is local to the object module, making it unusable in other modules.
Thus:

- `d`: the symbol is in the initialized data area (`.data`), unexported
- `D`: the symbol is in the initialized data area (`.data`), exported
- `t`: the symbol is in the code area (`.text`), unexported
- `T`: the symbol is in the code area (`.text`), exported
- `r`: the symbol is in the read-only data area (`.rodata`), unexported
- `R`: the symbol is in the read-only data area (`.rodata`), exported
- `b`: the symbol is in the uninitialized data area (`.bss`), unexported
- `B`: the symbol is in the uninitialized data area (`.bss`), exported
- `U`: the symbol is undefined (it is used in the current module but defined in another module)

More information can be found in the manual page for the `nm` utility.

Using the `objdump` command, we can disassemble the code of object files and executables.
This way, we can see the assembly code and how the modules operate.

The `readelf` command is used to inspect object or executable files.
With the `readelf` command, we can view the headers of files.
An important piece of information in the header of executable files is the entry point, the address of the first instruction executed:

```console
$ readelf -h app
ELF Header:
  Magic:   7f 45 4c 46 02 01 01 00 00 00 00 00 00 00 00 00
  Class:                             ELF64
  Data:                              2's complement, little endian
  Version:                           1 (current)
  OS/ABI:                            UNIX - System V
  ABI Version:                       0
  Type:                              EXEC (Executable file)
  Machine:                           Advanced Micro Devices X86-64
  Version:                           0x1
  Entry point address:               0x401050
  Start of program headers:          64 (bytes into file)
  Start of section headers:          14008 (bytes into file)
  Flags:                             0x0
  Size of this header:               64 (bytes)
  Size of program headers:           56 (bytes)
  Number of program headers:         12
  Size of section headers:           64 (bytes)
  Number of section headers:         27
  Section header string table index: 26[]
```

Using the `readelf` command, we can see the sections of an executable/object file:

```console
$ readelf -S app
There are 27 section headers, starting at offset 0x36b8:

Section
Headers:

  [Nr] Name              Type             Address
  Offset
       Size              EntSize          Flags  Link  Info
       Align

  [ 0]                   NULL             0000000000000000
  00000000
       0000000000000000  0000000000000000           0     0
       0
  [ 1] .interp           PROGBITS         00000000004002e0
  000002e0
       000000000000001c  0000000000000000   A       0     0
       1
  [ 2] .note.gnu.propert NOTE             0000000000400300
  00000300
       0000000000000020  0000000000000000   A       0     0
       8
  [ 3] .note.ABI-tag     NOTE             0000000000400320
  00000320
       0000000000000020  0000000000000000   A       0     0     4
[...]
```

Also, with the `readelf` command, we can list (dump) the contents of a specific section:

```console
$ readelf -x .rodata app

Hex dump of section '.rodata':
  0x00402000 01000200 61202b20 623d2564 0a00     ....a + b=%d..
```
