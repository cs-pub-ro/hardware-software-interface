AS = nasm
CC = gcc
RM = rm

SRCS := $(shell find . -name "*.asm")
OBJS := $(SRCS:.asm=.o)

ASFLAGS ?= -f elf32 -F dwarf
CFLAGS ?= -Wall
LDFLAGS ?= -m32 -no-pie

TARGET_EXEC = stack_buffer

$(TARGET_EXEC): $(OBJS)
	$(CC) $(CFLAGS) $(LDFLAGS) $< -o $@

$(OBJS): $(SRCS)
	$(AS) $(ASFLAGS) $< -o $@

.PHONY: clean

clean:
	$(RM) -r *.o $(TARGET_EXEC)
