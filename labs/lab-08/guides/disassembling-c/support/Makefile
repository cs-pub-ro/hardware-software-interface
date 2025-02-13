CC = gcc

CFLAGS  ?= -m32 -g -Wall -Wextra -Werror -fno-pic -masm=intel
LDFLAGS ?= -m32 -no-pie

all: test

.PHONY: clean

clean:
	-rm -f test
