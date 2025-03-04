#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

source graded_test.inc.sh


if test -z "$SRC_PATH"; then
    SRC_PATH=./../support
fi

if test -z "$TEST_PATH"; then
    TEST_PATH="${PWD}"
fi


test_a-c()
{
    cd "$SRC_PATH"
    cd a-c
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

test_b-asm()
{
    cd "$SRC_PATH"
    cd b-asm
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

test_c-extra-nolibc()
{
    cd "$SRC_PATH"
    cd c-extra-nolibc
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

test_d-extra-libc()
{
    cd "$SRC_PATH"
    cd d-extra-libc
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

run_test test_a-c 25
run_test test_b-asm 25
run_test test_c-extra-nolibc 25
run_test test_d-extra-libc 25