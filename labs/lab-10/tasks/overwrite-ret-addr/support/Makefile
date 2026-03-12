AS = nasm
CC = gcc
RM = rm

SRCS_ASM := $(wildcard *.asm)
OBJS_ASM := $(SRCS_ASM:.asm=.o)

SRCS_C := $(wildcard *.c)
OBJS_C := $(SRCS_C:.c=.o)

ASFLAGS ?= -f elf32 -F dwarf
CFLAGS ?= -m32 -g -Wall -Wextra -Werror -fno-pic -masm=intel -fno-stack-protector
LDFLAGS ?= -m32 -no-pie

TARGET_EXEC = break_this

$(TARGET_EXEC): $(OBJS_ASM) $(OBJS_C)
	$(CC) $(CFLAGS) $(LDFLAGS) $^ -o $@

%.o: %.asm
	$(AS) $(ASFLAGS) $< -o $@

%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@

.PHONY: clean

clean:
	$(RM) -f $(OBJS_ASM) $(OBJS_C) $(TARGET_EXEC)
