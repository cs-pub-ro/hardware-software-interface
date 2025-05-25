CFLAGS = -fno-PIC -g
LDFLAGS = -no-pie
AS = nasm
ASFLAGS = -f elf64

.DEFAULT_GOAL: all

.PHONY: all clean

all: hello

hello: hello.o start.o
	ld -static -m elf_x86_64 -L/usr/lib/gcc/x86_64-linux-gnu/13 -o $@ $^ /usr/lib/x86_64-linux-gnu/crti.o --start-group -lc -lgcc -lgcc_eh --end-group /usr/lib/x86_64-linux-gnu/crtn.o

hello.o: hello.c

start.o: start.asm
	$(AS) $(ASFLAGS) -o $@ $<

clean:
	-rm -f hello *.o
	-rm -f *~
