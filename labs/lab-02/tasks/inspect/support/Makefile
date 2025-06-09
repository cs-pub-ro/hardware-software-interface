CC = gcc
CFLAGS = -Wall -g
LDFLAGS =

TARGET_EXEC = inspect

SRCS := $(shell find $(SRC_DIRS) -name "*.c")
OBJS := $(SRCS:.c=.o)

$(info OBJS is $(OBJS))
$(info SRCS is $(SRCS))

$(TARGET_EXEC): $(OBJS)
	$(CC) $(OBJS) -o $@ $(LDFLAGS)

.o: %.c
	$(CC) $(CFLAGS) $(LDFLAGS) -c $< -o $@

.PHONY: clean

clean:
	$(RM) -r *.o $(TARGET_EXEC)
