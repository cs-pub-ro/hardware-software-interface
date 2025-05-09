#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

# shellcheck disable=SC1091
source ./graded_test.inc.sh

if test -z "$SRC_PATH"; then
    SRC_PATH=../support
fi

EXPLOIT="$SRC_PATH/exploit.sh"
BINARY="$SRC_PATH/buff-ovf3"

test_payload()
{
    flag="HSI_{You're_a_wizard,_Harry}"

    output=$($EXPLOIT | $BINARY | grep "HSI")

    echo

    if [[ $output == $flag ]]; then
        OUT=0
    else
        OUT=1
    fi

    return $OUT
}

run_test test_payload 100
