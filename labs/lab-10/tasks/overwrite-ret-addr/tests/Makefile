CC     = gcc
CFLAGS = -Wall -Wextra -O2
TARGET = test_overwrite_ret_addr

SRCS = test_overwrite_ret_addr.c graded_test.c

OBJS = $(SRCS:.c=.o)

all: $(TARGET)

$(TARGET): $(OBJS)
	$(CC) $(CFLAGS) $(OBJS) -o $@

%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@

clean:
	rm -f $(TARGET) $(OBJS)

check: all
	chmod +x run_all_tests.sh
	./run_all_tests.sh
	$(MAKE) clean

.PHONY: all clean test
