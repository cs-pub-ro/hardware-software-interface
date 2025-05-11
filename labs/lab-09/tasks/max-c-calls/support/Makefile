CFLAGS = -Wall -g
ASM = nasm
ASMFLAGS = -f elf64 -F dwarf

.DEFAULT_GOAL: all

.PHONY: all clean

all: main

main: main.o max.o
	$(CC) $(LDFLAGS) -o $@ $^

max.o: max.asm
	$(ASM) $(ASMFLAGS) -o $@ $<

main.o: main.c

clean:
	-rm -f main *.o
