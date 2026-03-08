#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

# shellcheck disable=SC1091
source ./graded_test.inc.sh

if test -z "$SRC_PATH"; then
    SRC_PATH=../support
fi

binary=$SRC_PATH/mul_arrays

test_mul_arrays()
{
    # Execute the program and capture the output
    OUTPUT=$($binary)

    # Calculate the expected output
    EXPECTED_OUTPUT=$(printf "The array that results from the product of the corresponding \
elements in array1 and array2 is:\n405 1330 2024 280 289 957 2886 14872 17820 1984 \n")

    # Check if the output matches the expected output
    if [[ "$OUTPUT" == "$EXPECTED_OUTPUT" ]]; then
        OUT=0
    else
        OUT=1
    fi

    return $OUT
}

run_test "test_mul_arrays" 100
