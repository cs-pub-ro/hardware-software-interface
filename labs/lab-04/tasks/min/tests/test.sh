#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

source graded_test.inc.sh

binary=../support/min
source_file=../support/min.asm

if test -z "$SRC_PATH"; then
    SRC_PATH=./../src
fi

LOG_DIR="./test_results"
mkdir -p "$LOG_DIR"

./$binary > "$LOG_DIR/result.txt"

test_use_compare()
{
    found_compare=$(grep -c "cmp" "$source_file")

    if [ "$found_compare" -gt 0 ]; then
        exit 0
    else
        exit 1
    fi
}

test_use_jump()
{
    found_jmp=$(grep -c "jmp" "$source_file")
    found_jl=$(grep -c "jg" "$source_file")
    found_jg=$(grep -c "jl" "$source_file")

    if [ "$found_jmp" -gt 0 ] || [ "$found_jl" -gt 0 ] || [ "$found_jg" -gt 0 ]; then
        exit 0
    else
        exit 1
    fi
}

test_use_xchg()
{
    found_xchg=$(grep -c "xchg" "$source_file")

    if [ "$found_xchg" -gt 0 ]; then
        exit 0
    else
        exit 1
    fi
}

test_check_result()
{
    first_value=$(head -n 1 "$LOG_DIR/result.txt")
    second_value=$(sed -n 2p "$LOG_DIR/result.txt")
    result=$(tail -n 1 "$LOG_DIR/result.txt")

    min_value=$(echo -e "$first_value\n$second_value" | sort -n | head -n 1)

    if [ "$min_value" -eq "$result" ]; then
        exit 0
    else
        exit 1
    fi
}

run_test test_use_compare 10
run_test test_use_jump 10
run_test test_use_xchg 10
run_test test_check_result 70
