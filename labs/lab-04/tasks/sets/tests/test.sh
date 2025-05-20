#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

source graded_test.inc.sh

binary=../support/sets

if test -z "$SRC_PATH"; then
    SRC_PATH=./../src
fi

LOG_DIR="./test_results"
mkdir -p "$LOG_DIR"

./$binary > "$LOG_DIR/result.txt"

FIRST_SET=$(head -n 1 "$LOG_DIR/result.txt")
SECOND_SET=$(sed -n 2p "$LOG_DIR/result.txt")

test_reunion()
{
    nr_lines=$(wc -l < "$LOG_DIR/result.txt")
    if [ "$nr_lines" -lt 3 ]; then
        exit 1
    fi

    result=$(sed -n 3p "$LOG_DIR/result.txt")
    expected=$((FIRST_SET | SECOND_SET))

    if [ "$result" -eq $expected ]; then
        exit 0
    else
        exit 1
    fi
}

test_add_value_in_first_set()
{
    nr_lines=$(wc -l < "$LOG_DIR/result.txt")
    if [ "$nr_lines" -lt 4 ]; then
        exit 1
    fi

    # they need to be different and the new one needs to be bigger
    new_first_set=$(sed -n 4p "$LOG_DIR/result.txt")

    if [ "$new_first_set" -eq "$FIRST_SET" ] || [ "$new_first_set" -le "$FIRST_SET" ]; then
        exit 1
    else
        echo "$new_first_set" > "$LOG_DIR/first_set.tmp"
        exit 0
    fi
}

test_intersection()
{
    nr_lines=$(wc -l < "$LOG_DIR/result.txt")
    if [ "$nr_lines" -lt 5 ]; then
        exit 1
    fi

    first_set=$(cat "$LOG_DIR/first_set.tmp")

    result=$(sed -n 5p "$LOG_DIR/result.txt")
    expected=$((first_set & SECOND_SET))

    if [ "$result" -eq $expected ]; then
        exit 0
    else
        exit 1
    fi
}

test_missing_elements_first_set()
{
    nr_lines=$(wc -l < "$LOG_DIR/result.txt")
    if [ "$nr_lines" -lt 6 ]; then
        exit 1
    fi

    first_set=$(cat "$LOG_DIR/first_set.tmp")

    result=$(sed -n 6p "$LOG_DIR/result.txt")
    expected=$((~first_set & 0xFFFFFFFF))

    if [ "$result" -eq $expected ]; then
        exit 0
    else
        exit 1
    fi
}

test_remove_element_first_set()
{
    nr_lines=$(wc -l < "$LOG_DIR/result.txt")
    if [ "$nr_lines" -lt 7 ]; then
        exit 1
    fi

    first_set=$(cat "$LOG_DIR/first_set.tmp")

    # they need to be different and the new one needs to be smaller
    new_first_set=$(sed -n 7p "$LOG_DIR/result.txt")

    if [ "$new_first_set" -eq "$first_set" ] || [ "$new_first_set" -ge "$first_set" ]; then
        exit 1
    else
        echo "$new_first_set" > "$LOG_DIR/first_set.tmp"
        exit 0
    fi
}

test_difference()
{
    nr_lines=$(wc -l < "$LOG_DIR/result.txt")
    if [ "$nr_lines" -lt 8 ]; then
        exit 1
    fi

    first_set=$(cat "$LOG_DIR/first_set.tmp")

    result=$(sed -n 8p "$LOG_DIR/result.txt")
    expected=$((~(~first_set | SECOND_SET)))

    if [ "$result" -eq $expected ]; then
        exit 0
    else
        exit 1
    fi
}

run_test test_reunion 10
run_test test_add_value_in_first_set 20
run_test test_intersection 10
run_test test_missing_elements_first_set 20
run_test test_remove_element_first_set 20
run_test test_difference 20
