#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

# shellcheck disable=SC1091
source ./graded_test.inc.sh

if test -z "$SRC_PATH"; then
    SRC_PATH=../support
fi

EXPLOIT="$SRC_PATH/exploit.sh"
BINARY="$SRC_PATH/buff-ovf3"

test_f1()
{
    expected="You're doing great"

    output=$($EXPLOIT | $BINARY | grep "great")

    if [[ "$output" == "$expected" ]]; then
        res=0
    else
        res=1
    fi

    return $res
}

test_f3()
{
    flag="HSI_{You're_a_wizard,_Harry}"

    output=$($EXPLOIT | $BINARY | grep "HSI")

    if [[ "$output" == "$flag" ]]; then
        res=0
    else
        res=1
    fi

    return $res
}

run_test test_f1 50
run_test test_f3 50
