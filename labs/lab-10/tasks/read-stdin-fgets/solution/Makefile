AS = nasm
CC = gcc
RM = rm

SRCS := $(shell find . -name "*.asm")
OBJS := $(SRCS:.asm=.o)

ASFLAGS ?= -f elf64 -F dwarf
CFLAGS ?= -Wall
LDFLAGS ?= -no-pie

TARGET_EXEC = read_stdin_fgets

$(TARGET_EXEC): $(OBJS)
	$(CC) $(CFLAGS) $(LDFLAGS) $< -o $@

$(OBJS): $(SRCS)
	$(AS) $(ASFLAGS) $< -o $@

.PHONY: clean

clean:
	$(RM) -r *.o $(TARGET_EXEC)
