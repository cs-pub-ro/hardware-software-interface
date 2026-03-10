AS = nasm
CC = gcc
RM = rm

SRCS := $(shell find . -name "*.asm")
OBJS := $(SRCS:.asm=.o)

UTILSDIR := ../utils/

ASFLAGS ?= -f elf32 -F dwarf -I "$(UTILSDIR)"
CFLAGS ?= -Wall
LDFLAGS ?= -m32 -no-pie

TARGET_EXEC = gcd

$(TARGET_EXEC): $(OBJS)
	$(CC) $(CFLAGS) $(LDFLAGS) $< -o $@

$(OBJS): $(SRCS)
	$(AS) $(ASFLAGS) $< -o $@

.PHONY: clean

clean:
	$(RM) -f -r *.o $(TARGET_EXEC)
