CFLAGS = -fno-PIC -g
LDFLAGS = -no-pie

.DEFAULT_GOAL: all

.PHONY: all clean

all: name

name: name.o
	#$(CC) $(LDFLAGS) -o $@ $^
	ld -dynamic-linker /lib64/ld-linux-x86-64.so.2  -m elf_x86_64  -o $@ /usr/lib/x86_64-linux-gnu/crt1.o /usr/lib/x86_64-linux-gnu/crti.o  $^ -lc /usr/lib/x86_64-linux-gnu/crtn.o

name.o: name.c

clean:
	-rm -f name *.o
	-rm -f *~
