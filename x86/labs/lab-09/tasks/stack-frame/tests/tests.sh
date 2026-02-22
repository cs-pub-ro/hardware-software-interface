#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

# shellcheck disable=SC1091
source ./graded_test.inc.sh

if test -z "$SRC_PATH"; then
    SRC_PATH=../support
fi

binary=$SRC_PATH/main

test_stack_frame()
{
    make -s -C "$SRC_PATH" || return 1

    # Execute the program and capture the output
    OUTPUT=$($binary)

    # Calculate the expected output
    EXPECTED_OUTPUT=$(printf "Hello world!")

    # Check if the output matches the expected output
    if [[ "$OUTPUT" == "$EXPECTED_OUTPUT" ]]; then
        OUT=0
    else
        OUT=1
    fi

    return $OUT
}

run_test "test_stack_frame" 100
