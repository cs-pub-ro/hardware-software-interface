---
nav_order: 12
parent: Lab 11 - Linking
---

# Guide: Linking C and C++

Access the directory `tasks/cpp-obs/support/`.
We want to observe how linking is performed with mixed sources: C and C++.

In the `bad/` subdirectory, we have two directories, `c-calls-cpp/` and `cpp-calls-c/`, where we combine C and C++ sources.
In both cases, using `make` displays errors.
This occurs because C++ symbols are *mangled*.

If we use the `nm` command on object modules obtained from C source code, we get:

```console
$ nm add.o
0000000000000000 T _Z3addii

$ nm sub.o
0000000000000000 T _Z3subii
```

The symbol names are not `add` and `sub`, but rather `_Z3addii` and `_Z3subii`.
C++ symbol names are *mangled* and define the function signature.
This allows for functions with the same name but different signatures.
Details about *name mangling* can be found [here](https://en.wikipedia.org/wiki/Name_mangling).

To resolve this, symbols defined in C and imported into C++, or vice versa, must be prefixed with the directive `extern "C"`.
This way, the C++ compiler will use simple names for the imported/exported symbols, allowing them to be used together with C modules.
This is implemented in the `good/` subdirectory.
Details about the `extern "C"` directive can be found [here](https://stackoverflow.com/a/1041880/4804196).
