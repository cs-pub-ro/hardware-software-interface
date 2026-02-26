#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

# shellcheck disable=SC1091
source ./graded_test.inc.sh

if test -z "$SRC_PATH"; then
    SRC_PATH=../support
fi

binary=$SRC_PATH/hello

test_include_fix()
{
    make -s -C "$SRC_PATH" || return 1

    # Execute the program and capture the output
    OUTPUT=$(tr -d '\n' < <($binary) | sed 's/[[:space:]]*$//')

    # Calculate the expected output
    EXPECTED_OUTPUT=$(printf "Hi!Bye!")

    # Check if the output matches the expected output
    if [[ "$OUTPUT" == "$EXPECTED_OUTPUT" ]]; then
        OUT=0
    else
        OUT=1
    fi

    return $OUT
}

run_test "test_include_fix" 100
