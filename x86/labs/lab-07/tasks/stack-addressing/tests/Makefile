SRC_PATH ?= ../support
FULL_SRC_PATH = $(realpath $(SRC_PATH))
SOL_PATH ?= ../solution
FULL_SOL_PATH = $(realpath $(SOL_PATH))
CPPFLAGS = -I. -I$(realpath $(SRC_PATH)) -I../utils
CFLAGS = -Wall -Wextra
# Remove the line below to disable debugging support.
CFLAGS += -g -O0

SRCS = $(wildcard *.asm)
ASM_FILES = $(patsubst %.asm,%,$(SRCS))

.PHONY: all src check lint clean

all: $(ASM_FILES) src

$(ASM_FILES): %:%.asm | src
	nasm -o $@ $<

src:
	make -C $(FULL_SRC_PATH)

check: $(ASM_FILES)
	make -C $(FULL_SRC_PATH) clean
	make -C $(FULL_SOL_PATH)
	make clean
	make -i SRC_PATH=$(FULL_SRC_PATH)
	./run_all_tests.sh

lint:
	-cd .. && checkpatch.pl -f src/*.c
	-cd .. && checkpatch.pl -f tests/*.sh
	-cd .. && cpplint --recursive src/
	-cd .. && shellcheck tests/*.sh

clean:
	-rm -f *~
	-rm -f *.out
	-rm -f *.ref
