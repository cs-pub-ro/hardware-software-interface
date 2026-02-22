AS = nasm
CC = gcc

UTILSDIR := ../utils/

ASFLAGS ?= -f elf64 -F dwarf -I "$(UTILSDIR)"
CFLAGS ?= -Wall
LDFLAGS ?= -fno-PIC -no-pie

TARGET := print_string_length
OBJS := main.o print_string_length.o

all: $(TARGET)

$(TARGET): $(OBJS)
	$(CC) $(LDFLAGS) -o $@ $^

%.o: %.asm
	$(AS) $(ASFLAGS) $< -o $@

.PHONY: clean

clean:
	-rm -f *.o $(TARGET)
