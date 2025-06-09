CFLAGS = -Wall -g
CXXFLAGS = -Wall -g

.DEFAULT_GOAL: all

.PHONY: all clean

all: main

main: main.o hidden.o plain.o
	$(CC) $(LDFLAGS) -o $@ $^

main.o: main.c ops.h

hidden.o: hidden.c

plain.o: plain.c

clean:
	-rm -f main *.o
	-rm -f *~
