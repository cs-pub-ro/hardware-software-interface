SRC_PATH ?= ../support
FULL_SRC_PATH = "$(realpath $(SRC_PATH))"
CPPFLAGS = -I. -I$(FULL_SRC_PATH)
CFLAGS = -Wall -Wextra
# Remove the line below to disable debugging support.
CFLAGS += -g -O0

SRCS = $(wildcard test*.c)
OBJS = $(patsubst %.c,%.o,$(SRCS))
EXECS = $(patsubst %.c,%,$(SRCS))


.PHONY: all src check clean

all: src $(EXECS)

$(EXECS): %:%.o graded_test.o $(SRC_PATH)/odd_even.o | src
	$(CC) $(LDFLAGS) -o $@ $^ $(LDLIBS)

$(OBJS): %.o:%.c graded_test.h

graded_test.o: graded_test.c graded_test.h

src:
	make -C $(FULL_SRC_PATH)

check:
	make -C $(FULL_SRC_PATH) clean
	make clean
	make -i SRC_PATH=$(FULL_SRC_PATH)
	./run_all_tests.sh

clean:
	-rm -f *~
	-rm -f graded_test.o $(OBJS)
	-rm -f $(EXECS)
	-rm -f *.out
	-rm -f *.ref
