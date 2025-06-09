CFLAGS = -fno-PIC -g
LDFLAGS = -static -no-pie

.DEFAULT_GOAL: all

.PHONY: all clean

all: hello

hello: hello.o
	#$(CC) $(LDFLAGS) -o $@ $^
	ld -static -m elf_x86_64 -L/usr/lib/gcc/x86_64-linux-gnu/13 -o $@ /usr/lib/x86_64-linux-gnu/crt1.o /usr/lib/x86_64-linux-gnu/crti.o $^ --start-group -lc -lgcc -lgcc_eh --end-group /usr/lib/x86_64-linux-gnu/crtn.o

hello.o: hello.c

clean:
	-rm -f hello *.o
	-rm -f *~
