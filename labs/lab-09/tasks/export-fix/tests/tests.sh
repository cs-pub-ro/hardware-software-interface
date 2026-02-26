#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

# shellcheck disable=SC1091
source ./graded_test.inc.sh

if test -z "$SRC_PATH"; then
    SRC_PATH=../support
fi

test_a_func()
{
    make -s -C "$SRC_PATH/a-func" || return 1

    binary=$SRC_PATH/a-func/main

    # Execute the program and capture the output
    OUTPUT=$(tr -d '\n' < <($binary) | sed 's/[[:space:]]*$//')

    # Calculate the expected output
    EXPECTED_OUTPUT=$(printf "get(): 10age: 33")

    # Check if the output matches the expected output
    if [[ "$OUTPUT" == "$EXPECTED_OUTPUT" ]]; then
        OUT=0
    else
        OUT=1
    fi

    return $OUT
}

test_b_var()
{
    make -s -C "$SRC_PATH/b-var" || return 1

    binary=$SRC_PATH/b-var/main

    # Execute the program and capture the output
    OUTPUT=$(tr -d '\n' < <($binary) | sed 's/[[:space:]]*$//')

    # Calculate the expected output
    EXPECTED_OUTPUT=$(printf "get(): 10age: 33")

    # Check if the output matches the expected output
    if [[ "$OUTPUT" == "$EXPECTED_OUTPUT" ]]; then
        OUT=0
    else
        OUT=1
    fi

    return $OUT
}

test_c_var_2()
{
    make -s -C "$SRC_PATH/c-var-2" || return 1

    binary=$SRC_PATH/c-var-2/main

    # Execute the program and capture the output
    OUTPUT=$(tr -d '\n' < <($binary) | sed 's/[[:space:]]*$//')

    # Calculate the expected output
    EXPECTED_OUTPUT=$(printf "get(): 10age: 33")

    # Check if the output matches the expected output
    if [[ "$OUTPUT" == "$EXPECTED_OUTPUT" ]]; then
        OUT=0
    else
        OUT=1
    fi

    return $OUT
}

run_test "test_a_func" 33
run_test "test_b_var" 33
run_test "test_c_var_2" 34
