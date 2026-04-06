CFLAGS = -fno-PIC -g
LDFLAGS = -no-pie

.DEFAULT_GOAL: all

.PHONY: all clean

all: main

main: main.o libops.a
	$(CC) $(LDFLAGS) -o $@ $< -L. -lops

main.o: main.c ops.h

libops.a: mul.o div.o
	ar rc $@ $^

mul.o: mul.c

div.o: div.c

clean:
	-rm -f main *.o *.a
	-rm -f *~
