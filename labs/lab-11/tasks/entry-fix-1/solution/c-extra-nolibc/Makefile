CFLAGS = -fno-PIC -g
LDFLAGS = -nostdlib -nostdinc -no-pie
AS = nasm
ASFLAGS = -f elf64

.DEFAULT_GOAL: all

.PHONY: all clean

all: hello

hello: hello.o start.o puts.o
	$(CC) $(LDFLAGS) -o $@ $^

hello.o: hello.c

start.o: start.asm
	$(AS) $(ASFLAGS) -o $@ $<

puts.o: puts.asm
	$(AS) $(ASFLAGS) -o $@ $<

clean:
	-rm -f hello *.o
	-rm -f *~
