#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

source graded_test.inc.sh

of_binary=../support/of
cf_binary=../support/cf
cf_of_binary=../support/cf_of

if test -z "$SRC_PATH"; then
    SRC_PATH=./../src
fi

LOG_DIR="./test_results"
mkdir -p "$LOG_DIR"

test_overflow_flag()
{
    ./$of_binary > "$LOG_DIR/of_result.txt"

    if grep -q "the Overflow Flag is active" "$LOG_DIR/of_result.txt"; then
        exit 0
    else
        exit 1
    fi
}

test_carry_flag()
{
    ./$cf_binary > "$LOG_DIR/cf_result.txt"

    if grep -q "the Carry Flag is active" "$LOG_DIR/cf_result.txt"; then
        exit 0
    else
        exit 1
    fi
}

test_carry_and_overflow_flag()
{
    ./$cf_of_binary > "$LOG_DIR/cf_of_result.txt"

    if grep -q "the Carry Flag and the Overflow Flag are active" "$LOG_DIR/cf_of_result.txt"; then
        exit 0
    else
        exit 1
    fi
}

run_test test_overflow_flag 25
run_test test_carry_flag 25
run_test test_carry_and_overflow_flag 50
