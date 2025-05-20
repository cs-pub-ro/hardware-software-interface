#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

source graded_test.inc.sh

binary=../support/hello_world

if test -z "$SRC_PATH"; then
    SRC_PATH=./../src
fi

LOG_DIR="./test_results"
mkdir -p "$LOG_DIR"

./$binary > "$LOG_DIR/result.txt"
N=$(head -n 1 < "$LOG_DIR/result.txt")

test_one_hello()
{
    if grep -q "Hello, World!" "$LOG_DIR/result.txt"; then
        exit 0
    else
        exit 1
    fi
}

test_N_hellos()
{
    nr_of_hellos=$(grep -c "Hello, World!" "$LOG_DIR/result.txt")

    if [ "$nr_of_hellos" -eq "$N" ]; then
        exit 0
    else
        exit 1
    fi
}

test_N_hellos_and_one_goodbye()
{
    nr_of_hellos=$(grep -c "Hello, World!" "$LOG_DIR/result.txt")
    nr_of_goodbyes=$(grep -c "Goodbye, World!" "$LOG_DIR/result.txt")

    if [ "$nr_of_hellos" -eq "$N" ] && [ "$nr_of_goodbyes" -eq 1 ]; then
        exit 0
    else
        exit 1
    fi
}

run_test test_one_hello 10
run_test test_N_hellos 60
run_test test_N_hellos_and_one_goodbye 30
