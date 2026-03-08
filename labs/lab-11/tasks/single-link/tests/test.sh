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


test_a-dynamic()
{
    cd "$SRC_PATH"/a-dynamic || exit 1
    make clean > /dev/null 2>&1
    if make > /dev/null; then
        make clean > /dev/null 2>&1
        exit 0
    else
        make clean > /dev/null 2>&1
        exit 1
    fi
}

test_b-static()
{
    cd "$SRC_PATH"/b-static || exit 1
    make clean > /dev/null 2>&1
    if make > /dev/null; then
        make clean > /dev/null 2>&1
        exit 0
    else
        make clean > /dev/null 2>&1
        exit 1
    fi
}

test_c-standalone()
{
    cd "$SRC_PATH"/c-standalone || exit 1
    make clean > /dev/null 2>&1
    if make > /dev/null; then
        make clean > /dev/null 2>&1
        exit 0
    else
        make clean > /dev/null 2>&1
        exit 1
    fi
}



run_test test_a-dynamic 30
run_test test_b-static 30
run_test test_c-standalone 40
