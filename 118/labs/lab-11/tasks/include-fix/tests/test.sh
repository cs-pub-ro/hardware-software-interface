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

test_warning() {
    cd "$SRC_PATH" || exit 1
    make clean >/dev/null 2>&1
    make >make_output.log
    if grep -q "warning" make_output.log; then
        make clean >/dev/null 2>&1
        rm make_output.log
        exit 1
    else
        ./hello >main.out
        if grep -qPz "Hi!\nBye!" main.out; then
            make clean >/dev/null 2>&1
            rm -f main.out make_output.log
            exit 0
        else
            make clean >/dev/null 2>&1
            rm -f main.out make_output.log
            exit 1
        fi
    fi
}

run_test test_warning 100
