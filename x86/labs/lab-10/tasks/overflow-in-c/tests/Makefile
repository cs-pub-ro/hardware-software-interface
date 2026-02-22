CC     = gcc
CFLAGS = -Wall -Wextra -O2
TARGET = test_overflow_in_C

SRCS = test_overflow_in_C.c graded_test.c

OBJS = $(SRCS:.c=.o)

all: $(TARGET)

$(TARGET): $(OBJS)
	$(CC) $(CFLAGS) $(OBJS) -o $@

%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@

clean:
	rm -f $(TARGET) $(OBJS)

check: all
	./run_all_tests.sh
	$(MAKE) clean

.PHONY: all clean test
