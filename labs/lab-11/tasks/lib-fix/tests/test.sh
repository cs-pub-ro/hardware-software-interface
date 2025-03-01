#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

source graded_test.inc.sh


if test -z "$SRC_PATH"; then
    SRC_PATH=./../support
fi

if test -z "$TEST_PATH"; then
    TEST_PATH="${PWD}"
fi


test_library_issue()
{
    cd "$SRC_PATH"
    make clean > /dev/null 2>&1
    if make > /dev/null 2>&1; then
        make clean > /dev/null 2>&1
        exit 0
    else
        make clean > /dev/null 2>&1
        exit 1
    fi
}



run_test test_library_issue 100
