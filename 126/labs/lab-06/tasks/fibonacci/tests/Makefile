SRC_PATH ?= ../support
FULL_SRC_PATH = $(realpath $(SRC_PATH))

.PHONY: check clean

check:
	SRC_PATH=$(FULL_SRC_PATH) bash -c ./run_all_tests.sh

clean:
	rm err.log
