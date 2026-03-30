#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

# shellcheck disable=SC1091
source graded_test.inc.sh

binary=../support/reverse-array
ref_binary=../solution/reverse-array
out=reverse-array.out
ref=reverse-array.ref

if test -z "$SRC_PATH"; then
    SRC_PATH=./../support
fi

test_reverse_array()
{
    touch "$out" "$ref"

    ./"$binary" > "$out" 2>&1
    ./"$ref_binary" > "$ref" 2>&1

    if grep -q "mov.*input" "${binary}.asm"; then
        exit 1
    fi
    if grep -q "push.*input" "${binary}.asm" &&
       grep -q "pop.*output" "${binary}.asm"; then
        if diff -q "$out" "$ref"; then
            exit 0
        else
            exit 1
        fi
    else
        exit 1
    fi
}

run_test test_reverse_array 100
