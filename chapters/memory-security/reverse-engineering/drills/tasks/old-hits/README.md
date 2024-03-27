# Reverse: Old hits

Using `Ghidra`, as well as `gdb`, analyze the `old-hits/support/old-hits` binary and obtain the secret information.
The program generates a random value and asks you to guess another value calculated based on the aforementioned one.

If you're having difficulties solving this exercise, go through [this](../../../guides/ghidra-tutorial/README.md#ghidra-tutorial-decompiling) reading material.

Note: The following error can occur when running the executable if you don't have `libcrypto.so.1.1` installed on your system:

```bash
./old-hits: error while loading shared libraries: libcrypto.so.1.1: cannot open shared object file: No such file or directory
```

To install `libcrypto.so.1.1` run the following commands:

```bash
wget http://nz2.archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.1f-1ubuntu2_amd64.deb
sudo dpkg -i libssl1.1_1.1.1f-1ubuntu2_amd64.deb
rm libssl1.1_1.1.1f-1ubuntu2_amd64.deb
```
