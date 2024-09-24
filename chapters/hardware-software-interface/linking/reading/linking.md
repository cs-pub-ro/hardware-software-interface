# Linking

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

The `collect2` utility is, in fact, a wrapper around the `ld` utility.
The result of running the command is complex. A "manual" invocation of the `ld` command would look like this:

```console
ld -dynamic-linker /lib/ld-linux.so.2 -m elf_i386 -o app /usr/lib32/crt1.o /usr/lib32/crti.o app.o helpers.o -lc /usr/lib32/crtn.o
```

The arguments of the above command have the following meanings:

- `-dynamic-linker /lib/ld-linux.so.2`: specifies the dynamic loader/linker used for loading the dynamic executable
- `-m elf_i386`: links files for the x86 architecture (32-bit, i386)
- `/usr/lib32/crt1.o`, `/usr/lib32/crti.o`, `/usr/lib32/crtn.o`: represent the C runtime library (`crt` - *C runtime*) that provides the necessary support for loading the executable
- `-lc`: links against standard C library (libc)

## File Inspection

To track the linking process, we use static analysis utilities such as `nm`, `objdump`, and `readelf`.

We use the `nm` utility to display symbols from an object file or an executable file:

```console
$ nm hello.o
00000000 T main
         U puts

$ nm hello
0804a01c B __bss_start
0804a01c b completed.7283
0804a014 D __data_start
0804a014 W data_start
08048370 t deregister_tm_clones
08048350 T _dl_relocate_static_pie
080483f0 t __do_global_dtors_aux
08049f10 t __do_global_dtors_aux_fini_array_entry
0804a018 D __dso_handle
08049f14 d _DYNAMIC
0804a01c D _edata
0804a020 B _end
080484c4 T _fini
080484d8 R _fp_hw
08048420 t frame_dummy
08049f0c t __frame_dummy_init_array_entry
0804861c r __FRAME_END__
0804a000 d _GLOBAL_OFFSET_TABLE_
         w __gmon_start__
080484f0 r __GNU_EH_FRAME_HDR
080482a8 T _init
08049f10 t __init_array_end
08049f0c t __init_array_start
080484dc R _IO_stdin_used
080484c0 T __libc_csu_fini
08048460 T __libc_csu_init
         U __libc_start_main@@GLIBC_2.0
08048426 T main
         U puts@@GLIBC_2.0
080483b0 t register_tm_clones
08048310 T _start
0804a01c D __TMC_END__
08048360 T __x86.get_pc_thunk.bx
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
$ readelf -h hello
ELF Header:
  Magic:   7f 45 4c 46 01 01 01 00 00 00 00 00 00 00 00 00
  Class:                             ELF32
  Data:                              2's complement, little endian
  Version:                           1 (current)
  OS/ABI:                            UNIX - System V
  ABI Version:                       0
  Type:                              EXEC (Executable file)
  Machine:                           Intel 80386
  Version:                           0x1
  Entry point address:               0x8048310
  Start of program headers:          52 (bytes into file)
  Start of section headers:          8076 (bytes into file)
  Flags:                             0x0
  Size of this header:               52 (bytes)
  Size of program headers:           32 (bytes)
  Number of program headers:         9
  Size of section headers:           40 (bytes)
  Number of section headers:         35
  Section header string table index: 34
```

Using the `readelf` command, we can see the sections of an executable/object file:

```console
$ readelf -S hello
There are 35 section headers, starting at offset 0x1f8c:
Section Headers:
  [Nr] Name              Type            Addr     Off    Size   ES Flg Lk Inf Al
  [ 0]                   NULL            00000000 000000 000000 00      0   0  0
  [ 1] .interp           PROGBITS        08048154 000154 000013 00   A  0   0  1
  [ 2] .note.ABI-tag     NOTE            08048168 000168 000020 00   A  0   0  4
  [ 3] .note.gnu.build-i NOTE            08048188 000188 000024 00   A  0   0  4
[...]
```

Also, with the `readelf` command, we can list (dump) the contents of a specific section:

```console
$ readelf -x .rodata hello

Hex dump of section '.rodata':
  0x080484d8 03000000 01000200 48656c6c 6f2c2057 ........Hello, W
  0x080484e8 6f726c64 2100                       orld!.
```
