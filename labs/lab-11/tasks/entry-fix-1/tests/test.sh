#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

# shellcheck disable=SC1091
source graded_test.inc.sh


if test -z "$SRC_PATH"; then
    SRC_PATH=./../support
fi

if test -z "$TEST_PATH"; then
    TEST_PATH="${PWD}"
fi


test_a-c()
{
    cd "$SRC_PATH"/a-c || exit 1
    make clean > /dev/null 2>&1
    if make -S > /dev/null ; then
        ./hello > main.out
        if grep -qPz "Hi!\nBye!" main.out; then
            make clean > /dev/null 2>&1
            rm -f main.out
            exit 0
        else
            make clean > /dev/null 2>&1
            rm -f main.out
            exit 1
        fi
    else
        make clean > /dev/null 2>&1
        exit 1
    fi
}

test_b-asm()
{
    cd "$SRC_PATH"/b-asm || exit 1
    make clean > /dev/null 2>&1
    if make -S > /dev/null ; then
        ./hello > main.out
        if grep -qPz "Hi!\nBye!" main.out; then
            make clean > /dev/null 2>&1
            rm -f main.out
            exit 0
        else
            make clean > /dev/null 2>&1
            rm -f main.out
            exit 1
        fi
    else
        make clean > /dev/null 2>&1
        exit 1
    fi
}

test_c-extra-nolibc()
{
    cd "$SRC_PATH"/c-extra-nolibc || exit 1
    make clean > /dev/null 2>&1
    if make -S > /dev/null ; then
        ./hello > main.out
        if grep -qPz "Hi!\nBye!" main.out; then
            make clean > /dev/null 2>&1
            rm -f main.out
            exit 0
        else
            make clean > /dev/null 2>&1
            rm -f main.out
            exit 1
        fi
    else
        make clean > /dev/null 2>&1
        exit 1
    fi
}

test_d-extra-libc()
{
    cd "$SRC_PATH"/d-extra-libc || exit 1
    make clean > /dev/null 2>&1
    if make -S > /dev/null ; then
        ./hello > main.out
        if grep -qPz "Hi!\nBye!" main.out; then
            make clean > /dev/null 2>&1
            rm -f main.out
            exit 0
        else
            make clean > /dev/null 2>&1
            rm -f main.out
            exit 1
        fi
    else
        make clean > /dev/null 2>&1
        exit 1
    fi
}

run_test test_a-c 25
run_test test_b-asm 25
run_test test_c-extra-nolibc 25
run_test test_d-extra-libc 25
