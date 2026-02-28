CFLAGS = -fno-PIC -g
LDFLAGS = -no-pie

.DEFAULT_GOAL: all

.PHONY: all clean

all: hello

hello: hello.o
	$(CC) $(LDFLAGS) -o $@ $^
	# ld -dynamic-linker /lib64/ld-linux-x86-64.so.2  -m elf_x86_64  -o $@ /usr/lib/x86_64-linux-gnu/crt1.o /usr/lib/x86_64-linux-gnu/crti.o  $^ -lc /usr/lib/x86_64-linux-gnu/crtn.o

hello.o: hello.c

clean:
	-rm -f hello *.o
	-rm -f *~
