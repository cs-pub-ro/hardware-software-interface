AS = nasm
CC = gcc

UTILSDIR := ../utils/

ASFLAGS ?= -f elf32 -F dwarf -I "$(UTILSDIR)"
CFLAGS ?= -Wall
LDFLAGS ?= -m32 -no-pie

TARGET := print_string
OBJS := main.o print_string.o

all: $(TARGET)

$(TARGET): $(OBJS)
	$(CC) $(LDFLAGS) -o $@ $^

%.o: %.asm
	$(AS) $(ASFLAGS) $< -o $@

.PHONY: clean

clean:
	-rm -f *.o $(TARGET)
