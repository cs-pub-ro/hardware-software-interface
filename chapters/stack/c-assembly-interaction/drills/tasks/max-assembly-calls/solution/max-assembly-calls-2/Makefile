ASFLAGS  := -f elf64
LDFLAGS  := -no-pie
CFLAGS   := -g -Wall -Wextra -Werror -fno-pic -masm=intel
ASM = nasm

.DEFAULT_GOAL: all

.PHONY: all clean

all: main

main: main.o max.o
	$(CC) $(LDFLAGS) -o $@ $^

main.o: main.asm
	$(ASM) $(ASMFLAGS) -o $@ $<

max.o: max.c
	$(CC) $(CFLAGS) -c -o $@ $<

clean:
	-rm -f main *.o
