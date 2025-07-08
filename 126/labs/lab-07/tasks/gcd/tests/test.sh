#!/bin/bash
# SPDX-License-Identifier: BSD-3-Clause

# shellcheck disable=SC1091
source graded_test.inc.sh

binary=../support/gcd
ref_binary=../solution/gcd
out=gcd.out
ref=gcd.ref

if test -z "$SRC_PATH"; then
    SRC_PATH=./../support
fi

test_segfault()
{
    touch "$out" "$ref"

    ./"$binary" > "$out" 2>&1
    ./"$ref_binary" > "$ref" 2>&1

    if grep -q "Segmentation fault" "$out"; then
        exit 1
    else
        exit 0
    fi
}

test_gcd()
{
    if diff -q "$out" "$ref"; then
        exit 0
    else
        exit 1
    fi
}

run_test test_segfault 50
run_test test_gcd 50
