CFLAGS = -Wall -g
CXXFLAGS = -Wall -Werror -g

.DEFAULT_GOAL: all

.PHONY: all clean

all: hello

hello: hello.o
	$(CC) $(LDFLAGS) -o $@ $^

hello.o: hello.c

clean:
	-rm -f hello *.o
