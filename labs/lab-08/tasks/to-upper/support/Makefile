AS = nasm
CC = gcc

SRCS := $(shell find . -name "*.asm")
OBJS := $(SRCS:.asm=.o)

UTILSDIR := ../utils/

ASFLAGS ?= -f elf32 -F dwarf -I "$(UTILSDIR)"
CFLAGS ?= -Wall
LDFLAGS ?= -m32 -no-pie

all: toupper

toupper: toupper.o

%.o: %.asm
	$(AS) $(ASFLAGS) $< -o $@

.PHONY: clean

clean:
	-rm -f *.o toupper
