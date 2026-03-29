#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

source graded_test.inc.sh

binary=../support/fibonacci

if test -z "$SRC_PATH"; then
    SRC_PATH=./../src
fi

LOG_DIR="./test_results"
mkdir -p "$LOG_DIR"

./$binary > "$LOG_DIR/result.txt"

test_fibonacci()
{
    n=$(head -n 1 "$LOG_DIR/result.txt")
    res=$(tail -n 1 "$LOG_DIR/result.txt")

    # Calculate the nth fibonacci value
    a=0
    b=1
    c=1

    calc=0

    if [ "$n" -eq 0 ]; then
        calc=0
    elif [ "$n" -eq 1 ]; then
        calc=1
    else
        for _ in $(seq 2 "$n"); do
            c=$((a + b))
            a=$b
            b=$c
        done
        calc=$c
    fi

    if [ $calc -eq "$res" ]; then
        exit 0
    else
        exit 1
    fi
}

run_test test_fibonacci 100
