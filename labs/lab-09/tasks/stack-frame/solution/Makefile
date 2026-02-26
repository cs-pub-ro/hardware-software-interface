CFLAGS   = -Wall -g
ASM      = nasm
ASMFLAGS = -f elf64 -F dwarf
LDFLAGS  = -no-pie

.DEFAULT_GOAL: all

.PHONY: all clean

all: main

main: main.o print_hello.o
	$(CC) $(LDFLAGS) -o $@ $^

print_hello.o: print_hello.asm
	$(ASM) $(ASMFLAGS) -o $@ $<

main.o: main.c
	$(CC) $(CFLAGS) -c -o $@ $<

clean:
	-rm -f main *.o
