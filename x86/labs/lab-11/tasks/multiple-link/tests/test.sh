#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

# shellcheck disable=SC1091
source graded_test.inc.sh


if test -z "$SRC_PATH"; then
    SRC_PATH=./../support/diy
fi

if test -z "$TEST_PATH"; then
    TEST_PATH="${PWD}"
fi


test_a-no-header()
{
    cd "$SRC_PATH"/a-no-header || exit 1
    make clean > /dev/null 2>&1
    if make > /dev/null; then
        make clean > /dev/null 2>&1
        exit 0
    else
        make clean > /dev/null 2>&1
        exit 1
    fi
}


test_b-header()
{
    cd "$SRC_PATH"/b-header || exit 1
    make clean > /dev/null 2>&1
    if make > /dev/null; then
        make clean > /dev/null 2>&1
        exit 0
    else
        make clean > /dev/null 2>&1
        exit 1
    fi
}

test_c-lib()
{
    cd "$SRC_PATH"/c-lib || exit 1
    make clean > /dev/null 2>&1
    if make > /dev/null; then
        make clean > /dev/null 2>&1
        exit 0
    else
        make clean > /dev/null 2>&1
        exit 1
    fi
}

run_test test_a-no-header 30
run_test test_b-header 30
run_test test_c-lib 40
