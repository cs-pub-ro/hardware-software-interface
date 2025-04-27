NASM = nasm
AFILES = max.asm
OBJS = $(AFILES:.asm=.o)
ASM_FLAGS = -f elf64 -g
LD=gcc
LDFLAGS = -g -no-pie
BINARIES = max

all : $(BINARIES)

%.o : %.asm
	$(NASM) $(ASM_FLAGS) -o $@ $<

clean:
	rm -f *.o $(BINARIES) *.s
	rm -f *~
