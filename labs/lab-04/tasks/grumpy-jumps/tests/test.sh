#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

source graded_test.inc.sh

binary=../support/grumpy_jumps

if test -z "$SRC_PATH"; then
    SRC_PATH=./../src
fi

LOG_DIR="./test_results"
mkdir -p "$LOG_DIR"

./$binary > "$LOG_DIR/result.txt"
FIRST_LINE=$(head -n 1 "$LOG_DIR/result.txt")
NR_LINES=$(wc -l < "$LOG_DIR/result.txt")

test_display_right()
{
    if [ "$FIRST_LINE" = "Well done!" ]; then
        exit 0
    else
        exit 1
    fi
}

test_display_only_right()
{
    if [ "$NR_LINES" -eq 1 ]; then
        if [ "$FIRST_LINE" = "Well done!" ]; then
            exit 0
        else
            exit 1
        fi
    else
        exit 1
    fi
}

run_test test_correct_message 50
run_test test_only_correct_message 50
