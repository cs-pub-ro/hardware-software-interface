CFLAGS = -Wall -g -m32
ASM = nasm
ASMFLAGS = -f elf32

.DEFAULT_GOAL: all

.PHONY: all clean

all: main

main: main.o max.o
	$(CC) $(LDFLAGS) -m32 -o $@ $^

max.o: max.asm
	$(ASM) $(ASMFLAGS) -o $@ $<

main.o: main.c

clean:
	-rm -f main *.o
