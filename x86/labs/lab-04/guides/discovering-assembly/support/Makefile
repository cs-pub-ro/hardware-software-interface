AS = nasm
CC = gcc
RM = rm

SRCS := $(shell find . -name "*.asm")
OBJS := $(SRCS:.asm=.o)

UTILSDIR := ..utils/

ASFLAGS ?= -f elf32 -F dwarf -I "$(UTILSDIR)"
CFLAGS ?= -Wall
LDFLAGS ?= -m32 -no-pie

all: ex1 ex2 ex3 ex4

ex1: ex1.o
	$(CC) $(CFLAGS) $(LDFLAGS) $< -o $@

ex2: ex2.o
	$(CC) $(CFLAGS) $(LDFLAGS) $< -o $@

ex3: ex3.o
	$(CC) $(CFLAGS) $(LDFLAGS) $< -o $@

ex4: ex4.o
	$(CC) $(CFLAGS) $(LDFLAGS) $< -o $@

%.o: %.asm
	$(AS) $(ASFLAGS) $< -o $@

.PHONY: clean

clean:
	$(RM) -r *.o ex1 ex2 ex3 ex4
