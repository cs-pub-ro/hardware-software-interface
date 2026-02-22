AS = nasm
CC = gcc

SRCS := $(shell find . -name "*.asm")
OBJS := $(SRCS:.asm=.o)

UTILSDIR := ..utils/

ASFLAGS ?= -f elf64 -F dwarf -I "$(UTILSDIR)"
CFLAGS ?= -Wall
LDFLAGS ?= -fno-PIC -no-pie

all: hello_world

hello_world: hello_world.o

%.o: %.asm
	$(AS) $(ASFLAGS) $< -o $@

.PHONY: clean

clean:
	-rm -f *.o hello_world
