CFLAGS = -fno-PIC -g
LDFLAGS = -nostdinc -nostdlib -no-pie
AS = nasm
ASFLAGS = -f elf64

.DEFAULT_GOAL: all

.PHONY: all clean

all: name

name: name.o start.o puts.o

name.o: name.c

start.o: start.asm
	$(AS) $(ASFLAGS) -o $@ $<

puts.o: puts.asm
	$(AS) $(ASFLAGS) -o $@ $<

clean:
	-rm -f name *.o
	-rm -f *~
