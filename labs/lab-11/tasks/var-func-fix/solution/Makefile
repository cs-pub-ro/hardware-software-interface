CFLAGS = -fno-PIC -g
LDFLAGS = -no-pie

.DEFAULT_GOAL: all

.PHONY: all clean

all: main

main: main.o state.o
	$(CC) $(LDFLAGS) -o $@ $^

main.o: main.c state.h

state.o: state.c

clean:
	-rm -f main *.o
	-rm -f *~
