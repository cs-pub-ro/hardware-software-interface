# Helpful info

 Use `objdump -d -M intel break_this | vim` and replace vim with editor of choice {nvim, less, nano}.
 Search for the `read_buffer` function.
 Once inside, search for the `fgets` call and see at what offset in regards to `rbp` we write to (aka where our buffer begins).

 If our buffer begins at `rbp - 0x60` (that is, the address passed to fgets) that means we should write 96 bytes
 (0x60 = 96), then another 8 to overwrite `rbp`, then the final 8 which overwrite the `return address`.

 The last 8 bytes need to be the address of `magic_function` which you can also see in objdump. (the address might appear as `0x00302189` in objdump, it's shortened for clarity. You need to write it in full as `0x0000000000302189` in your script)

> Mentioned addresses are examples, not the actual ones you will find in this exercise
> Keep in mind to write it in little-endian in the python script!
