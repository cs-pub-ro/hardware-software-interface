#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

source graded_test.inc.sh


if test -z "$SRC_PATH"; then
    SRC_PATH=./../support
fi

if test -z "$TEST_PATH"; then
    TEST_PATH="${PWD}"
fi


test_linking-object-file()
{
    cd "$SRC_PATH"
    make clean > /dev/null 2>&1
    make > /dev/null 2>&1
    ./main > main.out 2>&1
    if grep -q "price is 21" main.out && grep -q "quantity is 42" main.out; then
        rm main.out
        make clean > /dev/null 2>&1
        exit 0
    else
        make clean > /dev/null 2>&1
        rm main.out
        exit 1
    fi
}


run_test test_linking-object-file 100