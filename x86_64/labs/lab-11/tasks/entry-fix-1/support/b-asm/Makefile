CFLAGS = -fno-PIC -g
LDFLAGS = -no-pie
AS = nasm
ASFLAGS = -f elf64

.DEFAULT_GOAL: all

.PHONY: all clean

all: hello

hello: hello.o
	$(CC) $(LDFLAGS) -o $@ $^

hello.o: hello.asm
	$(AS) $(ASFLAGS) -o $@ $<

clean:
	-rm -f hello *.o
	-rm -f *~
