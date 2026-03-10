CFLAGS = -Wall -g -m32
ASM = nasm
ASMFLAGS = -f elf32

.DEFAULT_GOAL: all

.PHONY: all clean

all: main

main: main.o max.o
	$(CC) $(LDFLAGS) $(CFLAGS) -o $@ $^

main.o: main.asm
	$(ASM) $(ASMFLAGS) -o $@ $<

max.o: max.c
	$(CC) $(CFLAGS) -c -o $@ $<

clean:
	-rm -f main *.o
