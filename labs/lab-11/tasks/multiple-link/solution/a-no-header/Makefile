CFLAGS = -fno-PIC -g
LDFLAGS = -no-pie

.DEFAULT_GOAL: all

.PHONY: all clean

all: main

main: main.o mul.o div.o
	$(CC) $(LDFLAGS) -o $@ $^

main.o: main.c

mul.o: mul.c

div.o: div.c

clean:
	-rm -f main *.o
	-rm -f *~
