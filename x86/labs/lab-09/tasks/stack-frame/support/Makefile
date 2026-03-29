CFLAGS = -Wall -g -m32
ASM = nasm
ASMFLAGS = -f elf32

.DEFAULT_GOAL: all

.PHONY: all clean

all: main

main: main.o print_hello.o
	$(CC) $(LDFLAGS) -m32 -o $@ $^

print_hello.o: print_hello.asm
	$(ASM) $(ASMFLAGS) -o $@ $<

main.o: main.c
	$(CC) $(CFLAGS) -c -o $@ $<

clean:
	-rm -f main *.o
