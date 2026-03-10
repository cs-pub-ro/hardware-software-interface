AS = nasm
RM_F = rm -f
RM_RF = rm -rf

SUPPORT_PATH ?= ../support
FULL_SUPPORT_PATH ?= $(realpath $(SUPPORT_PATH))

UTILSDIR := ../utils/

.PHONY: all src check lint clean

all: src

src:
	make -C $(FULL_SUPPORT_PATH)

check: src
	-make -C $(FULL_SUPPORT_PATH)
	-make clean
	-make -i SUPPORT_PATH=$(FULL_SUPPORT_PATH)
	-./run_all_tests.sh

lint:
	-cd .. && checkpatch.pl -f src/*.asm
	-cd .. && checkpatch.pl -f tests/*.sh
	-shellcheck *.sh

clean:
	-$(RM_F) *~
	-$(RM_F) *.o
	-$(RM_RF) ./test_results
