AS = nasm
CC = gcc
RM = rm

SRCS := $(shell find . -name "*.asm")
OBJS := $(SRCS:.asm=.o)

UTILSDIR := ../utils/

ASFLAGS ?= -f elf32 -F dwarf -I "$(UTILSDIR)"
CFLAGS ?= -Wall
LDFLAGS ?= -m32 -no-pie

all: of cf cf_of

of: of.o
	$(CC) $(CFLAGS) $(LDFLAGS) $< -o $@

cf: cf.o
	$(CC) $(CFLAGS) $(LDFLAGS) $< -o $@

cf_of: cf_of.o
	$(CC) $(CFLAGS) $(LDFLAGS) $< -o $@

%.o: %.asm
	$(AS) $(ASFLAGS) $< -o $@

.PHONY: clean

clean:
	$(RM) -r *.o of cf cf_of
