CFLAGS = -Wall -g -m32
ASM = nasm
ASMFLAGS = -f elf32

.DEFAULT_GOAL: all

.PHONY: all clean

all: main

main: main.o double_array.o
	$(CC) $(LDFLAGS) -m32 -o $@ $^

main.o: main.asm
	$(ASM) $(ASMFLAGS) -o $@ $<

double_array.o: double_array.c
	$(CC) $(CFLAGS) -c -o $@ $<

clean:
	rm -f main *.o
