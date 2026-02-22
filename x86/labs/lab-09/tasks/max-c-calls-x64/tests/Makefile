SRC_PATH ?= ../solution
FULL_SRC_PATH = $(realpath $(SRC_PATH))

.PHONY: check clean build

check:
	SRC_PATH=$(FULL_SRC_PATH) bash -c ./run_all_tests.sh

build:
	make -s -C $(FULL_SRC_PATH)

clean:
	make -C $(FULL_SRC_PATH) clean
