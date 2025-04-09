#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

source graded_test.inc.sh


if test -z "$SRC_PATH"; then
    SRC_PATH=./../support
fi

if test -z "$TEST_PATH"; then
    TEST_PATH="${PWD}"
fi


test_EntryFix2()
{
    cd "$SRC_PATH"
    make clean > /dev/null 2>&1
    if make -S > /dev/null 2>/dev/null; then
        make clean > /dev/null 2>&1
        exit 0
    else
        make clean > /dev/null 2>&1
        exit 1
    fi
    cd "$TEST_PATH"
}



run_test test_EntryFix2 100