# Linking C and C++

We want to see how linking is done from mixed sources: C and C++.

In the subdirectory `errors/` we have two directories `c-calls-cpp/` and `cpp-calls-c/` in which we combine mixed C and C++ sources.
In both cases, using `make` displays errors.
This is because C++ symbols are *mangled*, i.e. their symbols have different names because of the classes and namespaces present in C++.
If we use the `nm` command on object modules obtained from C source code, we get:

``` asm
$ nm add.o
0000000000000000 T _Z3addii

$ nm sub.o
0000000000000000 T _Z3subi
```

The symbol names are not `add` and `sub`, respectively, but are `_Z3addii` and `_Z3subii`.
C++ symbol names are *mangled* and define the function signature.
This is to allow functions with the same name but different signatures.
Details about *name mangling* can be found [here](https://en.wikipedia.org/wiki/Name_mangling).

To fix this, you need to prefix symbols defined in C and imported into C++, or vice versa, with the `external "C"` directive.
This way, the C++ compiler will use simple names for imported/exported symbols, to be used in conjunction with C modules.
This is done in the `correct/` subdirectory.
In this subdirectory errors in the `errors/` subdirectory are fixed.
Compare the `ops.h` files in both subdirectories.
Details about the `external "C" directive can be found [here](https://stackoverflow.com/a/1041880/4804196).
