#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

source graded_test.inc.sh


if test -z "$SRC_PATH"; then
    SRC_PATH=./../support
fi

if test -z "$TEST_PATH"; then
    TEST_PATH="${PWD}"
fi


test_a-func()
{
    cd "$SRC_PATH"
    cd a-func
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

test_b-var()
{
    cd "$SRC_PATH"
    cd b-var
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

test_c-var-2()
{
    cd "$SRC_PATH"
    cd c-var-2
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

run_test test_a-func 30
run_test test_b-var 30
run_test test_c-var-2 40
