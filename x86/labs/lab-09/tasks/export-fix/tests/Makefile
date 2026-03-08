SRC_PATH ?= ../support
FULL_SRC_PATH = $(realpath $(SRC_PATH))

.PHONY: check clean build

check:
	SRC_PATH=$(FULL_SRC_PATH) bash -c ./run_all_tests.sh

build:
	make -s -C $(FULL_SRC_PATH)/a-func
	make -s -C $(FULL_SRC_PATH)/b-var
	make -s -C $(FULL_SRC_PATH)/c-var-2

clean:
	make -C $(FULL_SRC_PATH)/a-func clean
	make -C $(FULL_SRC_PATH)/b-var clean
	make -C $(FULL_SRC_PATH)/c-var-2 clean
