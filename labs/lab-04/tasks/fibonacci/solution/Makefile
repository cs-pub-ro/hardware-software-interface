AS = nasm
CC = gcc
RM = rm

SRCS := $(shell find . -name "*.asm")
OBJS := $(SRCS:.asm=.o)

UTILSDIR := ../utils/

ASFLAGS ?= -f elf64 -F dwarf -I "$(UTILSDIR)"
CFLAGS ?= -Wall
LDFLAGS ?= -no-pie

TARGET_EXEC = fibonacci

$(TARGET_EXEC): $(OBJS)
	$(CC) $(CFLAGS) $(LDFLAGS) $< -o $@

$(OBJS): $(SRCS)
	$(AS) $(ASFLAGS) $< -o $@

.PHONY: clean

clean:
	$(RM) -r *.o $(TARGET_EXEC)
