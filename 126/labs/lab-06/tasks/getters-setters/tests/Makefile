SRC_PATH ?= ../support
FULL_SRC_PATH = $(realpath $(SRC_PATH))

.PHONY: check clean build

check: build
	SRC_PATH=$(FULL_SRC_PATH) bash -c ./run_all_tests.sh

build:
	make -s -C $(FULL_SRC_PATH)

clean:
	make -C $(FULL_SRC_PATH) clean
