CC = gcc
CFLAGS = -g -Wall -Wextra -Werror -fno-pic -masm=intel
ASFLAGS = -f elf64
LDFLAGS = -no-pie
PROGNAME = mainmax

ASM = nasm

.DEFAULT_GOAL: all

.PHONY: all clean

all: $(PROGNAME)

$(PROGNAME): main.o max.o
	$(CC) $(LDFLAGS) -o $@ $^

max.o: max.asm
	$(ASM) $(ASFLAGS) -o $@ $<

main.o: main.c
	$(CC) $(CFLAGS) -c -o $@ $<

clean:
	-rm -f $(PROGNAME) *.o
