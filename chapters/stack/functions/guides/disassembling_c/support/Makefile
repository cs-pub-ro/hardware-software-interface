CC = gcc
RM = rm

UTILSDIR := ..utils/

CFLAGS  ?= -m32 -g -Wall -Wextra -Werror -fno-pic -masm=intel
LDFLAGS ?= -m32 -no-pie

all: test

test: test.c
	$(CC) $(CFLAGS) $(LDFLAGS) $< -o $@

.PHONY: clean

clean:
	$(RM) test
