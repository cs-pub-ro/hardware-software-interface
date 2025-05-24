CFLAGS = -Wall -g -O2
ASM = nasm
ASMFLAGS = -f elf64 -F dwarf
LDFLAGS = -no-pie

.DEFAULT_GOAL: all

.PHONY: all clean

all: main

main: main.o double_array.o
	$(CC) $(LDFLAGS) -o $@ $^

main.o: main.asm
	$(ASM) $(ASMFLAGS) -o $@ $<

double_array.o: double_array.c
	$(CC) $(CFLAGS) -c -o $@ $<

clean:
	-rm -f main *.o
