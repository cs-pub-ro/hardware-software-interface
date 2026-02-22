#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

# shellcheck disable=SC1091
source ./graded_test.inc.sh

if test -z "$SRC_PATH"; then
    SRC_PATH=../support
fi

binary=$SRC_PATH/getter_setter_printf

test_getter_setter_printf()
{
    # Execute the program and capture the output
    OUTPUT=$($binary)

    # Calculate the expected output
    EXPECTED_OUTPUT=$(printf "int_x: 1000\nchar_y: a\nstring_s: My string is better than yours\n\
int_x: 2000\nchar_y: b\nstring_s: Are you sure?\n")

    # Check if the output matches the expected output
    if [[ "$OUTPUT" == "$EXPECTED_OUTPUT" ]]; then
        OUT=0
    else
        OUT=1
    fi

    return $OUT
}

run_test "test_getter_setter_printf" 100
